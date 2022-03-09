import React from "react";
import { useColorMode } from "native-base";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// @icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
// @screens
import { Home } from "../screens/app";

// @screens

const Tab = createMaterialBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Tab.Navigator activeColor="#06b6d4">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={Home}
        options={{
          tabBarLabel: "New",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Home}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-bulleted"
              color={color}
              size={26}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthNavigator;
