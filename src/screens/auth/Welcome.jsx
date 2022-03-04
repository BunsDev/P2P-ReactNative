import React from "react";
import { Center, Image, useColorMode, VStack, Button } from "native-base";
import BG_IMAGE from "@assets/images/bgimg.png";
import { Layout } from "@components/Layout";

const Welcome = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Layout>
      <VStack space={3}>
        <Image source={BG_IMAGE} alt="Revoclix" height={600} />
        <Button onPress={() => console.log("signup")} size="lg">
          {"Sign Up"}
        </Button>
        <Button
          onPress={() => console.log("signin")}
          size="lg"
          variant="outline"
        >
          {"I already have an account"}
        </Button>
      </VStack>
    </Layout>
  );
};

export default Welcome;
