import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressBar} from 'react-native-paper';
import {Box, TitleBox, VolBox, Bar, ImgType} from './style';
import Pagamentos from '../../assets/Saly-11.png';
import Depositos from '../../assets/Sally-4.png';
import Transferencias from '../../assets/Saly-42.png';
import Outros from '../../assets/Saly-45.png';



interface IData {
  type: string;
  amount: number;
  bar: number;
}

const BoxElement: React.FC<IData> = ({type, amount, bar}) => {


  const GRADIENT = ['rgba(207, 207, 207, 0.26)', 'rgba(207, 207, 207, 0)'];
  const STYLE = {flex: 1, borderRadius: 10};


  

  return (
    <Box>
      <LinearGradient
        colors={['rgba(207, 207, 207, 0.26)', 'rgba(207, 207, 207, 0)']}
        style={{flex: 1, borderRadius: 10}}>
         <ImgType source={type==='Pagamentos'?Pagamentos:(type==='Depósitos'?Depositos:(type==='Transferências'?Transferencias:Outros))}/>
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
