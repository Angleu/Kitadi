import React, {useCallback, useMemo, useRef} from 'react';
import {Dimensions} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetSpringConfigs,
  useBottomSheetTimingConfigs,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {Eye, Gear} from 'phosphor-react-native';
import {Easing} from 'react-native-reanimated';
import {
  Container,
  ContainerInformation,
  TopInf,
  Title,
  RightView,
  LeftView,
  SectionTop,
  AmountTop,
  TopContent,
  ButtonVer,
  Detail,
  RightViewTop,
  ButtonConf,
  CenterHead,
} from './style';
import LinearGradient from 'react-native-linear-gradient';
import BoxElement from '../../../components/BoxElement/Index';
import {CardTransations} from '../../../components/CardTransations';

const Y_SIZE = Dimensions.get('window').height;

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
    destination: 'Carteira',
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
    amount: 10000,
    date: '20/10/2020',
    destination: 'Carteira',
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

const DashBoard: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['65%', '80%','90%','100%'], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const animationConfigs_1 = useBottomSheetTimingConfigs({
    duration: 1000,
    easing: Easing.exp,
  });

  const animationConfigs_2 = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.3}}
      end={{x: 0, y: 0.0}}
      style={{flex: 1}}
      colors={['rgba(247, 247, 247, 1)', 'rgba(29, 92, 99, 0.9)']}>
      <Container>
        <TopContent>
          <RightViewTop>
            <ButtonConf>
              <Gear size={32} color={'#fff'} weight="fill" />
            </ButtonConf>
          </RightViewTop>
          <CenterHead>
            <AmountTop>AOA 4.000.000.00</AmountTop>
            <ButtonVer>
              <Eye
                size={28}
                weight={'fill'}
                color={'#fff'}
                style={{paddingLeft: 10}}
              />
              <Detail>Mostrar</Detail>
            </ButtonVer>
          </CenterHead>
        </TopContent>

        <BottomSheet
          style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          animationConfigs={animationConfigs_2}>
          <LinearGradient
            colors={['rgba(207, 207, 207, 0)', 'rgba(207, 207, 207, 0.26)']}
            style={{borderRadius: 10}}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}>
            <BottomSheetView onLayout={handleContentLayout}>
              <ContainerInformation>
                <TopInf>
                  <LeftView>
                    <Title>Transaçōes</Title>
                  </LeftView>
                </TopInf>
                <SectionTop>
                  <LeftView>
                    <BoxElement type="Pagamentos" amount={230} bar={0.2} />
                    <BoxElement type="Transferências" amount={500} bar={0.2} />
                  </LeftView>
                  <RightView>
                    <BoxElement type="Depósitos" amount={2930} bar={0.6} />
                    <BoxElement type="Outros" amount={309} bar={0.3} />
                  </RightView>
                </SectionTop>
                <TopInf>
                  <LeftView>
                    <Title>Recentes</Title>
                  </LeftView>
                </TopInf>
                <BottomSheetFlatList
                  data={Transations}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => <CardTransations data={item} />}
                />
              </ContainerInformation>
            </BottomSheetView>
          </LinearGradient>
        </BottomSheet>
      </Container>
    </LinearGradient>
  );
};

export default DashBoard;
