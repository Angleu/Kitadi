import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft } from "phosphor-react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Pressable, Text } from "react-native";
import Button from "../../../components/Button";
import { Container, ImageBottom, ImageTop, Title } from "../../../components/global";
import Input from "../../../components/Input";
import { ContainerDadosPessoias } from "./style";

import RNPickerSelect from 'react-native-picker-select';
import DatePicker from "react-native-date-picker";


const CadastroDadosPessoais: React.FC = (props) => {
    const [nome, setNome] = useState("")
    const [sexo, setSexo] = useState("")
    const [date, setDate] = useState(new Date())

    // console.log(props.route.params.email);
    const navigation = useNavigation();
    return (
        <Container style={{ backgroundColor: '#E5E5E5' }}>
            <ImageTop source={require('../../../assets/line-top.png')} />
            <Pressable style={{ alignSelf: 'flex-start', padding: 10 }}
                onPress={() => { navigation.goBack() }}
            >
                <ArrowCircleLeft size={32} color="#545454" />
            </Pressable>
            <Title>Dados Pessoais</Title>
            <ContainerDadosPessoias>
                <KeyboardAvoidingView behavior="padding">
                    <Input autoComplete="name" placeholder="Nome Completo" onChange={(text) => setNome(text)} value={nome} />
                    {/* <Input autoComplete="street-address" placeholder="País" onChange={(text) => setPais(text)} value={pais} />
                    <Input autoComplete="street-address" placeholder="Cidade" onChange={(text) => setCidade(text)} value={cidade} />
                    <Input autoComplete="street-address" placeholder="Natural" onChange={(text) => setNatural(text)} value={natural} /> */}
                    <RNPickerSelect style={{
                        viewContainer: {
                            backgroundColor: '#fff',
                            marginTop: 20,
                            borderRadius: 5
                        }
                    }}
                        onValueChange={(value) => setSexo(value)}
                        items={[
                            { label: 'Masculino', value: 'masculino' },
                            { label: 'Femenino', value: 'femenino' },
                            { label: 'Outro', value: 'outro' },
                        ]}
                    />
                    <Text style={{ marginVertical: 16, fontSize: 16, color: '#242424' }}>Data de Aniversário</Text>
                    <DatePicker date={date} onDateChange={setDate}
                        mode="date"
                        style={{
                         
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            alignSelf: 'center',
                            marginBottom: 10
                        }}
                    />
                    <Button outline={false} text="Avançar" onPress={() => navigation.navigate({ name: 'cadastroEndereco', params: {
                        email: props.route.params.email,
                        nome: nome, 
                        sexo: sexo,
                        date: date.toDateString()
                    } } as never)} />
                </KeyboardAvoidingView>
            </ContainerDadosPessoias>
            <ImageBottom source={require('../../../assets/line-bottom.png')} />
        </Container>
    )
}

export default CadastroDadosPessoais;