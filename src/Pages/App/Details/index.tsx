import React, {useRef, useCallback, useMemo, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {CardTransations} from '../../../components/CardTransations';
import {
  Container,
  TopContent,
  RightViewTop,
  ButtonConf,
  ContainerInformation,
  TopInf,
  LeftView,
  Title,
} from '../Dashboard/style';
import {ButtonClose, Detail, ContainerButton} from './style';
import {Gear} from 'phosphor-react-native';
import {useNavigation, RouteProp} from '@react-navigation/native';
import BottomSheet, {
  useBottomSheetDynamicSnapPoints,
  useBottomSheetSpringConfigs,
  BottomSheetDraggableView,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {Dimensions} from 'react-native';

const Transations = [
  {
    id: '1',
    amount: 10000,
    date: '20/10/2020',
    destination: 'Carteira',
    avatar: 'https://i.pravatar.cc/300',
    coin: 'AOA',
    type: 'Deposito',
  },
  {
    id: '2',
    amount: 10000,
    date: '20/10/2020',
    destination: 'Spot',
    avatar: 'https://i.pravatar.cc/300',
    coin: 'AOA',
    type: 'Deposito',
  },
  {
    id: '3',
    amount: 10000,
    date: '20/10/2020',
    destination: 'Carteira',
    avatar: 'https://i.pravatar.cc/300',
    coin: 'AOA',
    type: 'Deposito',
  },
  {
    id: '4',
    amount: 100,
    date: '20/10/2020',
    destination: 'Angleu',
    avatar: 'https://i.pravatar.cc/300',
    coin: 'AOA',
    type: 'Deposito',
  },
  {
    id: '5',
    amount: 10000,
    date: '20/10/2020',
    destination: 'Carteira',
    avatar: 'https://i.pravatar.cc/300',
    coin: 'AOA',
    type: 'Deposito',
  },
];

const Details = ({route}) => {
  const navigation = useNavigation();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const SnapPoints = useMemo(() => ['65%', '100%'], []);
  const initialSnapPoints = useMemo(() => ['92%', 'CONTENT_HEIGHT'], []);
  const [Y_SIZE] = useMemo(() => [Dimensions.get('screen').height], []);
  const [size, setSize] = useState(Math.floor(Y_SIZE * 0.92));

  console.log('Y_SIZE', Math.floor(Y_SIZE * 0.92));

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

  console.log('HandleContentLayout', handleContentLayout);

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.3}}
      end={{x: 0, y: 0.0}}
      style={{flex: 1,justifyContent:'center'}}
      colors={['rgba(247, 247, 247, 1)', 'rgba(29, 92, 99, 0.9)']}>
      <Container >
        <TopContent >
          <RightViewTop>
            <ButtonConf>
              <Gear size={32} color={'#fff'} weight="fill" />
            </ButtonConf>
          </RightViewTop>
        </TopContent>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          onChange={handleSheetChange}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          animationConfigs={animationConfigs}>
          <BottomSheetDraggableView onLayout={handleContentLayout}>
            <LinearGradient
              colors={['rgba(207, 207, 207, 0.2)', 'rgba(207, 207, 207, 0)']}
              style={{borderRadius: 20, marginHorizontal: 2}}
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}>
              <ContainerInformation>
                <TopInf>
                  <LeftView>
                    <Title>{route.params.type}</Title>
                  </LeftView>
                </TopInf>
                <BottomSheetFlatList
                  data={Transations}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                    <CardTransations
                      data={item}
                      onPress={() =>
                        navigation.navigate('Informations', {item})
                      }
                    />
                  )}
                />
              </ContainerInformation>
            </LinearGradient>
          </BottomSheetDraggableView>
        </BottomSheet>
      </Container>
      <ContainerButton>
        <ButtonClose>
          <Detail>Fechar</Detail>
        </ButtonClose>
      </ContainerButton>
    </LinearGradient>
  );
};

export default Details;
