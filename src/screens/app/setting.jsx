import React from "react";
import { Layout } from "@components/Layout";
import { MenuItem } from "@components/Menu";
import { Center, Heading, Switch, Text, VStack } from "native-base";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

const MenuData1 = [
  {
    leftname: "Profile details",
    rightCP: (
      <MaterialCommunityIcons name="arrow-right" size={30} color="#a3a3a3" />
    ),
  },
  {
    leftname: "Account settings",
    rightCP: (
      <MaterialCommunityIcons name="arrow-right" size={30} color="#a3a3a3" />
    ),
  },
  {
    leftname: "Payments",
    rightCP: (
      <MaterialCommunityIcons name="arrow-right" size={30} color="#a3a3a3" />
    ),
  },
  {
    leftname: "Postage",
    rightCP: (
      <MaterialCommunityIcons name="arrow-right" size={30} color="#a3a3a3" />
    ),
  },
  {
    leftname: "Security",
    rightCP: (
      <MaterialCommunityIcons name="arrow-right" size={30} color="#a3a3a3" />
    ),
  },
];

const MenuData2 = [
  {
    leftname: "Push notification",
    rightCP: (
      <MaterialCommunityIcons name="arrow-right" size={30} color="#a3a3a3" />
    ),
  },
  {
    leftname: "Email notification",
    rightCP: (
      <MaterialCommunityIcons name="arrow-right" size={30} color="#a3a3a3" />
    ),
  },
];

const MenuData3 = [
  {
    leftCP: <Fontisto name="world-o" size={22} color="#a3a3a3" />,
    leftname: "Language",
    rightCP: (
      <MaterialCommunityIcons name="arrow-right" size={30} color="#a3a3a3" />
    ),
    rightname: "English(EN)",
  },
];

const MenuData4 = [
  {
    leftname: "Notify sellers when I favoruite their items",
    rightCP: <Switch size="md" />,
  },
  {
    leftname: "Data settings",
    rightCP: <Switch size="md" />,
  },
];

const Setting = (props) => {
  return (
    <Layout th={1} fb={60} scroll={true}>
      <Center>
        <Heading>{"Settings"}</Heading>
      </Center>
      <VStack space={10} p={3}>
        <VStack space={4}>
          {MenuData1 &&
            MenuData1.map((item, index) => (
              <MenuItem item={item} key={`setting1-menuitem-${index}`} />
            ))}
        </VStack>
        <VStack space={4}>
          <Text fontSize="sm" color="muted.500">
            {"Notifications"}
          </Text>
          {MenuData2 &&
            MenuData2.map((item, index) => (
              <MenuItem item={item} key={`setting2-menuitem-${index}`} />
            ))}
        </VStack>
        <VStack space={4}>
          <Text fontSize="sm" color="muted.500">
            {"Your app's Language"}
          </Text>
          {MenuData3 &&
            MenuData3.map((item, index) => (
              <MenuItem item={item} key={`setting3-menuitem-${index}`} />
            ))}
        </VStack>
        <VStack space={1}>
          <Text fontSize="sm" color="muted.500">
            {"Privacy settings"}
          </Text>
          {MenuData4 &&
            MenuData4.map((item, index) => (
              <MenuItem item={item} key={`setting4-menuitem-${index}`} />
            ))}
        </VStack>
      </VStack>
    </Layout>
  );
};

export default Setting;
