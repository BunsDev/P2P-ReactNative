import React, { useState } from 'react';
import AppLoading from '@components/atoms/Apploading';
import { ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

import RootNavigator from '@navigation/RootNavigator';
import OfflineNotice from '@components/Organisms/OfflineNotice';
// import theme
import { theme } from '@theme/theme';
// import redux
import { Provider } from 'react-redux';
import configureStore from '@store/store';
// import utils
import loadAssetsAsync from '@theme/assets';

const store = configureStore();

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <OfflineNotice />
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
