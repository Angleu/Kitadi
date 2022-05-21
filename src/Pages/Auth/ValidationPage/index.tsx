import React, { useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Container, Description, ImageBottom, ImageTop, Title } from "../../../components/global";
import { ContainerInformation, ContainerInput } from "./style";
import Button from "../../../components/Button";
import { Pressable } from "react-native";
import { ArrowCircleLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";


const ValidationPage = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();
    function verificar() {
        if (Number.parseInt(code))
            navigation.navigate({ name: 'CadastroDadosPessoais' as never, params: {} as never });
    }
    return (
        <Container style={{ backgroundColor: '#E5E5E5' }}>
            <ImageTop source={require('../../../assets/line-top.png')} />
            <Pressable style={{ alignSelf: 'flex-start', padding: 10 }}
                onPress={() => { navigation.goBack() }}
            >
                <ArrowCircleLeft size={32} color="#545454" />
            </Pressable>
            <ContainerInformation>
                <Title>Verificar número de telefone</Title>
                <Description>Digite o código de confirmação que recebeu por mensagem</Description>
            </ContainerInformation>
            <ContainerInput>
                <OTPInputView pinCount={6}
                    style={{
                        height: 200
                    }}
                    codeInputHighlightStyle={{ borderColor: '#1D5C63' }}
                    codeInputFieldStyle={{ borderColor: '#262626', minHeight: 60, borderRadius: 10, color: '#262626', backgroundColor: '#fff' }}
                    keyboardType="number-pad"
                    placeholderTextColor="#000"
                    onCodeFilled={(code) => setCode(code)}
                />
            </ContainerInput>
            <Button outline={false} text="Verificar" onPress={verificar} />
            <ImageBottom source={require('../../../assets/line-bottom.png')} />

        </Container>
    )
}

export default ValidationPage;