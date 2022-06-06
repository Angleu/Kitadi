
import React, {useState, useCallback, useMemo, useRef,useContext} from 'react';
import {ButtonBack} from '../../../Dashboard/style';
import {Clipboard} from 'react-native';

import React, { useState, useCallback, useMemo, useRef } from 'react';
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
import { ArrowCircleLeft, FilePdf } from 'phosphor-react-native';
import InputLayout from '../../../../../components/InputLayout';

import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ValidationContext from '../../../../../context/Validation';

import { useNavigation } from '@react-navigation/native';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Container, ContainerA, ContainerInput, ContainerTop, Text } from './style';
import Button from '../../../../../components/Button';
import Sheet from 'react-modal-sheet'

export const BankSection = () => {
  const navigation = useNavigation();
  const [iban, setIban] = React.useState('');
  const [domiciliation, setDomiciliation] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [coin, setCoin] = React.useState('');
  const [fee, setFee] = React.useState('');
  const [isOpen, setOpen] = useState(false);

  const Bank = [
    {
      label: 'BAI- BANCO ANGOLANO DE INVESTIMENTO',
      value: ' AO06 0040 0000 9863 0896 1017 2',
    },
  ];
  const [document, setDocument] = useState<DocumentPickerResponse>();
  const copyToClipboard = () => {
    Clipboard.setString(iban);
  };
  const submitPDF = async function () {
    const pickFile = await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf],
      allowMultiSelection: false,
    });
    setDocument(pickFile[0]);
  };
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '70%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current!.close();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const validationContext = useContext(ValidationContext);
  function handleSubmit() {
    handleClosePress();
    validationContext.setTitleError('Éxito');
    validationContext.setInformation('Depósito Realizado');
    validationContext.setIsVisible(true);
  }

  return (
    <>

      <ContainerA>
        <ContainerTop>
          <Pressable
            onPress={() => { navigation.goBack() }}
          >
            <ArrowCircleLeft size={42} color={'#000'} />
          </Pressable>
          <View style={{ flex: 1 }}>
            <TitleTop>CARREGAMENTO DE CONTA</TitleTop>
          </View>
        </ContainerTop>
        <ContainerInput>
          <Text>
            Insira os dados para o carregamento da sua conta
          </Text>
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
                placeholder: { color: '#000' }
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
            <LabelBank>Carregue o comprovativo de transferência</LabelBank>
            <SubmitButton onPress={submitPDF} >
              <FilePdf size={82}
                color="#cacaca"
              />
            </SubmitButton>
          </ContentBank>
        </ContainerInput>
        <ContentButton>
          <Button outline={false} text="Continual" onPress={() => setOpen(true)} />
        </ContentButton>

      </Container>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <BottomSheetView style={{flex: 1}}>
            <Content>
              <TitleTop>DADOS DO DEPÓSITO</TitleTop>
              <ContentBank>
                <LabelBank>Proprietário</LabelBank>
                <InputLayout placeholder="" value={domiciliation}></InputLayout>
                <LabelBank>Montante</LabelBank>
                <InputLayout placeholder="" value={amount}></InputLayout>
                <LabelBank>Moeda</LabelBank>
                <InputLayout placeholder="" value={coin}></InputLayout>
                <LabelBank>Taxa</LabelBank>
                <InputLayout placeholder="" value={fee}></InputLayout>
              </ContentBank>
            </Content>
            <Content>
              <ContentButton>
                <ButtonInline onPress={handleClosePress}>
                  <Text style={{fontSize: 16, color: '#1d5c63'}}>Cancelar</Text>
                </ButtonInline>
                <Button onPress={handleSubmit}>
                  <Text style={{fontSize: 16, color: '#fff'}}>
                    Confirmar Depósito
                  </Text>
                </Button>
              </ContentButton>
            </Content>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </LinearGradient>

      </ContainerA>
     
    </>

  );
};

 