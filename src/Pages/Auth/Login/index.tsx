import React, {useState, useContext} from 'react';
import {Pressable, Keyboard, KeyboardAvoidingView} from 'react-native';
import {ArrowCircleLeft} from 'phosphor-react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  ContainerInformation,
  ImageTop,
  ImageBottom,
  Title,
} from './style';
import ValidationContext from '../../../context/Validation';
import AuthenticationContext from '../../../context/Authentication';
import LoginServices from '../../../services/LoginServices';
import UserServices from '../../../services/UserServices';
import AccountServices from '../../../services/AccountServices';
import AsyncStorage from '@react-native-community/async-storage';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const validationContext = useContext(ValidationContext);
  const authContext = useContext(AuthenticationContext);

  async function logar(email: string, password: string) {
    console.log(email, password);
    const loginResponse = await new LoginServices().login(email, password);
    console.log(loginResponse);
    if (loginResponse instanceof Error) return null;

    if (loginResponse) {
      const {id_login} = loginResponse;
      const userResponse = await new UserServices().executeOne(id_login);
      if (userResponse instanceof Object) {
        authContext.setUser(userResponse);
        await AsyncStorage.setItem(
          '@RNAuth:user',
          JSON.stringify(userResponse),
        );
      }
      const responseAccount = await new AccountServices().executeOne(
        userResponse?.id_user as string,
      );
      if (responseAccount instanceof Object) {
        authContext.setAccount(responseAccount);
        await AsyncStorage.setItem(
          '@RNAuth:account',
          JSON.stringify(responseAccount),
        );
      }
    }

    authContext.setLogin({
      email: loginResponse.email,
      id_login: loginResponse.id_login,
      telephone: loginResponse.telephone,
    });
    await AsyncStorage.setItem('@RNAuth:login', JSON.stringify(loginResponse));

    return authContext.login;
  }

  async function continuar() {
    Keyboard.dismiss();

    if (email === '' || password === '') {
      // validationContext.setIsLoad(true);
      validationContext.setTitleError('Erro no Cadastro');
      validationContext.setInformation('Precisa preencher os campos em falta');
      validationContext.setIsVisible(true);
    } else {
      try {
        validationContext.setIsLoad(true);
        validationContext.setIsVisible(true);

        const result = await logar(email, password);
        // console.log(result);
        if (result)
          navigation.navigate({name: 'auth' as never, params: {} as never});

        validationContext.setIsVisible(false);
        validationContext.setIsLoad(false);
      } catch (error) {
        console.log(error);
        validationContext.setIsLoad(false);
        validationContext.setTitleError('Erro nos dados de Acesso');
        validationContext.setInformation('Verifique o seu email e senha');
        validationContext.setIsVisible(true);
      }
    }
  }

  return (
    <Container>
      <Pressable
        style={{alignSelf: 'flex-start', padding: 10}}
        onPress={() => {
          navigation.goBack();
        }}>
        <ArrowCircleLeft size={42} color="#545454" />
      </Pressable>
      <ImageTop source={require('../../../assets/line-top.png')} />

      <ContainerInformation>
        <Title>Dados de Acesso</Title>

        <Input
          placeholder="Email"
          autoComplete="email"
          onChange={text => setEmail(text)}
          value={email}
        />
        <Input
          placeholder="Password"
          autoComplete="password"
          onChange={text => setPassword(text)}
          value={password}
        />
        <Button text="Continuar" outline={false} onPress={continuar} />
      </ContainerInformation>

      <ImageBottom source={require('../../../assets/line-bottom.png')} />
    </Container>
  );
};
export default Login;
