import { ObjectSchema } from 'realm'

export const UserSchema: ObjectSchema = {
    name: 'User',
    properties: {
        id_user: "string",
        name: "string",
        dataBirthday: "Date",
        natural: "string",
        genere: "string"
    },
    primaryKey: 'id_user'
}

export default UserSchema;