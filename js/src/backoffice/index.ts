import {extend} from 'flarum/common/extend';
import UserShowPage from 'flamarkt/core/backoffice/pages/UserShowPage';
import ItemList from 'flarum/common/utils/ItemList';

app.initializers.add('flamarkt-no-usernames', () => {
    extend(UserShowPage.prototype, 'fields', function (fields: ItemList) {
        if (fields.has('username')) {
            fields.remove('username');
        }
    });

    extend(UserShowPage.prototype, 'data', function (data: any) {
        delete data.username;
    });
});
