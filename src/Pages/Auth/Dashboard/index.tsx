import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetSpringConfigs,
  useBottomSheetTimingConfigs,
} from '@gorhom/bottom-sheet';
import {PlusCircle} from 'phosphor-react-native';
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
} from './style';
import LinearGradient from 'react-native-linear-gradient';

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
    <Container>
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
              <RightView>
                <ButtonMore>
                  <PlusCircle
                    size={32}
                    weight="fill"
                    color="#262626"
                    style={{marginTop: 8, marginLeft: 8}}
                  />
                  <More>Ver mais</More>
                </ButtonMore>
              </RightView>
            </TopInf>
            <SectionTop>
              <LeftView>
                <Box>
                  <LinearGradient
                    colors={[
                      'rgba(207, 207, 207, 0.26)',
                      'rgba(207, 207, 207, 0)',
                    ]}
                    style={{flex: 1, borderRadius: 10}}>
                    <ImgType source={require('../../../assets/Saly-11.png')} />
                    <TitleBox>Pagamentos</TitleBox>
                    <VolBox>20.12Kz</VolBox>
                    <Bar>
                      <ProgressBar progress={0.5} color={'#BFBCE8'} />
                    </Bar>
                  </LinearGradient>
                </Box>

                <Box>
                  <LinearGradient
                    colors={[
                      'rgba(207, 207, 207, 0.26)',
                      'rgba(207, 207, 207, 0)',
                    ]}
                    style={{flex: 1, borderRadius: 10}}>
                    <ImgType source={require('../../../assets/Saly-42.png')} />
                    <TitleBox>Transferências</TitleBox>
                    <VolBox>20.12Kz</VolBox>
                    <Bar>
                      <ProgressBar progress={0.5} color={'#BFBCE8'} />
                    </Bar>
                  </LinearGradient>
                </Box>
              </LeftView>

              <RightView>
                <Box>
                  <LinearGradient
                    colors={[
                      'rgba(207, 207, 207, 0.26)',
                      'rgba(207, 207, 207, 0)',
                    ]}
                    style={{flex: 1, borderRadius: 10}}>
                    <ImgType source={require('../../../assets/Sally-4.png')} />
                    <TitleBox>Depósitos</TitleBox>
                    <VolBox>20.12Kz</VolBox>
                    <Bar>
                      <ProgressBar progress={0.5} color={'#BFBCE8'} />
                    </Bar>
                  </LinearGradient>
                </Box>
                <Box>
                  <LinearGradient
                    colors={[
                      'rgba(207, 207, 207, 0.26)',
                      'rgba(207, 207, 207, 0)',
                    ]}
                    style={{flex: 1, borderRadius: 10}}>
                    <ImgType source={require('../../../assets/Saly-45.png')} />
                    <TitleBox>Outros</TitleBox>
                    <VolBox>20.12Kz</VolBox>
                    <Bar>
                      <ProgressBar progress={0.5} color={'#BFBCE8'} />
                    </Bar>
                  </LinearGradient>
                </Box>
              </RightView>
            </SectionTop>
          </ContainerInformation>
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
};

export default DashBoard;
