import React, {useCallback, useContext, useMemo, useRef} from 'react';
import {ContainerA} from '../../../../../Dashboard/style';
import {ContainerTop} from '../../../../../Deposit/Others/BankSection/style';
import {
  Content,
  ContentBank,
  ContentButton,
  ContentRow,
  LabelBank,
  Pressable,
  TitleTop,
  View,
  ViewCoin,
} from '../../../../../Deposit/style';
import {useNavigation} from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {ArrowCircleLeft} from 'phosphor-react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Image} from 'react-native';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import InputLayout from '../../../../../../../components/InputLayout';
import Button from '../../../../../../../components/Button';
import ValidationContext from '../../../../../../../context/Validation';

export const TPAQrCode = () => {
  const navigation = useNavigation();
  const [iban, setIban] = React.useState('');
  const [domiciliation, setDomiciliation] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [coin, setCoin] = React.useState('');
  const [fee, setFee] = React.useState('');

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current!.close();
  }, []);

  const validationContext = useContext(ValidationContext);

  function handleSubmit() {
    handleClosePress();
    validationContext.setTitleError('Éxito');
    validationContext.setInformation('Depósito Realizado');
    validationContext.setIsVisible(true);
  }

  const onSuccess = useCallback(() => {
    handlePresentModalPress();
  }, []);

  const Coin = [
    {
      label: 'USD',
      value: 'USD',
    },
    {
      label: 'EUR',
      value: 'EUR',
    },
    {
      label: 'AOA',
      value: 'AOA',
    },
  ];

  return (
    <ContainerA>
      <ContainerTop>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowCircleLeft size={42} color={'#000'} />
        </Pressable>
        <View style={{flex: 1}}>
          <TitleTop>QrCode</TitleTop>
        </View>
      </ContainerTop>
      <LabelBank style={{textAlign: 'center', marginBottom: 50}}>
        
      </LabelBank>
      <ContentBank>
        <LabelBank>Proprietário</LabelBank>
        <InputLayout
          placeholder=""
          value={domiciliation}
          onChange={setDomiciliation}></InputLayout>
        <ContentRow>
          <View style={{width: '80%', marginRight: 10}}>
            <LabelBank>Montante</LabelBank>
            <InputLayout
              placeholder=""
              value={amount}
              onChange={setAmount}></InputLayout>
          </View>
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
                  marginTop: -6,
                },
                inputAndroid: {
                  color: '#333',
                },
              }}
            />
          </ViewCoin>
        </ContentRow>
        <Button
          onPress={handlePresentModalPress}
          text="Confirmar Pedido"
          outline={false}
        />
      </ContentBank>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          handleIndicatorStyle={{display:'none'}}
          >
          <BottomSheetView style={{flex: 1}}>
            <Content style={{alignItems: 'center', justifyContent: 'center'}}>
              <TitleTop>TPA - QR CODE</TitleTop>
              <LabelBank
                style={{alignItems: 'center', justifyContent: 'center'}}>
                Este QR code contém dados seus, entre ao cliente para efectuar o
                pagamento
              </LabelBank>
              <Image
                source={{
                  uri: `https://api.qrserver.com/v1/create-qr-code/?data=${JSON.stringify(
                    {amount, domiciliation, coin},
                  )}&amp;size=250x250`,
                }}
                style={{
                  width: 300,
                  height: 300,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 20,
                }}
              />
              <ContentButton>
                <Button
                  onPress={handleClosePress}
                  text="Fechar"
                  outline={true}
                />
              </ContentButton>
            </Content>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </ContainerA>
  );
};
