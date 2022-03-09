import React from "react";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "@navigation/RootNavigator";
// @theme
import { BaseTheme } from "@theme/index";
import config from "../nativebase.config";
// @redux
import { Provider } from "react-redux";
import configureStore from "@store/store";
// @dependencies

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={BaseTheme} config={config}>
        <RootNavigator />
      </NativeBaseProvider>
    </Provider>
  );
}
