import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {
  TopContentTitle,
  CenterTitleTop,
  TitleTop,
} from '../Dashboard/style';
import { Container } from './style';
import { AvailableAmount } from '../../../components/AvailableAmount';
import { RowServices } from '../../../components/RowServices';

const Deposit = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TopContentTitle>
        <CenterTitleTop>
          <TitleTop>Depósito</TitleTop>
        </CenterTitleTop>
      </TopContentTitle>
      <AvailableAmount />
      <RowServices icon='Bank' title='Carregamento de Conta' onPress={() => navigation.navigate('BankSection')} />
      <RowServices icon='CreditCard' title='Cartōes de Débito/Crédito' onPress={() => navigation.navigate('CardDeposit')} />

    </Container>
  );
};

export default Deposit;
