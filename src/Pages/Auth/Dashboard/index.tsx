import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetSpringConfigs,
  useBottomSheetTimingConfigs,
} from '@gorhom/bottom-sheet';
import {Eye,Gear} from 'phosphor-react-native';
import {Easing} from 'react-native-reanimated';
import {
  Container,
  ContainerInformation,
  TopInf,
  ButtonMore,
  Title,
  More,
  RightView,
  LeftView,
  Box,
  SectionTop,
  ImgType,
  TitleBox,
  VolBox,
  Bar,
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

const DashBoard: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['65%', 'CONTENT_HEIGHT'], []);

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
              <Gear size={32} color={'#fff'} weight="fill"/>
            </ButtonConf>
          </RightViewTop>
          <CenterHead>
            <AmountTop>AOA 4.000.000.00</AmountTop>
            <ButtonVer>
              <Eye size={28} weight={'fill'} color={'#fff'} style={{paddingLeft:10}}/>
              <Detail>Mostrar</Detail>
            </ButtonVer>
          </CenterHead>
        </TopContent>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          animationConfigs={animationConfigs_2}>
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
            </ContainerInformation>
          </BottomSheetView>
        </BottomSheet>
      </Container>
    </LinearGradient>
  );
};

export default DashBoard;
