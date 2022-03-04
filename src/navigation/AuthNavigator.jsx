import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// @screens
import { Welcome, Login, Register } from "../screens/auth";

const Stack = createStackNavigator();

const AuthNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
