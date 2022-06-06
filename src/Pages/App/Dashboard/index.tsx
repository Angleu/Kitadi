import React, {useCallback, useContext, useMemo, useRef} from 'react';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, FlatList} from 'react-native-gesture-handler';

import BottomSheet, {
  BottomSheetView,
  BottomSheetDraggableView,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetSpringConfigs,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {Eye, Gear} from 'phosphor-react-native';
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
  Content,
} from './style';
import LinearGradient from 'react-native-linear-gradient';
import BoxElement from '../../../components/BoxElement/Index';
import {CardTransations} from '../../../components/CardTransations';
import AuthenticationContext from '../../../context/Authentication';

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
    amount: 13200,
    date: '20/10/2020',
    destination: 'Carteira',
    avatar: 'https://i.pravatar.cc/300',
    coin: 'AOA',
    type: 'Deposito',
  },
  {
    id: '3',
    amount: 21300,
    date: '20/10/2020',
    destination: 'Carteira',
    avatar: 'https://i.pravatar.cc/300',
    coin: 'AOA',
    type: 'Tranferencia',
  },
  {
    id: '4',
    amount: 12300,
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
  const navigation = useNavigation();
  const globalContext = useContext(AuthenticationContext);
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const initialSnapPoints = useMemo(() => ['65%', 'CONTENT_HEIGHT'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

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
    stiffness: 500
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
            <AmountTop>AOA {globalContext.account.balance}</AmountTop>
            <ButtonVer>
              <Eye
                size={28}
                weight={'fill'}
                color={'#fff'}
                style={{paddingLeft: 10, display: 'flex'}}
              />
              <Detail>Mostrar</Detail>
            </ButtonVer>
          </CenterHead>
        </TopContent>

        <BottomSheet
          style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          onChange={handleSheetChange}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          animationConfigs={animationConfigs}>
          <LinearGradient
            colors={['rgba(207, 207, 207, 0)', 'rgba(207, 207, 207, 0.26)']}
            style={{borderRadius: 10}}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}>
            <BottomSheetDraggableView onLayout={handleContentLayout}>
              <ContainerInformation>
                <TopInf>
                  <LeftView>
                    <Title>Transaçōes</Title>
                  </LeftView>
                </TopInf>
                <SectionTop>
                  <LeftView>
                    <BoxElement
                      type="Pagamentos"
                      amount={230}
                      bar={0.2}
                      onPress={() =>
                        navigation.navigate('Details' as never, {type: 'Pagamentos'})
                      }
                    />
                    <BoxElement
                      type="Transferências"
                      amount={500}
                      bar={0.2}
                      onPress={() =>
                        navigation.navigate('Details', {type: 'Transferências'})
                      }
                    />
                  </LeftView>
                  <RightView>
                    <BoxElement
                      type="Depósitos"
                      amount={2930}
                      bar={0.6}
                      onPress={() =>
                        navigation.navigate('Details', {type: 'Depósitos'})
                      }
                    />
                    <BoxElement
                      type="Outros"
                      amount={309}
                      bar={0.3}
                      onPress={() =>
                        navigation.navigate('Details', {type: 'Outros'})
                      }
                    />
                  </RightView>
                </SectionTop>
                <TopInf>
                  <LeftView>
                    <Title>Recentes</Title>
                  </LeftView>
                </TopInf>
                <Content>
                  <FlatList
                    scrollEnabled={true}
                    data={Transations}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <CardTransations
                        data={item}
                        onPress={() => navigation.navigate('Informations', {item})}
                      />
                    )}
                  />
                </Content>
              </ContainerInformation>
            </BottomSheetDraggableView>
          </LinearGradient>
        </BottomSheet>

        {/* <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <BottomSheetDraggableView onLayout={handleContentLayout}>
              <LinearGradient
                colors={['rgba(207, 207, 207, 0.2)', 'rgba(207, 207, 207, 0)']}
                style={{borderRadius: 20, marginHorizontal: 2}}
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}>
                <ContainerInformation>
                  <TopInf>
                    <LeftView>
                      <Title>Transferencias</Title>
                    </LeftView>
                  </TopInf>
                  <BottomSheetFlatList
                    data={Transations}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <CardTransations
                        data={item}
                        onPress={() => navigation.navigate('Details', {item})}
                      />
                    )}
                  />
                </ContainerInformation>
              </LinearGradient>
            </BottomSheetDraggableView>
          </BottomSheetModal>
        </BottomSheetModalProvider> */}
      </Container>
    </LinearGradient>
  );
};

export default DashBoard;
