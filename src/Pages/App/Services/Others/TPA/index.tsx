import React, {useCallback, useContext, useMemo, useRef} from 'react';
import {ContainerA} from '../../../Dashboard/style';
import {ContainerTop} from '../../../Deposit/Others/BankSection/style';
import {
  Content,
  ContentBank,
  ContentButton,
  LabelBank,
  Pressable,
  TitleTop,
  View,
} from '../../../Deposit/style';
import {useNavigation} from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {ArrowCircleLeft} from 'phosphor-react-native';

import {Image} from 'react-native';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import InputLayout from '../../../../../components/InputLayout';
import Button from '../../../../../components/Button';
import ValidationContext from '../../../../../context/Validation';
import {RowServices} from '../../../../../components/RowServices';

export const TPA = () => {
  const navigation = useNavigation();
  const [iban, setIban] = React.useState('');
  const [domiciliation, setDomiciliation] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [coin, setCoin] = React.useState('');
  const [fee, setFee] = React.useState('');

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

  return (
    <ContainerA style={{alignContent: 'center'}}>
      <ContainerTop>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowCircleLeft size={42} color={'#000'} />
        </Pressable>
        <View style={{flex: 1}}>
          <TitleTop>Terminal de Pagamento Automático</TitleTop>
        </View>
      </ContainerTop>
      <LabelBank style={{textAlign: 'center', marginBottom: 10}}>
        Terminal de pagamento no Smartphone
      </LabelBank>
      <Image style={{width:'15%', height:'15%',alignSelf:'center'}} source={require('../../../../../assets/Topup-Payment.png')} />
      <LabelBank style={{textAlign: 'center', marginBottom: 50}}>
        Com este terminal é possivél usar os seu telefone como um TPA para
        receber pagamentos
      </LabelBank>

      <RowServices
        icon="QrCode"
        title="QrCode"
        onPress={() => navigation.navigate('TPAQrCode')}
      />

      <RowServices
        icon="CreditCard"
        title="NFC"
        onPress={() => navigation.navigate('TPANFC')}
      />
    </ContainerA>
  );
};
