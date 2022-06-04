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

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const validationContext = useContext(ValidationContext);

  function continuar() {
    // console.warn(email)
    Keyboard.dismiss();
    if (email === '' || password === '') {
      // validationContext.setIsLoad(true);
      validationContext.setTitleError('Erro no Cadastro');
      validationContext.setInformation('Precisa preencher os campos em falta');
      validationContext.setIsVisible(true);
    } else navigation.navigate('auth');
    // navigation.navigate({ name: "Dashboard" as never, params: {} as never });
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
      </ContainerInformation>
      <Button text="Continuar" outline={false} onPress={continuar} />

      <ImageBottom source={require('../../../assets/line-bottom.png')} />
    </Container>
  );
};
export default Login;
