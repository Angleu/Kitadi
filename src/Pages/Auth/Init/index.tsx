import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import Button from "../../../components/Button";
import AuthenticationContext from "../../../context/Authentication";
import {
  Container,
  ImageTop,
  Title,
  ImageBottom,
  ContainerButton,
  Logo,
  Description,
} from "./style";

interface INavigation {
  screen: string;
  param?: object;
}

const Init: React.FC = () => {
  const navigation = useNavigation();
  const authContext = useContext(AuthenticationContext);
  function continuar() {
    // console.warn("Clicou")
    navigation.navigate({ name: "cadastrar" as never, params: {} as never });
  }
  function Login() {
    // console.warn("Clicou")
    navigation.navigate({ name: "Login" as never, params: {} as never });
  }


  useEffect(() => {
      if(authContext.isLogin === true)
        navigation.navigate({name:"auth", params:{}} as never)
  }, [authContext.isLogin])
  return (
    <Container>
      <ImageTop source={require("../../../assets/line-top.png")} />
      <Logo source={require("../../../assets/logo.png")} />
      <Title>Kitadi</Title>
      <Description>Fazemos sua vida mais fácil</Description>
      <ImageBottom source={require("../../../assets/line-bottom.png")} />
      <ContainerButton>
        <Button text="Cadastrar" outline={false} onPress={continuar} />
        <Button text="Já possui alguma conta?" outline={true} onPress={Login} />
      </ContainerButton>
    </Container>
  );
};
export default Init;
