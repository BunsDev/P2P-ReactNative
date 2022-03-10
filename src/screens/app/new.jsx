import React from "react";
import { Layout } from "@components/Layout";
import {
  Box,
  Button,
  Center,
  Input,
  Text,
  TextArea,
  VStack,
  Icon,
  useColorMode,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// @component
import { MenuItem } from "@components/Menu/index";

const MenuData = [
  {
    label: "Category",
    icon: "arrow-right",
  },
  {
    label: "Brand",
    icon: "arrow-right",
  },
  {
    label: "Condition",
    icon: "arrow-right",
  },
];

const New = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout th={1} fb={60} scroll={true}>
      <VStack space={6} p={3}>
        <VStack>
          <Center>
            <Text fontSize="md">
              {"Add up to 20 photos "}
              <Text underline color="primary.500">
                {"See photo tips"}
              </Text>
            </Text>
          </Center>
          <Box
            p={12}
            borderWidth={1}
            borderColor={colorMode == "dark" ? "primary.900" : "primary.500"}
            borderRadius={8}
            borderStyle="dotted"
          >
            <Center>
              <Button
                size="lg"
                _text={{ fontSize: "xl" }}
                leftIcon={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="cloud-upload-outline"
                  />
                }
              >
                {"Upload"}
              </Button>
            </Center>
          </Box>
        </VStack>
        <VStack space={5}>
          <Box>
            <Text fontSize="md">{"Title"}</Text>
            <Input
              variant="underlined"
              placeholder="White COS jumper"
              fontSize="md"
            />
          </Box>
          <Box>
            <Text fontSize="md">{"Describe your Item"}</Text>
            <TextArea
              h="40"
              fontSize="md"
              variant="underlined"
              placeholder="e.g: only worn a few times, true to size"
            />
          </Box>
        </VStack>

        <VStack space={3}>
          {MenuData &&
            MenuData.map((item, index) => (
              <MenuItem item={item} key={`newproduct-menuitem-${index}`} />
            ))}
        </VStack>
        <Box>
          <Text fontSize="md">{"Price"}</Text>
          <Input
            variant="underlined"
            placeholder="I am intereted in sawapping this"
            fontSize="md"
          />
        </Box>
        <Button _text={{ fontSize: "xl" }}>{"Upload"}</Button>
      </VStack>
    </Layout>
  );
};

export default New;
