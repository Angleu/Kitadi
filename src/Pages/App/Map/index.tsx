import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../Dashboard/style';
import MapView from 'react-native-maps';

const Map = () => {
  const navigation = useNavigation();

  return (
      <MapView
      style={{flex: 1}}
        initialRegion={{
          latitude: -8.83833,
          longitude: 13.2344,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
      />
  );
};

export default Map;
