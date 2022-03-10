import React, { useState } from "react";
import {
  VStack,
  Button,
  Heading,
  Pressable,
  HStack,
  useColorMode,
  Text,
} from "native-base";
import { Layout } from "@components/Layout";
import { AntDesign } from "@expo/vector-icons";
import Verify from "@components/Verify";
import PhoneInput from "react-native-phone-number-input";
// @utils
// import { sendSmsVerification, checkVerification } from "@utils/phone-verify";
// @redux
import { connect } from "react-redux";
import { setAuthState } from "@store/actions/auth";

const PhoneChecker = (props) => {
  const { navigation, setAuthState } = props;
  const [flag, setFlag] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);
  const [formattedValue, setFormattedValue] = useState("");

  // @ref
  const phoneInput = React.useRef(null);
  const { colorMode, toggleColorMode } = useColorMode();

  // @handle
  const onHandleClick = (value) => {
    // checkVerification(phoneNumber, code).then((success) => {
    // if (!success) setInvalidCode(true);
    setAuthState(true);
    navigation.navigate("dashboard");
    // });
  };

  return (
    <Layout scroll={true}>
      <VStack margin="auto" space={4} alignItems="center">
        {!flag ? (
          <VStack space={5} alignContent="center">
            <Heading textAlign="center">{"Please check your phone"}</Heading>
            <PhoneInput
              ref={phoneInput}
              defaultValue={formattedValue}
              defaultCode="FR"
              layout="first"
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              countryPickerProps={{ withAlphaFilter: true }}
              autoFocus
              withDarkTheme={colorMode == "dark"}
              containerStyle={{
                backgroundColor: colorMode == "dark" ? "#0f172a" : "#ffffff",
              }}
              textContainerStyle={{
                backgroundColor: colorMode == "dark" ? "#0f172a" : "#ffffff",
              }}
              codeTextStyle={{
                color: colorMode != "dark" ? "#0f172a" : "#ffffff",
              }}
              textInputStyle={{
                color: colorMode != "dark" ? "#0f172a" : "#ffffff",
              }}
            />
            <Button
              mt={3}
              onPress={() => {
                // sendSmsVerification(formattedValue).then((sent) => {
                // TODO : setFlag
                console.log(formattedValue);
                setFlag(true);

                // });
              }}
              size="lg"
            >
              {"Send Code"}
            </Button>
          </VStack>
        ) : (
          <>
            <HStack alignItems="center" space={3}>
              <Heading size="xl">{formattedValue || "+1-212-456-7890"}</Heading>
              <Pressable onPress={() => setFlag(false)}>
                <AntDesign
                  name="edit"
                  size={30}
                  color={colorMode == "dark" ? "white" : "black"}
                />
              </Pressable>
            </HStack>
            <Text fontSize="md">{"Enter the code we sent you."}</Text>
            {invalidCode && (
              <Text color="warning.300" fontSize="sm">
                Incorrect code.
              </Text>
            )}
            <Verify onHandleClick={onHandleClick} CELL_COUNT={6} />
          </>
        )}
      </VStack>
    </Layout>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  setAuthState: setAuthState,
};
export default connect(mapStateToProps, mapDispatchToProps)(PhoneChecker);
