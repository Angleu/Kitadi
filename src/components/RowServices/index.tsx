import React from 'react';
import {Body, Icon, Text} from './style';
import {Bank, CreditCard} from 'phosphor-react-native';

interface IRowservicesProps {
    title: string;
    onPress?: Function;
    icon?: 'Bank'|'CreditCard'|undefined;
}


export const RowServices = ({title,onPress,icon}:IRowservicesProps) => {
  return (
    <Body onPress={onPress}>
      <Icon style={{display: (icon==='Bank')?'flex':'none', backgroundColor:'#cacaca', padding: 5, borderRadius:10}}>
        <Bank size={42} color={'rgba(45, 103, 109, 1)'} />
      </Icon>
      <Icon style={{display: (icon==='CreditCard')?'flex':'none', backgroundColor:'#cacaca', padding: 5, borderRadius:10}}>
        <CreditCard size={42} color={'rgba(45, 103, 109, 1)'} />
      </Icon>
      <Text>{title}</Text>
    </Body>
  );
};
