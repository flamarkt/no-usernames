import {extend} from 'flarum/common/extend';
import EditUserModal from 'flarum/common/components/EditUserModal';

export default function () {
    extend(EditUserModal.prototype, 'fields', function (fields) {
        if (fields.has('username')) {
            fields.remove('username');
        }
    });

    extend(EditUserModal.prototype, 'data', function (data) {
        delete data.username;
    });
}
