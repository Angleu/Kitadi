import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  TitleTop,
  CenterTitleTop,
  TopContentTitle,
  ContentRow,
  Title,
} from '../../../Dashboard/style';
import {ButtonBack} from '../../../Dashboard/style';
import {ArrowCircleLeft} from 'phosphor-react-native';

import {Container, Pressable, View} from '../../../Deposit/style';
import {RowServices} from '../../../../../components/RowServices';
import { ContainerTop } from '../../../Deposit/Others/BankSection/style';

export const Payment = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <TopContentTitle>
        <ContainerTop >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowCircleLeft size={42} color={'#000'} />
        </Pressable>
        <View style={{flex: 1,alignSelf:'center'}}>
          <TitleTop style={{alignSelf:'center'}} >Pagamentos</TitleTop>
        </View>
      </ContainerTop>

          
          <RowServices
            icon="QrCode"
            title="QrCode"
            onPress={() => navigation.navigate('QrCodePayment')}
          />
          
          <RowServices
            icon="CreditCard"
            title="NFC"
            onPress={() => navigation.navigate('NFCPayment')}
          />
          <RowServices
            icon="TPA"
            title="TPA"
            onPress={() => navigation.navigate('TPAPayment')}
          />
        </TopContentTitle>
      </Container>
    </>
  );
};
