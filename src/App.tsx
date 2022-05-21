import React from "react";
import Auth from "./routes/auth";
import { ValidationProvider } from "./context/Validation";
import { LogBox } from "react-native";

const App: React.FC = () => {
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
    ])
  return (
    <ValidationProvider>
      <Auth />
    </ValidationProvider>
  )
}

export default App;