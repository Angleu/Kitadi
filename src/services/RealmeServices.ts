import Realm from "realm";
import UserSchema from "./Schema/UserSchema";


export default class RealmeService {
    async init() {
       return await Realm.open({
            path: 'bank-data',
            schema: [UserSchema]
        })
    }
}
