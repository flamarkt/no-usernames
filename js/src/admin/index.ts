import app from 'flarum/admin/app';
import {extend} from 'flarum/common/extend';
import UserListPage from 'flarum/admin/components/UserListPage';
import ItemList from 'flarum/common/utils/ItemList';
import User from 'flarum/common/models/User';
import extendUserEditModal from '../common/extendUserEditModal';

app.initializers.add('flamarkt-no-usernames', () => {
    extend(UserListPage.prototype, 'columns', function (columns: ItemList) {
        if (columns.has('username')) {
            columns.remove('username');
        }

        // Since username contained the link to the profile, we'll add an alternative link with the display name
        // This is the same name as the one that will be introduced in https://github.com/flarum/core/pull/2998
        // so our code will be skipped on purpose once that eventually happens
        if (!columns.has('displayName')) {
            columns.add('displayName', {
                name: app.translator.trans('flamarkt-no-usernames.admin.users.columns.displayName'),
                content: (user: User) => {
                    const profileUrl = `${app.forum.attribute('baseUrl')}/u/${user.slug()}`;

                    return m('a', {
                        target: '_blank',
                        href: profileUrl,
                    }, user.displayName());
                },
            }, 90);
        }
    });

    extendUserEditModal();
});
