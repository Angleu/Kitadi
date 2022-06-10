import "react-native-gesture-handler";
import React from "react";
import Auth from "./routes/auth";
import { ValidationProvider } from "./context/Validation";
import { LogBox } from "react-native";
import Routes from "./routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const App: React.FC = () => {
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
  ])
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <ValidationProvider>
        <Routes />
      </ValidationProvider>
    </GestureHandlerRootView>
  )
}

export default App;