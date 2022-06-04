import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {Container, InputText} from './style';

interface IInput {
  placeholder: string;
  value: string;
  onChange?: ((text: string) => void) | undefined;
  editable?: boolean;
 
}

const InputLayout: React.FC<IInput> = ({
  onChange,
  value,
  placeholder,
  editable,
}) => {
  return (
    <Container>
      <InputText
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        secureTextEntry={placeholder === 'Password' ? true : false}
        editable={editable}
      />
    </Container>
  );
};

export default InputLayout;
