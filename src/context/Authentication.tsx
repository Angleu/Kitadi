import React, { createContext, useCallback, useState } from "react";

interface IApplicationContext {
    user: object | null;
    setUser: Function;
    account: object | null;
    setAccount: Function;
    isLogin: boolean;
    login: Function;


}

const AuthenticationContext = createContext({} as IApplicationContext);

export const AuthenticationProvider: React.FC = ({ children }) => {
    const [account, setAccount] = useState<object | null>(null);
    const [user, setUser] = useState<object | null>(null);

    const login = useCallback((email: string, password: string) => {

    }, [])

    return (
        <AuthenticationContext.Provider
            value={{ isLogin: (!!user && !!account), account, setAccount, user, setUser, login }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContext;


