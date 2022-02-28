import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// @ screens
import WelcomeScreen from '@components/Scenes/auth/welcome';
import LoginScreen from '@components/Scenes/auth/login';
import RegisterScreen from '@components/Scenes/auth/register';
import { PhoneNumberScreen, OtpScreen } from '@components/Scenes/auth/phone';

const Stack = createStackNavigator();

const AuthNavigator = (props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen}></Stack.Screen>
      <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="register" component={RegisterScreen}></Stack.Screen>
      <Stack.Screen
        name="phoneNumber"
        component={PhoneNumberScreen}
      ></Stack.Screen>
      <Stack.Screen name="otp" component={OtpScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
