import React, { useState, useCallback, useMemo, useRef, useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { ButtonBack } from '../../../Dashboard/style';
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
  ViewDateEx,
} from '../../../Deposit/style';

import RNPickerSelect from 'react-native-picker-select';

import { ArrowCircleLeft, Coin } from 'phosphor-react-native';
import InputLayout from '../../../../../components/InputLayout';
import { SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { WebView, WebViewNavigation } from 'react-native-webview';
import AuthenticationContext from '../../../../../context/Authentication';
import ValidationContext from '../../../../../context/Validation';
import AccountServices from '../../../../../services/AccountServices';
import TransationServices from '../../../../../services/TransationServices';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export const Withdraw = () => {
  const navigation = useNavigation();
  const [domiciliation, setDomiciliation] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [fee, setFee] = React.useState('');
  const [moeda, setMoeda] = useState('');
  const [uri, setUri] = useState('');

  const [coin, setCoin] = useState('');

  const globalContext = useContext(AuthenticationContext)
  const validaationContext = useContext(ValidationContext)


  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '70%'], []);

  // callbacks
  const handlePresentModalPress = function () {
    setDomiciliation(globalContext.user.name)
    console.log(coin)
    if (coin === '' || amount === '') {
      validaationContext.setIsLoad(false);
      validaationContext.setTitleError("Erro no Cadastro");
      validaationContext.setInformation("Precisa preencher os campos em falta");
      validaationContext.setIsVisible(true);
    } else {
      bottomSheetModalRef.current?.present();
    }
  }
  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current!.close();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {

  }, []);

  const validationContext = useContext(ValidationContext);
  async function viewNavigator(event: WebViewNavigation) {
    if (event.url === 'http://localhost:3000/sucess.html') {
      const response = await new TransationServices().deposit({
        amount: parseFloat(amount) * 500,
        coin: 'AOA',
        to_user: globalContext.account.id_account as string,
        description: 'Deposito Visa Card'
      })

      if (response instanceof Object) {
        const responseAccount = await new AccountServices().executeOne(globalContext.user.id_user as string)
        if (responseAccount instanceof Object) {
          globalContext.setAccount(responseAccount);
          await AsyncStorage.setItem('@RNAuth:account', JSON.stringify(responseAccount));
        }
        setUri('')
        validationContext.setIsVisible(false);
        validationContext.setIsLoad(false);
        validationContext.setTitleError('Éxito');
        validationContext.setInformation('Depósito Realizado');
        validationContext.setIsVisible(true);
        return
      }else {
        setUri('')
        validaationContext.setIsLoad(false);
        validationContext.setTitleError('Erro');
        validationContext.setInformation('Falha na realização do Deposito');
        validationContext.setIsVisible(true);
        return
      }
    } else if (event.url === 'http://localhost:3000/cancel.html') {
      setUri('')
      validaationContext.setIsLoad(false);
      validationContext.setTitleError('Erro');
      validationContext.setInformation('Falha na realização do Deposito');
      validationContext.setIsVisible(true);
      return
    }
  }
  async function handleSubmit() {
    try {
      validaationContext.setIsLoad(true);
      validationContext.setIsVisible(true);
      const service = new AccountServices();
      const result = await service.depositByCard(globalContext.login.id_login, parseFloat(amount+"00"), coin);
      validationContext.setIsVisible(false);
      validaationContext.setIsLoad(false);
      setUri(result.url);
    } catch (error) {
      console.log(error)
      validaationContext.setIsLoad(false);
      validationContext.setTitleError('Erro');
      validationContext.setInformation('Falha na realização do Deposito');
      validationContext.setIsVisible(true);
    }
    // handleClosePress();
    // validationContext.setTitleError('Éxito');
    // validationContext.setInformation('Depósito Realizado');
    // validationContext.setIsVisible(true);
  }

  return (

    (uri === '') ? (<Container>
      <TopContentTitle>
        <ButtonBack onPress={() => navigation.goBack()}>
          <ArrowCircleLeft size={42} color={'#000'} />
        </ButtonBack>
        <CenterTitleTop>
          <TitleTop>Levantamento</TitleTop>
        </CenterTitleTop>
      </TopContentTitle>
      <Text
        style={{
          fontSize: 16,
          color: 'rgba(113, 126, 149, 1)',
          fontWeight: '400', marginBottom: 68
        }}>
        Locais para efectuar Levantamento
      </Text>
      {/* <MapView
      //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView> */}
        

      
    </Container>)
      :
      (

        <WebView style={{ zIndex: 999, backgroundColor: '#fff' }} source={{ uri: uri }}
          onNavigationStateChange={viewNavigator}
        />
      )

  );
};
