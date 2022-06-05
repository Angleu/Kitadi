import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft } from "phosphor-react-native";
import React, { useContext, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Pressable } from "react-native";
import Button from "../../../components/Button";
import { Container, ImageBottom, ImageTop, Title } from "../../../components/global";
import Input from "../../../components/Input";
import ValidationContext from "../../../context/Validation";
import UserServices from "../../../services/UserServices";
import { ContainerInformation, InputContainer } from "./style";



const CadastroEndereco: React.FC = (props) => {
    const [pais, setPais] = useState("")
    const [natural, setNatural] = useState("")
    const [cidade, setCidade] = useState("")

    const navigation = useNavigation();
    const validationContext = useContext(ValidationContext);



    async function cadastrar() {

        Keyboard.dismiss();
        if (pais === '' || natural === '' || cidade === '') {
            // validationContext.setIsLoad(true);
            validationContext.setTitleError("Erro no Cadastro");
            validationContext.setInformation("Precisa preencher os campos em falta");
            validationContext.setIsVisible(true);
        } else {
            try {
                validationContext.setIsLoad(true)
                validationContext.setIsVisible(true);
                const result = await new UserServices().saveUser({
                    email: props.route.params.email,
                    dataBirthday: new Date(props.route.params.date),
                    genere: props.route.params.sexo,
                    name: props.route.params.nome,
                    natural: natural,
                    city: cidade,
                    country: pais
                }
                )

                if (result instanceof Object) {
                    validationContext.setIsVisible(false);
                    validationContext.setIsLoad(false)
                    navigation.navigate({ name: 'cadastoConta', params: { id_user: result.id_user } } as never)
                }

            } catch (error) {
                validationContext.setIsLoad(false);
                validationContext.setTitleError("Erro no Cadastro");
                validationContext.setInformation("Problema ao efectuar o cadastro");
                validationContext.setIsVisible(true);
            }

        }
    }

    return (
        <Container style={{ backgroundColor: '#E5E5E5' }}>
            <ImageTop source={require('../../../assets/line-top.png')} />
            <Pressable style={{ alignSelf: 'flex-start', padding: 10 }}
                onPress={() => { navigation.goBack() }}
            >
                <ArrowCircleLeft size={32} color="#545454" />
            </Pressable>
            <Title>Dados de localização</Title>
            <ContainerInformation>
                <InputContainer>
                    <Input autoComplete="name" placeholder="Digite o seu país" onChange={(text) => setPais(text)} value={pais} />
                    <Input autoComplete="name" placeholder="Qual é a sua cidade" onChange={(text) => setCidade(text)} value={cidade} />
                    <Input autoComplete="name" placeholder="natural" onChange={(text) => setNatural(text)} value={natural} />
                </InputContainer>
                <Button outline={false} text="Avançar" onPress={cadastrar} />
            </ContainerInformation>
            <ImageBottom source={require('../../../assets/line-bottom.png')} />
        </Container>
    )
}

export default CadastroEndereco;