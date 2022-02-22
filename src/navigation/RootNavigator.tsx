import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { navTheme } from '@theme/theme';
// import screens
import WelcomeScreen from '@components/Scenes/welcome';
import LoginScreen from '@components/Scenes/login';
const Stack = createStackNavigator();

const RootNavigator = (props: any) => {
  const { themeMode } = props;
  return (
    <NavigationContainer
      theme={{
        ...navTheme,
        dark: themeMode === 'dark',
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({
  themeMode: state.theme.mode,
});

// const mapDispatchToProps = {};
// export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
export default connect(mapStateToProps)(RootNavigator);
