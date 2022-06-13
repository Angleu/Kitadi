import React, {useContext, useCallback, useMemo, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {
  CenterTitle,
  CenterTitleTop,
  Container,
  Content,
  Title,
  TopContent,
} from '../Dashboard/style';
import MapView, {Marker} from 'react-native-maps';
import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetSpringConfigs,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import Button from '../../../components/Button';
import {ContentButton} from '../Deposit/style';
import {CardWithdraw} from '../../../components/CardWithdraw';
import {View} from 'react-native';

const Map = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef_List = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef_Info = useRef<BottomSheetModal>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const initialSnapPoints = useMemo(() => ['25%', 'CONTENT_HEIGHT'], []);
  const snapPoints = useMemo(() => ['30%', '50%'], []);

  // callbacks
  const handlePresentModalPress_List = useCallback(() => {
    bottomSheetModalRef_List.current?.present();
  }, []);
  const handleCloseModalPress_List = useCallback(() => {
    bottomSheetModalRef_List.current?.close();
  }, []);
  const handlePresentModalPress_Info = useCallback(() => {
    bottomSheetModalRef_Info.current?.present();
  }, []);
  const handleCloseModalPress_Info = useCallback(() => {
    bottomSheetModalRef_Info.current?.close();
  }, []);

  const handleRefresh = useCallback(() => {
    console.log('handleRefresh');
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  const WithdrawMarks = [
    {
      id: '1',
      latitude: -8.9238339,
      longitude: 13.1807655,
      destination: 'Carteira',
    },
    {
      id: '2',
      latitude: -8.9268139,
      longitude: 13.1809055,
      destination: 'Carteira',
    },
    {
      id: '3',
      latitude: -8.9293439,
      longitude: 13.1879659,
      destination: 'Carteira',
    },
    {
      id: '4',
      latitude: -8.9901339,
      longitude: 13.1801295,
      destination: 'Carteira',
    },
    {
      id: '5',
      latitude: -8.9908339,
      longitude: 13.1809855,
      destination: 'Carteira',
    },
  ];

  interface marker {
    id: string;
    latitude: number;
    longitude: number;
    destination: string;
  }

  const [selectedMarker, setSelectedMarker] = React.useState<marker>();


  return (
    <>
      <MapView
        style={{flex: 0.8}}
        initialRegion={{
          latitude: -8.83833,
          longitude: 13.2344,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation>
        {WithdrawMarks.map(mark => (
          <Marker
            coordinate={{latitude: mark.latitude, longitude: mark.longitude}}
            onPress={() => {
              setSelectedMarker(mark);
              handlePresentModalPress_Info();
            }}
          />
        ))}
      </MapView>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        onChange={handleSheetChange}
        animationConfigs={animationConfigs}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        handleIndicatorStyle={{display: 'none'}}>
        <BottomSheetView style={{flex: 1}} onLayout={handleContentLayout}>
          <Container>
            <CenterTitleTop>
              <Title>Levantamento</Title>
            </CenterTitleTop>
            <ContentButton style={{width: '96%', alignSelf: 'center'}}>
              <Button
                text="Historico de Levantamento"
                outline={true}
                onPress={handlePresentModalPress_List}
              />
             
            </ContentButton>
          </Container>
        </BottomSheetView>
      </BottomSheet>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef_List}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle={{display: 'none'}}>
          <BottomSheetView style={{flex: 1}}>
            <Container>
              <CenterTitleTop>
                <Title>Postos de Levantamento</Title>
              </CenterTitleTop>
              <View style={{flex: 1, width: '98%', alignSelf: 'center'}}>
                <BottomSheetFlatList
                  data={WithdrawMarks}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                    <CardWithdraw data={item} onPress={() => {}} />
                  )}
                />
                <>
                  <Button
                    text="Fechar"
                    outline={false}
                    onPress={handleCloseModalPress_List}
                  />
                </>
              </View>
            </Container>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef_Info}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle={{display: 'none'}}>
          <BottomSheetView style={{flex: 1}} onLayout={handleContentLayout}>
            <Container>
            <CenterTitleTop>
              <Title>{selectedMarker?.destination}</Title>
            </CenterTitleTop>
              <ContentButton style={{width: '96%', alignSelf: 'center'}}>
              <Button
                  text="Obter Indicações"
                  outline={true}
                  onPress={handleCloseModalPress_Info}
                />
                <Button
                  text="Fechar"
                  outline={false}
                  onPress={handleCloseModalPress_Info}
                />
              </ContentButton>
            </Container>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

export default Map;
