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

import {Container} from '../../../Deposit/style';
import {RowServices} from '../../../../../components/RowServices';

export const Payment = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <TopContentTitle>
          <TopContentTitle>
            <ContentRow>
              <ButtonBack onPress={() => navigation.goBack()}>
                <ArrowCircleLeft size={42} color={'#000'} />
              </ButtonBack>
              <CenterTitleTop>
                <TitleTop>Pagamentos</TitleTop>
              </CenterTitleTop>
            </ContentRow>
          </TopContentTitle>

          
          <RowServices
            icon="QrCode"
            title="QrCode"
            onPress={() => navigation.navigate('Payment')}
          />
          
          <RowServices
            icon="CreditCard"
            title="NFC"
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
