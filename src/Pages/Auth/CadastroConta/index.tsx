import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowCircleLeft, FileDotted } from "phosphor-react-native";
import { Dimensions, Pressable, View } from "react-native";
import { Container, ImageBottom, ImageTop, Title } from "../../../components/global"
import RNPickerSelect from 'react-native-picker-select';
import DocumentPicker, { DocumentPickerResponse, isCancel } from 'react-native-document-picker';
import { ContainerInformation, DocumentoFile, ContainerPreview } from "./style";
import ValidationContext from "../../../context/Validation";
import Pdf from 'react-native-pdf';
import Button from "../../../components/Button";


const CadastroConta = () => {
    const [tipoConta, setTipoConta] = useState('pessoal')
    const [documento, setDocumento] = useState('');
    const [ficheiro, setFicheiro] = useState<DocumentPickerResponse | null>(null);
    const navigation = useNavigation();
    const validationContext = useContext(ValidationContext);


    const submitPDF = async function () {
        const pickFile = await DocumentPicker.pick({
            type: [DocumentPicker.types.pdf],
            allowMultiSelection: false,
        });

        setFicheiro(pickFile[0]);
    }

    return (
        <Container>
            <ImageTop source={require('../../../assets/line-top.png')} />
            <Pressable style={{ alignSelf: 'flex-start', padding: 10 }}
                onPress={() => { navigation.goBack() }}
            >
                <ArrowCircleLeft size={32} color="#545454" />
            </Pressable>
            <Title>Dados da conta</Title>
            <RNPickerSelect style={{
                viewContainer: {
                    backgroundColor: '#fff',
                    marginTop: 20,
                    borderRadius: 5
                }
            }}
                value={tipoConta}
                onValueChange={(value) => setTipoConta(value)}
                items={[
                    { label: 'Pessoal', value: 'pessoal' },
                    { label: 'Empresa', value: 'empresa' },
                ]}
            />

            {(tipoConta === 'pessoal') ? (
                <>
                    <ContainerInformation>
                        <RNPickerSelect style={{
                            viewContainer: {
                                backgroundColor: '#fff',
                                marginTop: 20,
                                borderRadius: 5
                            }
                        }}
                            onValueChange={(value) => setDocumento(value)}
                            items={[
                                { label: 'Bilhete de Identidade', value: 'BI' },
                                { label: 'Passaporte', value: 'Passaporte' },
                            ]}
                        />
                        {
                            (documento) ? (
                            (ficheiro) ? (<ContainerPreview>
                                <Pdf
                                    source={{ uri: ficheiro.uri }}
                                    style={{
                                        flex: 1,
                                        width: Dimensions.get('window').width,
                                        height: Dimensions.get('window').height,
                                        shadowOffset:{height: 1, width: 1},
                                        shadowColor: '#545454',
                                        marginVertical: 10

                                    }}
                                />
                            </ContainerPreview>) :
                                (
                                    <DocumentoFile onPress={submitPDF}>
                                        <FileDotted size={52} />
                                    </DocumentoFile>
                                )
                            ):(
                                <>
                                </>
                            )
                        }
                    </ContainerInformation>

                </>
            ) : (
                <>
                    <ContainerInformation>
                        {
                            
                                (ficheiro) ? (<ContainerPreview>
                                    <Pdf
                                        source={{ uri: ficheiro.uri }}
                                        style={{
                                            flex: 1,
                                            width: Dimensions.get('window').width,
                                            height: Dimensions.get('window').height,
                                            shadowOffset:{height: 1, width: 1},
                                            shadowColor: '#545454',
                                            marginVertical: 10
    
                                        }}
                                    />
                                </ContainerPreview>) :
                                    (
                                        <DocumentoFile onPress={submitPDF}>
                                            <FileDotted size={52} />
                                        </DocumentoFile>
                                    )
                                
                        }
                    </ContainerInformation>
                </>
            )
            }
            <Button text="Submeter" outline={false}  onPress={() => navigation.navigate({ name: 'cadastroEndereco', params: {} } as never)}/>
            <ImageBottom source={require('../../../assets/line-bottom.png')} />
        </Container>
    )
}

export default CadastroConta;