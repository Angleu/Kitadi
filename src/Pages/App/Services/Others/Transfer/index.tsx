import React, { useCallback, useContext, useMemo, useRef } from 'react';

import { ContainerTop } from '../../../Deposit/Others/BankSection/style';
import {
  Content,
  ContentBank,
  ContentButton,
  LabelBank,
  Pressable,
  TitleTop,
  View,
} from '../../../Deposit/style';
import { useNavigation } from '@react-navigation/native';

import { ArrowCircleLeft } from 'phosphor-react-native';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import InputLayout from '../../../../../components/InputLayout';
import Button from '../../../../../components/Button';
import ValidationContext from '../../../../../context/Validation';
import { ContainerA } from '../../../Dashboard/style';
import UserServices from '../../../../../services/UserServices';
import TransationServices from '../../../../../services/TransationServices';
import AuthenticationContext from '../../../../../context/Authentication';
import AccountServices from '../../../../../services/AccountServices';
import AsyncStorage from '@react-native-community/async-storage';

export const Transfer = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [domiciliation, setDomiciliation] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [coin, setCoin] = React.useState('');
  const [fee, setFee] = React.useState('0,00%');

  const globalContext = useContext(AuthenticationContext);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '90%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current!.close();
  }, []);

  const validationContext = useContext(ValidationContext);

  async function handleSubmit() {
    try {
      validationContext.setIsLoad(true);
      validationContext.setIsVisible(true);
      const result = await new TransationServices().save({
        amount: parseFloat(amount),
        coin,
        description: "Transferência Bancaria",
        to_user: globalContext.account.id_account,
        email: email,
        type: "Transfer"

      })
      if (result instanceof Object) {
        const responseAccount = await new AccountServices().executeOne(globalContext.user.id_user as string)
        if (responseAccount instanceof Object) {
          globalContext.setAccount(responseAccount);
          await AsyncStorage.setItem('@RNAuth:account', JSON.stringify(responseAccount));
        }
      }
      validationContext.setIsVisible(false);
      validationContext.setIsLoad(false);
      handleClosePress();
      navigation.navigate({ name: "auth" } as never)
      validationContext.setTitleError('Éxito');
      validationContext.setInformation('Depósito Realizado');
      validationContext.setIsVisible(true);
    } catch {
      validationContext.setIsLoad(false);
      validationContext.setTitleError("Erro");
      validationContext.setInformation("Email Invalido");
      validationContext.setIsVisible(true);
    }

  }

  const onSuccess = async function () {
    if (email === '' || amount === '') {
      validationContext.setIsLoad(false);
      validationContext.setTitleError("Erro");
      validationContext.setInformation("Precisa preencher os campos em falta");
      validationContext.setIsVisible(true);
    } else {
      try {
        validationContext.setIsLoad(true);
        validationContext.setIsVisible(true);
        const result = await new UserServices().executeOneByEmail(email);
        if (result instanceof Object) {
          setDomiciliation(result.name);
          validationContext.setIsVisible(false);
          validationContext.setIsLoad(false);
          handlePresentModalPress();
        }
      } catch {
        validationContext.setIsLoad(false);
        validationContext.setTitleError("Erro");
        validationContext.setInformation("Email Invalido");
        validationContext.setIsVisible(true);

      }
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
          <TitleTop>Transferir</TitleTop>
        </View>
      </ContainerTop>
      <LabelBank style={{ textAlign: 'center', marginBottom: 50 }}>
        Informe os Dados do Beneficiário
      </LabelBank>
      <ContentBank>
        <LabelBank>Email</LabelBank>
        <InputLayout
          placeholder=""
          value={email}
          onChange={setEmail} />
        <LabelBank>Montante</LabelBank>
        <InputLayout
          placeholder=""
          value={amount}
          onChange={setAmount} />
      </ContentBank>
      <Button onPress={onSuccess} text="Confirmar" outline={false} />
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}>
          <BottomSheetView style={{ flex: 1, padding: 24 }}>
            <Content>
              <TitleTop>DADOS DO DEPÓSITO</TitleTop>
              <ContentBank>
                <LabelBank>Proprietário</LabelBank>
                <InputLayout placeholder="" value={domiciliation}></InputLayout>
                <LabelBank>Montante</LabelBank>
                <InputLayout placeholder="" value={amount}></InputLayout>
                <LabelBank>Moeda</LabelBank>
                <InputLayout placeholder="" value={'AOA'}></InputLayout>
                <LabelBank>Taxa</LabelBank>
                <InputLayout placeholder="" value={fee}></InputLayout>
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
