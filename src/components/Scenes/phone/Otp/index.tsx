import React, { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-elements';
import { checkVerification } from '@utils/phone-verify';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import { useStyles } from './styles';
const OtpScreen = (props: any) => {
  const styles = useStyles();

  const { phoneNumber, navigation } = props;
  const [invalidCode, setInvalidCode] = useState(false);
  return (
    <SafeAreaView>
      <Text>{'Enter the code we sent you'}</Text>
      <Text>
        {`Your phone (${phoneNumber}) will be used to protect your account each time you log in.`}
      </Text>
      <Button
        title="Edit Phone Number"
        onPress={() => navigation.replace('PhoneNumber')}
      />
      <OTPInputView
        style={{ width: '80%', height: 200 }}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          checkVerification(phoneNumber, code).then((success) => {
            if (!success) setInvalidCode(true);
            success && navigation.replace('Gated');
          });
        }}
      />
      {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
    </SafeAreaView>
  );
};

export default OtpScreen;
