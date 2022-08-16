import {extend} from 'flarum/common/extend';
import UserShowPage from 'flamarkt/backoffice/backoffice/pages/UserShowPage';

app.initializers.add('flamarkt-no-usernames', () => {
    extend(UserShowPage.prototype, 'fields', function (fields) {
        if (fields.has('username')) {
            fields.remove('username');
        }
    });

    extend(UserShowPage.prototype, 'data', function (data) {
        delete data.username;
    });
});
