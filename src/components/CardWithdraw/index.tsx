import React from 'react';
import {View} from 'react-native';
import {Body, Destination, Details, Type, Amount, Avatar} from './style';

interface ICard {
  id: string;
  latitude: number;
  longitude: number;
  destination: string;
 
}

type Props = {
  data: ICard;
  onPress?: Function;
};

export const CardWithdraw = (data: Props) => {
  return (
      <Body onPress={data.onPress}>
        <Details>
          <Type>{data.data.destination}</Type>
          <Destination>{data.data.destination}</Destination>
        </Details>
        <Amount>{data.data.longitude}</Amount>
        <Type />
        <Type />

      </Body>
  );
};
