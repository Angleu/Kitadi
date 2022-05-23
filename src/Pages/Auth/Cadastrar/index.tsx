import React, { useContext, useState } from "react";
import Button from "../../../components/Button";
import { Container, ImageTop, ImageBottom, ContainerInformation, Title } from "./style";
import { ArrowCircleLeft } from 'phosphor-react-native';
import { Keyboard, KeyboardAvoidingView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../../../components/Input/";
import ValidationContext from "../../../context/Validation";

const Cadastrar: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telephone, setTelephone] = useState('');

    const navigation = useNavigation()
    const validationContext = useContext(ValidationContext);

    function continuar() {
        // console.warn(email)
        Keyboard.dismiss();
        if (email === '' || password === '' || telephone === '') {
            // validationContext.setIsLoad(true);
            validationContext.setTitleError("Erro no Cadastro");
            validationContext.setInformation("Precisa preencher os campos em falta");
            validationContext.setIsVisible(true);
        } else
            navigation.navigate({ name: "validationPage" as never, params: {} as never });

    }

    return (
        <Container>
            <Pressable style={{ alignSelf: 'flex-start', padding: 10 }}
                onPress={() => { navigation.goBack() }}
            >
                <ArrowCircleLeft size={42} color="#545454" />
            </Pressable>
            <ImageTop source={require('../../../assets/line-top.png')} />
            <ContainerInformation>
                <KeyboardAvoidingView behavior="padding">
                    <Title>Dados de acesso</Title>
                    <Input placeholder="Email" autoComplete="email" onChange={(text) => setEmail(text)} value={email} />
                    <Input placeholder="Password" autoComplete="password" onChange={(text) => setPassword(text)} value={password} />
                    <Input placeholder="Número de telefone" autoComplete="tel" onChange={(text) => setTelephone(text)} value={telephone} />
                </KeyboardAvoidingView>
            </ContainerInformation>
            <Button text="Continuar" outline={false} onPress={continuar} />

            <ImageBottom source={require('../../../assets/line-bottom.png')} />
        </Container>
    )
}

export default Cadastrar;