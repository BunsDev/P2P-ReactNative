import React from "react";
import { ActivityIndicator } from "react-native";
import { HStack, Text, VStack, Image, Box, useColorMode } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProductCard = (props) => {
  const { data } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack
      m={3}
      p={3}
      flex={1}
      borderWidth={1}
      borderRadius={8}
      space={2}
      borderColor={colorMode == "dark" ? "primary.900" : "primary.500"}
    >
      <HStack space={3} alignItems="center">
        <Image
          borderRadius={100}
          size={10}
          source={data.user_avatar}
          alt={data.user_name}
        />
        <Text color="muted.400">{data.user_name}</Text>
      </HStack>
      <Image
        height={200}
        borderRadius={8}
        source={data.production_image}
        PlaceholderContent={<ActivityIndicator />}
        alt={data.product_name}
      />
      <VStack>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            <Text bold mr={1}>
              {data.production_price}
            </Text>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              color={colorMode == "dark" ? "white" : "black"}
              size={17}
            />
          </HStack>
          <HStack alignItems="center">
            <MaterialCommunityIcons
              name="heart-outline"
              color={colorMode == "dark" ? "white" : "black"}
              size={17}
            />
            <Text ml={1}>{data.recommendation}</Text>
          </HStack>
        </HStack>
        <Text color="muted.400">{data.product_name}</Text>
        <HStack justifyContent="space-between">
          <Text color="muted.400">{data.production_size}</Text>
          <Text color="muted.400">{data.boost}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ProductCard;
