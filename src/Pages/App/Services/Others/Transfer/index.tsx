import React, {useCallback, useContext, useMemo, useRef} from 'react';

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

import {ArrowCircleLeft} from 'phosphor-react-native';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import InputLayout from '../../../../../components/InputLayout';
import Button from '../../../../../components/Button';
import ValidationContext from '../../../../../context/Validation';
import {ContainerA} from '../../../Dashboard/style';

export const Transfer = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
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
    <ContainerA>
      <ContainerTop>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowCircleLeft size={42} color={'#000'} />
        </Pressable>
        <View style={{flex: 1}}>
          <TitleTop>Transferir</TitleTop>
        </View>
      </ContainerTop>
      <LabelBank style={{textAlign: 'center', marginBottom: 50}}>
        Informe os Dados do Beneficiário
      </LabelBank>
      <ContentBank>
        <LabelBank>Email</LabelBank>
        <InputLayout
          placeholder=""
          value={email}
          onChange={setEmail}></InputLayout>
        <LabelBank>Beneficiário</LabelBank>
        <InputLayout
          placeholder=""
          value={domiciliation}
          onChange={setDomiciliation}></InputLayout>
        <LabelBank>Montante</LabelBank>
        <InputLayout
          placeholder=""
          value={amount}
          onChange={setAmount}></InputLayout>
      </ContentBank>
      <Button onPress={onSuccess} text="Confirmar" outline={false} />
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}>
          <BottomSheetView style={{flex: 1}}>
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
