import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ProgressBar } from 'react-native-paper';
import { Box, TitleBox, VolBox, Bar, ImgType } from './style';
import Pagamentos from '../../assets/Saly-11.png';
import Depositos from '../../assets/Sally-4.png';
import Transferencias from '../../assets/Saly-42.png';
import Outros from '../../assets/Saly-45.png';
import LottieView from 'lottie-react-native';



interface IData {
  type: string;
  amount: number;
  bar: number;
  onPress?: Function;
}

const BoxElement: React.FC<IData> = ({ type, amount, bar, onPress }) => {


  const GRADIENT = ['rgba(207, 207, 207, 0.26)', 'rgba(207, 207, 207, 0)'];
  const STYLE = { flex: 1, borderRadius: 10, padding: 12 };




  return (
    <Box onPress={onPress}>
      <LinearGradient
        colors={GRADIENT}
        style={STYLE}>
        {
          (type === 'Depósitos') ?
            (<LottieView source={require('../../animation/62952-money-plant.json')} autoPlay
              style={{
                width: 100
              }}
              speed={1.3}
            />)
            :
            (type === 'Pagamentos') ?
              (<LottieView source={require('../../animation/23730-3d-mobile-payment.json')} autoPlay
                style={{
                  width: 130
                }}
                speed={1.3}
              />)
              :
              (type === 'Transferências') ?
                (<LottieView source={require('../../animation/98070-online-payment.json')} autoPlay
                  style={{
                    width: 100
                  }}
                  speed={1.3}
                />)
                :
                (<LottieView source={require('../../animation/37960-online-payment.json')} autoPlay
                style={{
                  width: 100
                }}
                speed={1.3}
              />)
        }

        {/* <ImgType source={type==='Pagamentos'?Pagamentos:(type==='Depósitos'?Depositos:(type==='Transferências'?Transferencias:Outros))}/> */}
        <TitleBox>{type}</TitleBox>
        <VolBox>{amount}Kz</VolBox>
        <Bar>
          <ProgressBar progress={bar} color={'#BFBCE8'} />
        </Bar>
      </LinearGradient>
    </Box>
  );
};

export default BoxElement;
