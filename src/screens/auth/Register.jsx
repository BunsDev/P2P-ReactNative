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
  Checkbox,
} from "native-base";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import {
  FacebookSocialButton,
  GoogleSocialButton,
} from "react-native-social-buttons";

const Register = (props) => {
  const { navigation } = props;
  const [groupValues, setGroupValues] = React.useState([]);
  return (
    <Layout height={10}>
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
              {"Sign Up"}
            </Heading>
            <Box>
              <Input
                defaultValue=""
                placeholder="Username"
                fontSize={15}
                InputLeftElement={
                  <Icon
                    as={<SimpleLineIcons name="user" />}
                    size={6}
                    ml="3"
                    color="muted.400"
                  />
                }
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {"Please enter a Username"}
              </FormControl.ErrorMessage>
            </Box>
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
                {"Please enter a valid email address"}
              </FormControl.ErrorMessage>
            </Box>
            <Box>
              <Input
                type="password"
                defaultValue=""
                placeholder="Password"
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
                {"At least 6 charaters are required."}
              </FormControl.ErrorMessage>
            </Box>
            <Box mt={3}>
              <Button size="lg" onPress={() => navigation.navigate("verify")}>
                {"Sign Up"}
              </Button>
            </Box>

            <Box>
              <Checkbox.Group
                onChange={setGroupValues}
                value={groupValues}
                accessibilityLabel="choose numbers"
              >
                <Checkbox value="one" my={2}>
                  {"Subscribe to our newsletter"}
                </Checkbox>
                <Checkbox value="two">
                  {
                    "By registering, I confirm that I accept Terms & Conditions and Pro terms of sale, have read the Privacy policy, and am at least 18 years old."
                  }
                </Checkbox>
              </Checkbox.Group>
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
        <HStack alignItems="center" space={3} mt={100}>
          <Text fontSize={15}>{"You already have account ?"}</Text>
          <Pressable onPress={() => navigation.navigate("login")}>
            <Text fontSize={15} color="primary.500">
              {"Sign In"}
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Register;
