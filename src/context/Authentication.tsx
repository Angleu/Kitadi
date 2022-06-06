import React, { createContext, useCallback, useEffect, useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import LoginServices from "../services/LoginServices";
import UserServices from "../services/UserServices";
import AccountServices from "../services/AccountServices";

interface IApplicationContext {
    login: object | null;
    setLogin: Function;
    user: object | null;
    setUser: Function;
    account: object | null;
    setAccount: Function;
    isLogin: boolean;


}

const AuthenticationContext = createContext({} as IApplicationContext);

export const AuthenticationProvider: React.FC = ({ children }) => {
    const [account, setAccount] = useState<object | null>(null);
    const [user, setUser] = useState<object | null>(null);
    const [login, setLogin] = useState<object | null>(null);

    useEffect(() => {

        async function loadStorage() {

            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedAccount = await AsyncStorage.getItem('@RNAuth:account');
            const storageLogin = await AsyncStorage.getItem('@RNAuth:login');

            if (storagedUser && storagedAccount && storageLogin) {
                setUser(JSON.parse(storagedUser));
                setLogin(JSON.parse(storageLogin))
                if (user) {
                    const responseAccount = await new AccountServices().executeOne(user.id_user as string)
                    console.log(responseAccount)
                    if (responseAccount instanceof Object) {
                        // const responseAccount = await new AccountServices().executeOne(user?.id_user as string)
                        if (responseAccount instanceof Object) {
                            setAccount(responseAccount);
                            await AsyncStorage.setItem('@RNAuth:account', JSON.stringify(responseAccount));
                        }
                    }
                }
            }
        }

        loadStorage()

    }, [(user !== null) || (account !== null)])

    return (
        <AuthenticationContext.Provider
            value={{ isLogin: (!!user && !!account), account, setAccount, user, setUser, login, setLogin }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContext;


