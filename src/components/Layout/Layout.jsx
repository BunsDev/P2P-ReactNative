import React from "react";
import { Box, ScrollView } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Floaters } from "./Floaters";

const Layout = (props) => {
  const { children, height, fb, noScroll } = props;
  const safeArea = useSafeAreaInsets();
  return (
    <>
      {noScroll ? (
        <ScrollView
          contentContainerStyle={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <Box
            height={height ? height : safeArea.top}
            _web={{
              pt: {
                base: 6,
                sm: 6,
                md: 0,
              },
            }}
          />
          <Box
            flex={1}
            px={2}
            pt={10}
            mx="auto"
            w={{ base: "100%", md: "768px", lg: "1000px", xl: "1080px" }}
          >
            {children}
          </Box>
        </ScrollView>
      ) : (
        <>
          <Box
            height={height ? height : safeArea.top}
            _web={{
              pt: {
                base: 6,
                sm: 6,
                md: 0,
              },
            }}
          />
          <Box
            flex={1}
            px={2}
            pt={10}
            mx="auto"
            w={{ base: "100%", md: "768px", lg: "1000px", xl: "1080px" }}
          >
            {children}
          </Box>
        </>
      )}

      <Floaters fb={fb} />
    </>
  );
};

export default Layout;
