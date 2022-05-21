import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft } from "phosphor-react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Pressable } from "react-native";
import Button from "../../../components/Button";
import { Container, ImageBottom, ImageTop, Title } from "../../../components/global";
import Input from "../../../components/Input";
import { ContainerInformation } from "./style";



const CadastroEndereco = () => {
    const [pais, setPais] = useState("")
    const [natural, setNatural] = useState("")
    const [cidade, setCidade] = useState("")

    const navigation = useNavigation();

    return (
        <Container>
            <ImageTop source={require('../../../assets/line-top.png')} />
            <Pressable style={{ alignSelf: 'flex-start', padding: 10 }}
                onPress={() => { navigation.goBack() }}
            >
                <ArrowCircleLeft size={32} color="#545454" />
            </Pressable>
            <Title>Dados de localização</Title>
            {/* <KeyboardAvoidingView behavior="padding"> */}
            <ContainerInformation>
                <Input autoComplete="name" placeholder="Digite o seu país" onChange={(text) => setPais(text)} value={pais} />
                <Input autoComplete="name" placeholder="Qual é a sua cidade" onChange={(text) => setCidade(text)} value={cidade} />
                <Input autoComplete="name" placeholder="" onChange={(text) => setNatural(text)} value={natural} />
                <Button outline={false} text="Avançar" onPress={() => navigation.navigate({ name: '', params: {} } as never)} />
            </ContainerInformation>
            {/* </KeyboardAvoidingView> */}
            <ImageBottom source={require('../../../assets/line-bottom.png')} />
        </Container>
    )
}

export default CadastroEndereco;