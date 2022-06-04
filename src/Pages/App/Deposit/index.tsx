import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {
  TopContentTitle,
  CenterTitleTop,
  TitleTop,
} from '../Dashboard/style';
import {Container} from './style';
import { AvailableAmount } from '../../../components/AvailableAmount';
import { RowServices } from '../../../components/RowServices';

const Deposit = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.7}}
      end={{x: 0, y: 0.0}}
      style={{flex: 1}}
      colors={['rgba(247, 247, 247, 1)', 'rgba(29, 92, 99, 0.3)']}>
      <Container>
        <TopContentTitle>
          <CenterTitleTop>
            <TitleTop>Depósito</TitleTop>
          </CenterTitleTop>
        </TopContentTitle>
        <AvailableAmount/>
        <RowServices icon='Bank' title='Carregamento de Conta' onPress={()=>navigation.navigate('BankSection')}/>
        <RowServices icon='CreditCard' title='Cartōes de Débito/Crédito' onPress={()=>navigation.navigate('CardDeposit')}/>

      </Container>
    </LinearGradient>
  );
};

export default Deposit;
