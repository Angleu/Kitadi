import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Init from '../Pages/Auth/Init';
import Cadastrar from '../Pages/Auth/Cadastrar';
import ValidationPage from '../Pages/Auth/ValidationPage';
import CadastroDadosPessoais from '../Pages/Auth/CadastroDadosPessoais';
import CadastroConta from '../Pages/Auth/CadastroConta';
import CadastroEndereco from '../Pages/Auth/CadastroEndereco';

const Stack = createNativeStackNavigator()

export default function Auth() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="init" component={Init} />
                <Stack.Screen name="cadastrar" component={Cadastrar} />
                <Stack.Screen name="validationPage" component={ValidationPage} />
                <Stack.Screen name="CadastroDadosPessoais" component={CadastroDadosPessoais} />
                <Stack.Screen name="cadastoConta" component={CadastroConta} />
                <Stack.Screen name="cadastroEndereco" component={CadastroEndereco} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}