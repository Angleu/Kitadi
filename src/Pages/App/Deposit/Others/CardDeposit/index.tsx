import React, {useState, useCallback, useMemo, useRef, useContext} from 'react';
import {ButtonBack} from '../../../Dashboard/style';
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
  RowInput,
  View,
  ViewDeposit,
  ViewCoin,
  ViewCvv,
  ViewDateEx
} from '../../style';

import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import {ArrowCircleLeft, Coin} from 'phosphor-react-native';
import InputLayout from '../../../../../components/InputLayout';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ValidationContext from '../../../../../context/Validation';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
export const CardDeposit = () => {
  const navigation = useNavigation();
  const [numCard, setNumCard] = React.useState('');
  const [domiciliation, setDomiciliation] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [coin, setCoin] = React.useState('');
  const [fee, setFee] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [dateEx, setDateEx] = React.useState('');

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
  const Coin = [
    {
      label: 'USD',
      value: 'USD',
    },{
      label: 'EUR',
      value: 'EUR',
    },
    {
      label: 'AOA',
      value: 'AOA',
    },
  ];

  const validationContext = useContext(ValidationContext);
  function handleSubmit() {
    handleClosePress();
    validationContext.setTitleError('Éxito');
    validationContext.setInformation('Depósito Realizado');
    validationContext.setIsVisible(true);
  }


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
            <TitleTop>Cartão de Débito/Crédito</TitleTop>
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
          <RowInput>
            <ViewDeposit>
              <LabelBank>Montante a adicionar</LabelBank>

              <InputLayout
                placeholder=""
                value={amount}
                onChange={(text: React.SetStateAction<string>) =>
                  setAmount(text)
                }
              />
            </ViewDeposit>
            <ViewCoin>
              <LabelBank>Moeda</LabelBank>

              <RNPickerSelect
                placeholder={{label: 'Moeda', value: null}}
                onValueChange={value => setCoin(value)}
                items={Coin}
                style={{
                  viewContainer: {
                    borderBottomColor: '#888',
                    borderBottomWidth: 2,
                    marginTop:-6
                  },
                  inputAndroid: {
                    color: '#333',
                  },
                }}
              />
            </ViewCoin>
          </RowInput>
          <LabelBank>Número do Cartão</LabelBank>
          <InputLayout
            placeholder=""
            value={numCard}
            onChange={(text: React.SetStateAction<string>) => setNumCard(text)}
          />
          <RowInput>
            <ViewDateEx>
              <LabelBank>Data de Expiração</LabelBank>

              <InputLayout
                placeholder=""
                value={dateEx}
                onChange={(text: React.SetStateAction<string>) =>
                  setDateEx(text)
                }
              />
            </ViewDateEx>
            <ViewCvv>
              <LabelBank>CVV/CVV2</LabelBank>

              <InputLayout
                placeholder=""
                value={cvv}
                onChange={(text: React.SetStateAction<string>) =>
                  setCvv(text)
                }
              />
            </ViewCvv>
          </RowInput>
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
  );
};
