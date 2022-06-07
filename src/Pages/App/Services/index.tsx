import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  
  TitleTop,
  CenterTitleTop,
  TopContentTitle,
} from '../Dashboard/style';

import { Container } from '../Deposit/style';
import {RowServices} from '../../../components/RowServices';

const Services = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <TopContentTitle>
          <CenterTitleTop>
            <TitleTop>Serviços</TitleTop>
          </CenterTitleTop>

          <RowServices
            icon="Bank"
            title="Pagamento"
            onPress={() => navigation.navigate('Payment')}
          />
          <RowServices
            icon="Transfer"
            title="Transferir"
            onPress={() => navigation.navigate('CardDeposit')}
          />
          <RowServices
            icon="Withdraw"
            title="Levantamento"
            onPress={() => navigation.navigate('CardDeposit')}
          />
          <RowServices
            icon="CreditCard"
            title="Cartão digital"
            onPress={() => navigation.navigate('CardDeposit')}
          />
          <RowServices
            icon="TPA"
            title="TPA"
            onPress={() => navigation.navigate('CardDeposit')}
          />
        </TopContentTitle>
      </Container>
    </>
  );
};

export default Services;
