import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// @screens
import { Welcome } from "../screens/auth";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="dashboard" component={Welcome} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
