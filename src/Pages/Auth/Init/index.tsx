import { useNavigation } from "@react-navigation/native";
import React from "react";
import Button from "../../../components/Button";
import { Container, ImageTop, Title, ImageBottom, ContainerButton, Logo, Description } from "./style";

interface INavigation {
    screen: string;
    param?: object;
}

const Init: React.FC = () => {
    const navigation = useNavigation();
    function continuar() {
        // console.warn("Clicou")
        navigation.navigate({ name: "cadastrar" as never, params: {} as never });
    }
    return (
        <Container>
            <ImageTop source={require('../../../assets/line-top.png')} />
            <Logo source={require('../../../assets/logo.png')} />
            <Title>Kitadi</Title>
            <Description>Fazemos sua vida mais fácil</Description>
            <ImageBottom source={require('../../../assets/line-bottom.png')} />
            <ContainerButton>
                <Button text="Cadastrar" outline={false} onPress={continuar} />
                <Button text="Já possui alguma conta?" outline={true} />
            </ContainerButton>
        </Container>
    )
}
export default Init;

