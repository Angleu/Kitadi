import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressBar} from 'react-native-paper';
import {Box, TitleBox, VolBox, Bar, ImgType} from './style';
import Pagamentos from '../../assets/Saly-11.png';
import Depositos from '../../assets/Sally-4.png';
import Transferencias from '../../assets/Saly-42.png';
import Outros from '../../assets/Saly-45.png';
import LottieView from 'lottie-react-native';
import {Avatar} from '../CardTransations/style';

interface IData {
  Name: string;
  amount: number;
  onPress?: Function;
  avatar: string;
}

const BoxWithdraw = (data: IData) => {
  const GRADIENT = ['rgba(207, 207, 207, 0.26)', 'rgba(207, 207, 207, 0)'];
  const STYLE = {flex: 1, borderRadius: 10, padding: 12,width: '50%'};
console.warn(data)
  return (
    <Box onPress={data.data.onPress} style={STYLE}>
      <TitleBox>{data.data.Name}</TitleBox>
      <Avatar source={{uri: data.data.avatar}}></Avatar>

      <VolBox>{data.data.amount}Kz</VolBox>
    </Box>
  );
};

export default BoxWithdraw;
