import React from "react";
import { Layout } from "@components/Layout";
import {
  FormControl,
  Icon,
  Input,
  Box,
  VStack,
  WarningOutlineIcon,
  Button,
  Text,
  Pressable,
  Heading,
  HStack,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  FacebookSocialButton,
  GoogleSocialButton,
} from "react-native-social-buttons";

const Login = () => {
  return (
    <Layout>
      <VStack
        alignItems="center"
        w="75%"
        maxW="300px"
        margin="auto"
        flex={1}
        justifyContent="space-between"
      >
        <FormControl isRequired>
          <VStack space={4}>
            <Heading textAlign="center" mb={2}>
              {"Welcome Login"}
            </Heading>
            <Box>
              <Input
                defaultValue=""
                placeholder="Email"
                fontSize={15}
                InputLeftElement={
                  <Icon
                    as={<MaterialCommunityIcons name="email-outline" />}
                    size={6}
                    ml="3"
                    color="muted.400"
                  />
                }
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Please enter a valid email address
              </FormControl.ErrorMessage>
            </Box>
            <Box>
              <Input
                type="password"
                defaultValue=""
                placeholder="password"
                fontSize={15}
                InputLeftElement={
                  <Icon
                    as={<MaterialCommunityIcons name="lock" />}
                    size={6}
                    ml="3"
                    color="muted.400"
                  />
                }
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                At least 6 charaters are required.
              </FormControl.ErrorMessage>
            </Box>
            <Box mt={3}>
              <Button size="lg">{"Log In"}</Button>
            </Box>

            <Box>
              <Pressable
                onPress={() => console.log("forgotten")}
                _web={{
                  cursor: "pointer",
                }}
              >
                <Text textAlign="center" fontSize={15} color="primary.500">
                  {"Forgotten your password ?"}
                </Text>
              </Pressable>
            </Box>
          </VStack>
        </FormControl>
        <VStack mt={8} w="100%" space={1}>
          <GoogleSocialButton
            buttonViewStyle={{
              width: "100%",
              borderWidth: 1,
              borderColor: "warmGray.50",
            }}
          />
          <FacebookSocialButton buttonViewStyle={{ width: "100%" }} />
        </VStack>
        <HStack alignItems="center" space={3} mt={200}>
          <Text fontSize={15}>{"If you don't have account ?"}</Text>
          <Pressable onPress={() => console.log("123")}>
            <Text fontSize={15} color="primary.500">
              {"Register"}
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Login;
