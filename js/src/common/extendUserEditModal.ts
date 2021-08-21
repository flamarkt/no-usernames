import {extend} from 'flarum/common/extend';
import EditUserModal from 'flarum/common/components/EditUserModal';
import ItemList from 'flarum/common/utils/ItemList';

export default function () {
    extend(EditUserModal.prototype, 'fields', function (fields: ItemList) {
        if (fields.has('username')) {
            fields.remove('username');
        }
    });

    extend(EditUserModal.prototype, 'data', function (data: any) {
        delete data.username;
    });
}
