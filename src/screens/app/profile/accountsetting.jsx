import React from "react";
import { Layout } from "@components/Layout";
import {
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AccountSetting = (props) => {
  return (
    <Layout th={2} fb={60} scroll={true}>
      <VStack px={3} space={7}>
        <Center>
          <Heading>{"Account Settings"}</Heading>
        </Center>
        <HStack justifyContent="space-between" alignItems="center">
          <VStack space={1}>
            <Text fontSize="xl" bold>
              {"apechou@gmail.com"}
            </Text>
            <HStack space={3} alignItems="center">
              <Text fontSize="sm" color="muted.500">
                {"Verified"}
              </Text>
              <MaterialCommunityIcons
                name="check-underline"
                size={18}
                color="#737373"
              />
            </HStack>
          </VStack>
          <Button variant="outline">{"Change"}</Button>
        </HStack>
        <VStack space={5}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="xl" bold>
              {"+336 (***) ***09"}
            </Text>
            <Button variant="outline">{"Change"}</Button>
          </HStack>
          <Text fontSize="sm" mt={3} color="muted.500">
            {
              "Your Phone number will only be used to help you log in, It won't be made public, or used for marketing purposes"
            }
          </Text>
        </VStack>
        <VStack space={2}>
          <Text fontSize="sm" color="muted.500">
            {"Full name"}
          </Text>
          <Input variant="underlined" isReadOnly fontSize="lg">
            {"anthony perchou"}
          </Input>
        </VStack>
        <VStack space={2}>
          <Text fontSize="sm" color="muted.500">
            {"Gender"}
          </Text>
          <Input variant="underlined" isReadOnly fontSize="lg">
            {"Man"}
          </Input>
        </VStack>
        <VStack space={2}>
          <Text fontSize="sm" color="muted.500">
            {"Birthday"}
          </Text>
          <Input variant="underlined" isReadOnly fontSize="lg">
            {"1984-05-09"}
          </Input>
        </VStack>
        <VStack space={5} my={5}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="xl" bold>
              {"Email address"}
            </Text>
            <Button variant="outline" isDisabled>
              {"Verified"}
            </Button>
          </HStack>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="xl" bold>
              {"Facebook"}
            </Text>
            <Button variant="outline">{"Link"}</Button>
          </HStack>
          <VStack space={2}>
            <HStack justifyContent="space-between" alignItems="center">
              <Text fontSize="xl" bold>
                {"Google"}
              </Text>
              <Button variant="outline" isDisabled>
                {"Linked"}
              </Button>
            </HStack>
            <Text fontSize="sm" color="muted.500">
              {
                "Link to your other accounts to become a trusted, verified member"
              }
            </Text>
          </VStack>
        </VStack>
        <Pressable onPress={() => console.log("change password")}>
          <Text fontSize="xl" bold>
            {"Change Password"}
          </Text>
        </Pressable>
      </VStack>
    </Layout>
  );
};

export default AccountSetting;
