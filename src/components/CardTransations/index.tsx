import React from 'react';
import {Body, Destination, Details, Type, Amount, Avatar} from './style';

interface ICard {
  id: string;
  amount: number;
  destination: string;
  avatar: string;
  date: string;
  coin: string;
  type: string;
}

type Props = {
  data: ICard;
};

export const CardTransations = (data: Props) => {
  return (
    <Body>
      <Details>
        <Type>{data.data.type}</Type>
        <Destination>{data.data.destination}</Destination>
      </Details>
      <Amount>{data.data.amount}</Amount>
      <Type />
      <Type />
      <Avatar source={{uri: data.data.avatar}}></Avatar>
    </Body>
  );
};
