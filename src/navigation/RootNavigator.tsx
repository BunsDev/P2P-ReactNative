import React from 'react';
// @redux
import { connect } from 'react-redux';
// @react navigation
import { NavigationContainer } from '@react-navigation/native';
// @style
import { navTheme } from '@theme/theme';
// @util
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const RootNavigator = (props: any) => {
  const { themeMode, isLoggined } = props;

  console.log(themeMode, isLoggined);
  return (
    <NavigationContainer
      theme={{
        ...navTheme,
        dark: themeMode === 'dark',
      }}
    >
      {!isLoggined ? <AuthNavigator /> : <AppNavigator />}
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({
  themeMode: state.theme.mode,
  isLoggined: state.auth.isLoggined,
});

export default connect(mapStateToProps)(RootNavigator);
