import React from "react";
import {
  Box,
  Heading,
  HStack,
  Pressable,
  useColorMode,
  ScrollView,
} from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Floaters } from "./Floaters";

const Layout = (props) => {
  const { children, navigation, title, navigateTo } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const safeArea = useSafeAreaInsets();
  return (
    <>
      <Box
        flex={1}
        px={2}
        pt={10}
        mx="auto"
        w={{ base: "100%", md: "768px", lg: "1000px", xl: "1080px" }}
      >
        <ScrollView
          contentContainerStyle={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </Box>
      <Floaters />
    </>
  );
};

export default Layout;
