import React, {useState, useCallback, useMemo, useRef} from 'react';
import {ButtonBack} from '../../../Dashboard/style';
import {Clipboard} from 'react-native';
import {
  Container,
  TopContentTitle,
  CenterTitleTop,
  TitleTop,
  LabelBank,
  ContentBank,
  Pressable,
  SubmitButton,
  ContentButton,
  Button,
  ButtonInline,
  Content,
} from '../../style';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import {ArrowCircleLeft} from 'phosphor-react-native';
import InputLayout from '../../../../../components/InputLayout';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

export const BankSection = () => {
  const navigation = useNavigation();
  const [iban, setIban] = React.useState('');
  const [domiciliation, setDomiciliation] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [coin, setCoin] = React.useState('');
  const [fee, setFee] = React.useState('');

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
  type dismiss = () => void;
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.7}}
      end={{x: 0, y: 0.0}}
      style={{flex: 1}}
      colors={['rgba(247, 247, 247, 1)', 'rgba(29, 92, 99, 0.3)']}>
      <Container>
        <TopContentTitle>
          <ButtonBack onPress={() => navigation.goBack()}>
            <ArrowCircleLeft size={42} color={'#1d5c63'} />
          </ButtonBack>
          <CenterTitleTop>
            <TitleTop>CARREGAMENTO DE CONTA</TitleTop>
          </CenterTitleTop>
        </TopContentTitle>
        <Text
          style={{
            fontSize: 16,
            color: 'rgba(113, 126, 149, 1)',
            fontWeight: '400',
          }}>
          Insira os dados para o carregamento da sua conta
        </Text>
        <ContentBank>
          <LabelBank>Selecione o banco de origem</LabelBank>
          <RNPickerSelect
            placeholder={{label: 'Selecione o Banco', value: null}}
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
          <SubmitButton onPress={submitPDF} />
        </ContentBank>
        <ContentButton>
          <Button onPress={handlePresentModalPress}>
            <Text style={{fontSize: 16, color: '#fff'}}>Confirmar</Text>
          </Button>
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
                <ButtonInline>
                  <Text style={{fontSize: 16, color: ' #1d5c63'}}>
                    Cancelar
                  </Text>
                </ButtonInline>
                <Button onPress={handlePresentModalPress}>
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
  );
};
