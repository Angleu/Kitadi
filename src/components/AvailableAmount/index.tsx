import React, { useContext } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Amount, TextAmount, TextSection, ViewRight, IconAlign } from "./style";
import { Info } from "phosphor-react-native";
import AuthenticationContext from "../../context/Authentication";



export const AvailableAmount = () => {
  const globalContext = useContext(AuthenticationContext)
  return (<LinearGradient style={{ width: '100%', borderRadius: 10, marginBottom: 35 }} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['rgba(45, 103, 109, 0.7)', 'rgba(29, 92, 99, 1)']}>
    <Amount>

      <TextSection>Saldo Disponivel</TextSection>
      <TextAmount>{globalContext.account.balance} Kz</TextAmount>
      <ViewRight>
        <IconAlign>
          <Info color="#fff" size={38} />
          {/* <InfSvg /> */}
        </IconAlign>
      </ViewRight>
    </Amount>
  </LinearGradient>);
}