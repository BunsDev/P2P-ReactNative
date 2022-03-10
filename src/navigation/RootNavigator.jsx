import React from "react";
import { Box, useColorModeValue, useToken } from "native-base";
// @redux
import { connect } from "react-redux";
// @react navigation
import { NavigationContainer } from "@react-navigation/native";
import {
  AppNavigator,
  AuthNavigator,
  ProfileNavigator,
} from "@navigation/index";

const RootNavigator = (props) => {
  const { isLoggined } = props;

  const [lightBg, darkBg] = useToken(
    "colors",
    ["white", "blueGray.900"],
    "blueGray.900"
  );
  const bgColor = useColorModeValue(lightBg, darkBg);

  return (
    <NavigationContainer
      theme={{
        colors: { background: bgColor },
      }}
    >
      <Box
        flex={1}
        w="100%"
        _light={{
          bg: "white",
        }}
        _dark={{
          bg: "blueGray.900",
        }}
        _web={{
          overflowX: "hidden",
        }}
      >
        {/* <AppNavigator /> */}
        <ProfileNavigator />
        {/* {!isLoggined ? <AuthNavigator /> : <AppNavigator />} */}
      </Box>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  isLoggined: state.auth.isLoggined,
});

export default connect(mapStateToProps)(RootNavigator);
