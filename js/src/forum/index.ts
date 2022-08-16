import app from 'flarum/forum/app';
import {extend} from 'flarum/common/extend';
import LogInModal from 'flarum/forum/components/LogInModal';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import extendUserEditModal from '../common/extendUserEditModal';

app.initializers.add('flamarkt-no-usernames', () => {
    extend(LogInModal.prototype, 'fields', function (items) {
        // Change field type and placeholder to just "email" instead of "username or email"
        if (items.has('identification') && items.get('identification') && Array.isArray(items.get('identification').children)) {
            items.get('identification').children.forEach(vdom => {
                if (vdom && vdom.attrs && vdom.attrs.name === 'identification') {
                    vdom.attrs.placeholder = app.translator.trans('flamarkt-no-usernames.forum.login.email');
                    vdom.attrs.type = 'email';
                }
            });
        }
    });

    extend(SignUpModal.prototype, 'fields', function (items) {
        if (items.has('username')) {
            items.remove('username');
        }
    });

    extend(SignUpModal.prototype, 'submitData', function (data: any) {
        delete data.username;
    });

    extendUserEditModal();
});
