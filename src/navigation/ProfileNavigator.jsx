import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// @screens
import { UserProfile } from "../screens/app/profile/index";

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="userprofile" component={UserProfile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
