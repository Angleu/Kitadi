import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Init from '../Pages/Auth/Init';
import Login from '../Pages/Auth/Login';
import Details from '../Pages/App/Details';
import Informations from '../Pages/App/Informations';
import Cadastrar from '../Pages/Auth/Cadastrar';
import ValidationPage from '../Pages/Auth/ValidationPage';
import CadastroDadosPessoais from '../Pages/Auth/CadastroDadosPessoais';
import CadastroConta from '../Pages/Auth/CadastroConta';
import CadastroEndereco from '../Pages/Auth/CadastroEndereco';
import { BankSection } from '../Pages/App/Deposit/Others/BankSection';
import { CardDeposit } from '../Pages/App/Deposit/Others/CardDeposit';
import AppRoute from './App.auth';
import AuthenticationContext from '../context/Authentication';

const Stack = createNativeStackNavigator()

export default function Auth() {
    // const generalContext = useContext(AuthenticationContext);
    // if(generalContext.isLogin)

    return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="init" component={Init} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="cadastrar" component={Cadastrar} />
                <Stack.Screen name="validationPage" component={ValidationPage} />
                <Stack.Screen name="CadastroDadosPessoais" component={CadastroDadosPessoais} />
                <Stack.Screen name="cadastoConta" component={CadastroConta} />
                <Stack.Screen name="cadastroEndereco" component={CadastroEndereco} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Informations" component={Informations} />
                <Stack.Screen name="BankSection" component={BankSection} />
                <Stack.Screen name="CardDeposit" component={CardDeposit} />
                <Stack.Screen name="auth" component={AppRoute} />

            </Stack.Navigator>
    );
}