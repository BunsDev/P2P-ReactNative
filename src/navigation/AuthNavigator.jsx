import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// @screens
import { Welcome, Login } from "../screens/auth";

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
    </Stack.Navigator>
  );
};

export default AuthNavigator;
