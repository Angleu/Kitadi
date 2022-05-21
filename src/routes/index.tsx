import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationContext, { AuthenticationProvider } from '../context/Authentication';
import Auth from './auth';

const Stack = createNativeStackNavigator()

export default function Routes() {
    const generalContext = useContext(AuthenticationContext);
    return (
        <NavigationContainer>
            <AuthenticationProvider>
                {generalContext.isLogin ? {} : <Auth />}
            </AuthenticationProvider>
        </NavigationContainer>
    );
}