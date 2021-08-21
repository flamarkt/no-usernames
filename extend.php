<?php

namespace Flamarkt\NoUsernames;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Extend;
use Flarum\Foundation\ValidationException;
use Flarum\User\Event\Saving;
use Flarum\User\UserValidator;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Validation\Validator;
use Ramsey\Uuid\Uuid;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    (new Extend\Frontend('backoffice'))
        ->js(__DIR__ . '/js/dist/backoffice.js'),

    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attributes(function () {
            // Ideally we should unset the value, but that doesn't seem possible with Flarum extenders
            // The username is still used by the avatar generation which expects a string
            return [
                'username' => '',
            ];
        }),

    (new Extend\Event())
        ->listen(Saving::class, function (Saving $event) {
            if (Arr::get($event->data, 'attributes.username')) {
                // In case there is any form where our customizations don't work, we want to show an error message
                // instead of the user only noticing later their input wasn't taken into account
                throw new ValidationException([
                    'username' => resolve('translator')->trans('flamarkt-no-usernames.api.username-not-allowed'),
                ]);
            }

            if (!$event->user->exists) {
                $event->user->username = Uuid::uuid4()->toString();
            }
        }),

    (new Extend\Validator(UserValidator::class))
        ->configure(function (UserValidator $flarumValidator, Validator $validator) {
            $rules = $validator->getRules();

            if (!array_key_exists('username', $rules)) {
                return;
            }

            $rules['username'] = array_map(function (string $rule) {
                // Flarum will still use this validator against our UUID, so we need to allow a longer username
                if (Str::startsWith($rule, 'max:')) {
                    return 'max:36';
                }

                return $rule;
            }, $rules['username']);

            $validator->setRules($rules);
        }),
];
