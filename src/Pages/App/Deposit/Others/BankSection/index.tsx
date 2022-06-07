import React, { useState, useCallback, useMemo, useRef, useContext } from 'react';
import { ButtonBack } from '../../../Dashboard/style';
import { Clipboard, View } from 'react-native';

import {
  TopContentTitle,
  CenterTitleTop,
  TitleTop,
  LabelBank,
  ContentBank,
  Pressable,
  SubmitButton,
  ContentButton,
  ButtonInline,
  Content,
} from '../../style';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import { ArrowCircleLeft, CheckCircle, FilePdf } from 'phosphor-react-native';
import InputLayout from '../../../../../components/InputLayout';

import ValidationContext from '../../../../../context/Validation';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {
  Container,
  ContainerA,
  ContainerInput,
  ContainerTop,
  PressSubmitContainer,
  Text,
} from './style';
import Button from '../../../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import APICompravativoServices from '../../../../../services/APICompravativoServices';
import TransationServices from '../../../../../services/TransationServices';
import AccountServices from '../../../../../services/AccountServices';
import AuthenticationContext from '../../../../../context/Authentication';
import AsyncStorage from '@react-native-community/async-storage'

export const BankSection = () => {
  const navigation = useNavigation();
  // const [file, setFile] = useState<object>({});
  const [iban, setIban] = React.useState('');
  const [domiciliation, setDomiciliation] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [coin, setCoin] = React.useState('');
  const [fee, setFee] = React.useState('');
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [ficheiro, setFicheiro] = useState<DocumentPickerResponse | null>(null);


  const Bank = [
    {
      label: 'BAI- BANCO ANGOLANO DE INVESTIMENTO',
      value: ' AO06 0040 0000 9863 0896 1017 2',
    },
  ];


  const context = useContext(AuthenticationContext);
  const processContext = useContext(ValidationContext);
  const copyToClipboard = () => {
    Clipboard.setString(iban);
  };
  const submitPDF = async function () {
    const pickFile = await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf],
      allowMultiSelection: false,
    });
    setFicheiro(pickFile[0]);
    processContext.setIsLoad(true);
    processContext.setIsVisible(true);
    try {
      const service = new APICompravativoServices();
      const file = await service.execute(pickFile[0] as DocumentPickerResponse);

      if (!file.destinatario)
        return;

      if (file.destinatario === "ANGLEU ZUA SILVA") {
        let amount = String(file.montante).split(' ')[0];
        let valor: string = "";
        for (let i = 0; i < amount.length; i++) {
          if (amount[i] !== '.' && amount[i] !== '-')
            valor += amount[i]
        }
        processContext.setIsVisible(false);
        processContext.setIsLoad(false);
        handlePresentModalPress({
          amount: Number.parseFloat(valor),
          coin: "AOA",
          description: "Deposito por transferência Bancaria",
          to_user: context.account.id_account,
        })
      }
    } catch {
      processContext.setIsVisible(false);
      processContext.setIsLoad(false);
      validationContext.setTitleError('Erro');
      validationContext.setInformation('Verifique o seu comprovativo');
      processContext.setIsVisible(true);
      return
    }
  }
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '85%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(async (data) => {
    try {
      if (data instanceof Object) {
        setDomiciliation(context.user.name);
        setAmount(data?.amount.toString())
        setCoin(data?.coin as string)
        setFee('0,00%')
        processContext.setIsVisible(false);
        processContext.setIsLoad(false);
        bottomSheetModalRef.current?.present();
        return
      }
    } catch (erro) {
      processContext.setIsVisible(false);
      processContext.setIsLoad(false);
      validationContext.setTitleError('Erro');
      validationContext.setInformation('Verifique o seu comprovativo');
      processContext.setIsVisible(true);
      return

    }

  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current!.close();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  const validationContext = useContext(ValidationContext);

  async function handleSubmit() {
    processContext.setIsLoad(true);
    processContext.setIsVisible(true);
    const serviceTransation = new TransationServices();

    try {
      const result = await serviceTransation.deposit({
        amount: Number.parseFloat(amount),
        coin: "AOA",
        description: "",
        to_user: context.account.id_account as string
      })
      console.log(result)
      if (result instanceof Object) {
        const responseAccount = await new AccountServices().executeOne(context.user.id_user as string)
        if (responseAccount instanceof Object) {
          context.setAccount(responseAccount);
          await AsyncStorage.setItem('@RNAuth:account', JSON.stringify(responseAccount));
        }
        processContext.setIsVisible(false);
        processContext.setIsLoad(false);
        handleClosePress();
        validationContext.setTitleError('Éxito');
        validationContext.setInformation('Depósito Realizado');
        validationContext.setIsVisible(true);
        navigation.navigate({ name: "auth" } as never);
      }
    } catch {
      processContext.setIsVisible(false);
      processContext.setIsLoad(false);
      validationContext.setTitleError('Erro');
      validationContext.setInformation('Problema a realizar o deposito');
      validationContext.setIsVisible(true);
    }

  }

  return (
    <ContainerA>
      <ContainerTop>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowCircleLeft size={42} color={'#000'} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <TitleTop>CARREGAMENTO DE CONTA</TitleTop>
        </View>
      </ContainerTop>
      <ContainerInput>
        <Text>Insira os dados para o carregamento da sua conta</Text>
        <ContentBank>
          <LabelBank>Selecione o banco de origem</LabelBank>
          <RNPickerSelect
            placeholder={{ label: 'Selecione o Banco', value: null }}
            onValueChange={value => setIban(value)}
            items={Bank}
            style={{
              viewContainer: {
                borderBottomColor: '#888',
                borderBottomWidth: 2,
              },
              inputAndroid: {
                color: '#333',
              },
              placeholder: { color: '#000' },
            }}
          />
          <Pressable onPress={copyToClipboard}>
            <LabelBank>IBAN</LabelBank>
            <InputLayout
              placeholder=""
              value={iban}
              onChange={(text: React.SetStateAction<string>) => setIban(text)}
              editable={false}
            />
          </Pressable>
          {
            (ficheiro) ?
              (
                <PressSubmitContainer onLongPress={() => setFicheiro(null)}>
                  <CheckCircle size={72} color="#cacaca" />
                  <TitleTop>Comprovativo Carregado</TitleTop>
                  <Text>Pressiona para remover o comprovativo</Text>
                </PressSubmitContainer>

              ) :
              (
                <>
                  <LabelBank>Carregue o comprovativo de transferência</LabelBank>
                  <SubmitButton onPress={submitPDF}>
                    <FilePdf size={82} color="#cacaca" />
                  </SubmitButton>
                </>
              )
          }

        </ContentBank>
      </ContainerInput>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <BottomSheetView style={{ flex: 1, paddingVertical: 10 }}>
            <Content>
              <TitleTop>DADOS DO DEPÓSITO</TitleTop>
              <ContentBank>
                <LabelBank>Proprietário</LabelBank>
                <InputLayout placeholder="" value={domiciliation} editable={false}></InputLayout>
                <LabelBank>Montante</LabelBank>
                <InputLayout placeholder="" value={amount} editable={false}></InputLayout>
                <LabelBank>Moeda</LabelBank>
                <InputLayout placeholder="" value={coin} editable={false}></InputLayout>
                <LabelBank>Taxa</LabelBank>
                <InputLayout placeholder="" value={fee} editable={false}></InputLayout>
              </ContentBank>
            </Content>
            <Content>
              <ContentButton>
                <Button
                  onPress={handleClosePress}
                  text="Cancelar"
                  outline={true}
                />

                <Button
                  onPress={handleSubmit}
                  text="Confirmar Pedido"
                  outline={false}
                />
              </ContentButton>
            </Content>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </ContainerA>


  );
};
