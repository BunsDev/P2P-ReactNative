import React from "react";
import { Layout } from "@components/Layout";
import {
  Center,
  Heading,
  HStack,
  Image,
  Switch,
  Text,
  TextArea,
  VStack,
} from "native-base";
import { MenuItem } from "@components/Menu";

const MenuData = [
  {
    leftname: "My location",
    rightname: "Chamonix-Mont-Bla...",
  },
  {
    leftname: "Show city in profile",
    rightCP: <Switch size="md" />,
  },
];

const UserProfile = () => {
  return (
    <Layout th={2} fb={60} scroll={true}>
      <VStack px={3} space={5}>
        <Center>
          <Heading>{"Profile"}</Heading>
        </Center>
        <HStack alignItems="center" space={3} mt={3}>
          <Image
            borderRadius={100}
            size={12}
            source={require("@assets/images/user.jpg")}
            alt={"User Photo"}
          />
          <Text>{"Change photo"}</Text>
        </HStack>
        <VStack space={2}>
          <Text fontSize="sm" color="muted.500">
            {"About me"}
          </Text>
          <TextArea
            fontSize="sm"
            height={40}
            placeholder="The Switch provides an alternative to the Checkbox component. It also allows a user to switch between enabled or disabled states."
          ></TextArea>
        </VStack>
        <VStack space={4} mt={10}>
          {MenuData &&
            MenuData.map((item, index) => (
              <MenuItem item={item} key={`userprofile-menuitem-${index}`} />
            ))}
        </VStack>
      </VStack>
    </Layout>
  );
};

export default UserProfile;
