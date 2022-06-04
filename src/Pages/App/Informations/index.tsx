import React from 'react';
import {
  Container,
  LeftViewTop,
  ButtonBack,
  Title,
  Icons,
  ContentRow,
  CenterTitle,
  Information,
  TopContentTitle,
  Button,
  Icon,
} from '../Dashboard/style';
import LinearGradient from 'react-native-linear-gradient';
import {ArrowCircleLeft} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import { Text} from 'react-native';

import Export from '../../../assets/Export.png'
import Import from '../../../assets/DownloadSimple.png'


const Informations = ({route}) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.3}}
      end={{x: 0, y: 0.0}}
      style={{flex: 1}}
      colors={['rgba(247, 247, 247, 1)', 'rgba(29, 92, 99, 0.3)']}>
      <Container>
        <TopContentTitle>
          <ContentRow>
            <LeftViewTop>
              <ButtonBack onPress={() => navigation.goBack()}>
                <ArrowCircleLeft size={42} color="#2D676D" />
              </ButtonBack>
            </LeftViewTop>
            <CenterTitle>
              <Title>{route.params.item.type}</Title>
            </CenterTitle>
          </ContentRow>
        </TopContentTitle>
        <Information>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: '15%',textAlign:'center'}}>
            # {route.params.item.id}
          </Text>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: '15%',textAlign:'center'}}>
            Montante
          </Text>
          <Text style={{fontSize: 28, 
            fontWeight: 'bold',
             marginBottom: '15%',
             textAlign:'center',
             color:(route.params.item.type==='Deposito')?'#00D100':'#E74949'}}>
            {route.params.item.amount} AOA
          </Text>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: '1%',textAlign:'center'}}>
            Destinatário
          </Text>
          <Text style={{fontSize: 28, fontWeight: 'bold', marginBottom: '15%',textAlign:'center'}}>
            {route.params.item.destination} 
          </Text>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: '15%',textAlign:'center'}}>
            {route.params.item.date}
          </Text>
          <Icons>
              <Button><Icon source={require('../../../assets/DownloadSimple.png')}/></Button>
              <Button><Icon source={require('../../../assets/Export.png')}/></Button>
          </Icons>
        </Information>
      </Container>
    </LinearGradient>
  );
};

export default Informations;
