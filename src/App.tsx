import React from "react";
import Auth from "./routes/auth";
import { ValidationProvider } from "./context/Validation";
import { LogBox } from "react-native";
import Routes from "./routes";
const App: React.FC = () => {
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
    ])
  return (
    <ValidationProvider>
      <Routes />
    </ValidationProvider>
  )
}

export default App;