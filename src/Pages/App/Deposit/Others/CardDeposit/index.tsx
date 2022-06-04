import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const CardDeposit = () => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.7}}
      end={{x: 0, y: 0.0}}
      style={{flex: 1}}
      colors={[
        'rgba(247, 247, 247, 1)',
        'rgba(29, 92, 99, 0.3)',
      ]}></LinearGradient>
  );
};
