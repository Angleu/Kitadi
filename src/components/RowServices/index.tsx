import React from 'react';
import {Body, Icon, Text} from './style';
import {Bank, CreditCard,ArrowsLeftRight,Money,CoinVertical, QrCode} from 'phosphor-react-native';

interface IRowservicesProps {
    title: string;
    onPress?: Function;
    icon?: 'Bank'|'CreditCard'|'Transfer'|'Withdraw'|'TPA'|'QrCode'|undefined;
}


export const RowServices = ({title,onPress,icon}:IRowservicesProps) => {
  return (
    <Body onPress={onPress}>
      <Icon style={{display: (icon==='QrCode')?'flex':'none', backgroundColor:'#cacaca', padding: 5, borderRadius:50}}>
        <QrCode size={42} color={'rgba(45, 103, 109, 1)'} />
      </Icon>
      <Icon style={{display: (icon==='Bank')?'flex':'none', backgroundColor:'#cacaca', padding: 5, borderRadius:50}}>
        <Bank size={42} color={'rgba(45, 103, 109, 1)'} />
      </Icon>
      <Icon style={{display: (icon==='CreditCard')?'flex':'none', backgroundColor:'#cacaca', padding: 5, borderRadius:50}}>
        <CreditCard size={42} color={'rgba(45, 103, 109, 1)'} />
      </Icon>
      <Icon style={{display: (icon==='Transfer')?'flex':'none', backgroundColor:'#cacaca', padding: 5, borderRadius:50}}>
        <ArrowsLeftRight size={42} color={'rgba(45, 103, 109, 1)'} />
      </Icon>
      <Icon style={{display: (icon==='Withdraw')?'flex':'none', backgroundColor:'#cacaca', padding: 5, borderRadius:50}}>
        <Money size={42} color={'rgba(45, 103, 109, 1)'} />
      </Icon>
      <Icon style={{display: (icon==='TPA')?'flex':'none', backgroundColor:'#cacaca', padding: 5, borderRadius:50}}>
        <CoinVertical size={42} color={'rgba(45, 103, 109, 1)'} />
      </Icon>
      <Text>{title}</Text>
    </Body>
  );
};
