import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationContext, { AuthenticationProvider } from '../context/Authentication';
import Auth from './auth';
import AppRoute from './App.auth';

const Stack = createNativeStackNavigator()

export default function Routes() {
    const generalContext = useContext(AuthenticationContext);
    return (
        <NavigationContainer>
            <AuthenticationProvider>
                <Auth />
            </AuthenticationProvider>
        </NavigationContainer>
    );
}