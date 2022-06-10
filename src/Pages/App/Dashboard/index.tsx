import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

import BottomSheet, {
  BottomSheetView,
  BottomSheetDraggableView,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetSpringConfigs,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
  Eye,
  Gear,
  UserCircleGear,
  Wallet,
  XCircle,
} from 'phosphor-react-native';
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
  LeftViewTop,
  ButtonConf,
  CenterHead,
  ContentRow,
} from './style';
import { Content } from '../Deposit/style';
import LinearGradient from 'react-native-linear-gradient';
import BoxElement from '../../../components/BoxElement/Index';
import { CardTransations } from '../../../components/CardTransations';

import { ContentButton } from '../Deposit/style';
import { ButtonClose } from '../Details/style';

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
  const [title, setTitle] = React.useState('');
  const [show, setShow] = useState(false)
  const navigation = useNavigation();

  const globalContext = useContext(AuthenticationContext);
  // ref
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    onOpen();
  }, []);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const initialSnapPoints = useMemo(() => ['65%', 'CONTENT_HEIGHT'], []);
  const snapPoints = useMemo(() => ['65%', '90%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleRefresh = useCallback(() => {
    console.log('handleRefresh');
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
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

  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.3 }}
      end={{ x: 0, y: 0.0 }}
      style={{ flex: 1 }}
      colors={['rgba(247, 247, 247, 1)', 'rgba(29, 92, 99, 0.9)']}>
      <Container>
        <TopContent>
          <ContentRow>
            <RightViewTop>
              <ButtonConf>
                <UserCircleGear size={32} color={'#fff'} weight="fill" />
              </ButtonConf>
            </RightViewTop>
            <LeftViewTop>
              <ButtonConf>
                <Wallet size={32} color={'#fff'} weight="fill" />
              </ButtonConf>
            </LeftViewTop>
          </ContentRow>
          <CenterHead>
            <AmountTop>AOA {(show)? globalContext.account.balance: "******"}</AmountTop>
            <ButtonVer onPress={() => setShow(!show)}>
              <Eye
                size={28}
                weight={'fill'}
                color={'#fff'}
                style={{ paddingLeft: 10, display: 'flex' }}
              />
              <Detail>{(show) ? "Ocultar" :"Mostrar"}</Detail>
            </ButtonVer>
          </CenterHead>
        </TopContent>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          onChange={handleSheetChange}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          animationConfigs={animationConfigs}
          enableContentPanningGesture={true}
          enableHandlePanningGesture={true}
          handleIndicatorStyle={{ display: 'none' }}>
          <LinearGradient
            colors={['rgba(207, 207, 207, 0)', 'rgba(207, 207, 207, 0.26)']}
            style={{ borderRadius: 24, flex: 1 }}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.0, y: 1.0 }}>
            <BottomSheetView onLayout={handleContentLayout} style={{ flex: 1, padding: 16}}>
              <ContainerInformation>
                <Title>Transaçōes</Title>
                <SectionTop>
                  <BoxElement
                    type="Pagamentos"
                    amount={230}
                    bar={0.2}
                    onPress={() => {
                      setTitle('Pagamentos'), handlePresentModalPress();
                    }}
                  />
                  <BoxElement
                    type="Transferências"
                    amount={500}
                    bar={0.2}
                    onPress={() => {
                      setTitle('Transferências'), handlePresentModalPress();
                    }}
                  />
                  <BoxElement
                    type="Depósitos"
                    amount={2930}
                    bar={0.6}
                    onPress={() => {
                      setTitle('Depósitos'), handlePresentModalPress();
                    }}
                  />
                  <BoxElement
                    type="Outros"
                    amount={309}
                    bar={0.3}
                    onPress={() => {
                      setTitle('Outros'), handlePresentModalPress();
                    }}
                  />
                </SectionTop>
                <TopInf>
                  <LeftView>
                    <Title>Recentes</Title>
                  </LeftView>
                </TopInf>
                <Content>
                  <FlatList
                    onRefresh={handleRefresh}
                    // scrollEnabled={true}
                    data={Transations}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <CardTransations
                        data={item}
                        onPress={() =>
                          navigation.navigate('Informations', { item })
                        }
                      />
                    )}
                  />
                </Content>
              </ContainerInformation>
            </BottomSheetView>
          </LinearGradient>
        </BottomSheet>

        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            handleIndicatorStyle={{ display: 'none' }}>
            <BottomSheetView style={{ flex: 1 }}>
              <LinearGradient
                colors={['rgba(207, 207, 207, 0.2)', 'rgba(207, 207, 207, 0)']}
                style={{ borderRadius: 20, marginHorizontal: 2, flex: 1 }}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.0, y: 1.0 }}>
                <Content>
                  <Title>{title}</Title>

                  <BottomSheetFlatList
                    onRefresh={handleRefresh}
                    data={Transations}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <CardTransations
                        data={item}
                        onPress={() => navigation.navigate('Informations', { item })}
                      />
                    )}
                  />
                </Content>
                <Content>
                  <ContentButton style={{ marginBottom: 30 }}>
                    <ButtonClose onPress={handleCloseModalPress}>
                      <XCircle size={48} color={'#fff'}></XCircle>
                    </ButtonClose>
                  </ContentButton>
                </Content>
              </LinearGradient>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </Container>
    </LinearGradient>
  );
};

export default DashBoard;
