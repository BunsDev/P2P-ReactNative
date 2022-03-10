import React, { Children } from "react";
import { Box, ScrollView } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Floaters } from "./Floaters";

const Layout = (props) => {
  const { fb, scroll } = props;
  return (
    <>
      {scroll ? (
        <ScrollView
          contentContainerStyle={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <ChildrenWrapper {...props} />
        </ScrollView>
      ) : (
        <ChildrenWrapper {...props} />
      )}

      <Floaters fb={fb} />
    </>
  );
};

const ChildrenWrapper = (props) => {
  const { children, th } = props;
  const safeArea = useSafeAreaInsets();
  return (
    <>
      <Box
        height={th ? th : safeArea.top}
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
        py={10}
        mx="auto"
        w={{ base: "100%", md: "768px", lg: "1000px", xl: "1080px" }}
        position="relative"
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
