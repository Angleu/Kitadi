import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Container} from '../Dashboard/style';

const Account = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.3}}
      end={{x: 0, y: 0.0}}
      style={{flex: 1}}
      colors={['rgba(247, 247, 247, 1)', 'rgba(29, 92, 99, 0.3)']}>
      <Container></Container>
    </LinearGradient>
  );
};

export default Account;
