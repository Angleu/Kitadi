import React, { useCallback, useContext, useMemo, useRef } from 'react';
import { ContainerA } from '../../../../../Dashboard/style';
import { ContainerTop } from '../../../../../Deposit/Others/BankSection/style';
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
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { ArrowCircleLeft } from 'phosphor-react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Image } from 'react-native';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import InputLayout from '../../../../../../../components/InputLayout';
import Button from '../../../../../../../components/Button';
import ValidationContext from '../../../../../../../context/Validation';
import AuthenticationContext from '../../../../../../../context/Authentication';

export const TPAQrCode = () => {
  const navigation = useNavigation();
  const globalContext = useContext(AuthenticationContext);
  const [iban, setIban] = React.useState('');
  const [domiciliation, setDomiciliation] = React.useState(globalContext.user.name);
  const [amount, setAmount] = React.useState('');
  const [coin, setCoin] = React.useState('AOA');
  const [fee, setFee] = React.useState('');

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef_2 = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '80%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current!.close();
  }, []);

  const handlePresentModalPress2 = useCallback(() => {
    bottomSheetModalRef_2.current?.present();
  }, []);
  const handleClosePress2 = useCallback(() => {
    bottomSheetModalRef_2.current!.close();
  }, []);

  const validationContext = useContext(ValidationContext);

  function handleSubmit() {
    handleClosePress();
    validationContext.setTitleError('Éxito');
    validationContext.setInformation('Depósito Realizado');
    validationContext.setIsVisible(true);
  }

  function handleSubmit2() {
    handleClosePress2();
    handlePresentModalPress();
  }

  const onSuccess = useCallback(() => {
    handlePresentModalPress();
  }, []);

  const Coin = [
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
        <View style={{ flex: 1 }}>
          <TitleTop>QrCode</TitleTop>
        </View>
      </ContainerTop>
      <LabelBank style={{ textAlign: 'center', marginBottom: 50 }}></LabelBank>
      <ContentBank>
        <LabelBank>Proprietário</LabelBank>
        <InputLayout
          placeholder=""
          value={domiciliation}
        />
        <ContentRow>
          <View style={{ width: '80%', marginRight: 10 }}>
            <LabelBank>Montante</LabelBank>
            <InputLayout
              placeholder=""
              value={amount}
              onChange={setAmount}></InputLayout>
          </View>
          <ViewCoin>
            <LabelBank>Moeda</LabelBank>
            <InputLayout
              placeholder=""
              value={coin}
            />
          </ViewCoin>
        </ContentRow>
          <Button
            onPress={handlePresentModalPress2}
            text="Confirmar Pedido"
            outline={false}
          />
      </ContentBank>

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef_2}
          index={1}
          snapPoints={snapPoints} handleIndicatorStyle={{ display: 'none' }}>
          <BottomSheetView style={{ flex: 1, justifyContent: 'center', alignContent: 'center', padding: 24 }} >
            <Content>
              <TitleTop>DADOS DO DEPÓSITO</TitleTop>
              <ContentBank>
                <LabelBank>Proprietário</LabelBank>
                <InputLayout
                  placeholder=""
                  value={domiciliation}
                  editable={false} />
                <LabelBank>Montante</LabelBank>
                <InputLayout
                  placeholder=""
                  value={amount}
                  editable={true} />
                <LabelBank>Moeda</LabelBank>
                <InputLayout
                  placeholder=""
                  value={coin}
                  editable={true}></InputLayout>
              </ContentBank>
            </Content>
            <Content>
              <ContentButton>
                <Button
                  onPress={handleClosePress2}
                  text="Cancelar"
                  outline={true}
                />

                <Button
                  onPress={handleSubmit2}
                  text="Confirmar Pedido"
                  outline={false}
                />
              </ContentButton>
            </Content>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          handleIndicatorStyle={{ display: 'none' }}>
          <BottomSheetView style={{ flex: 1, justifyContent:'center', padding: 24 }}>
            <Content style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TitleTop>TPA - QR CODE</TitleTop>
              <LabelBank
                style={{ alignItems: 'center', justifyContent: 'center' }}>
                Este QR code contém dados seus, entre ao cliente para efectuar o
                pagamento
              </LabelBank>
              <Image
                source={{
                  uri: `https://api.qrserver.com/v1/create-qr-code/?data=${JSON.stringify(
                    { amount, domiciliation, coin },
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
                <Button
                  onPress={handleClosePress}
                  text="Fechar"
                  outline={true}
                />
            </Content>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </ContainerA>
  );
};
