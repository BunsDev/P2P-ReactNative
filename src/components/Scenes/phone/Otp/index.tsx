import React, { useState } from 'react';

import { TouchableOpacity, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-elements';
import { checkVerification } from '@utils/phone-verify';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AwesomeAlert from 'react-native-awesome-alerts';

import { Icon } from 'react-native-elements/dist/icons/Icon';

import { useStyles } from './styles';
import { theme } from '@theme/theme';
const OtpScreen = (props: any) => {
  const styles = useStyles();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const { phoneNumber, navigation } = props;
  const [invalidCode, setInvalidCode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerline}>
        <Text style={styles.mdlabel}>{phoneNumber || '+1-212-456-7890'}</Text>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => navigation.replace('PhoneNumber')}
        >
          <Icon color="black" size={28} name="edit" />
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 10 }}>{'Enter the code we sent you'}</Text>
      <OTPInputView
        style={{ width: '70%', height: 150 }}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          // checkVerification(phoneNumber, code).then((success) => {
          // if (!success) setInvalidCode(true);
          setShowAlert(true);
          // });
        }}
      />
      {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Successful"
        message="Your registration has been successful."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Go to DashBoard"
        confirmButtonColor={theme?.colors?.secondary}
        onConfirmPressed={() => {
          navigation.replace('gated');
          setShowAlert(false);
        }}
      />
    </SafeAreaView>
  );
};

export default OtpScreen;
