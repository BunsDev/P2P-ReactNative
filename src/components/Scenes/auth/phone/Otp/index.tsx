import React, { useState } from 'react';

import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import { checkVerification } from '@utils/phone-verify';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Icon } from 'react-native-elements/dist/icons/Icon';
//  @redux
import { connect } from 'react-redux';
import { setAuthState } from '@store/actions/auth';
// @style
import { useStyles } from './styles';
import { theme } from '@theme/theme';
const OtpScreen = (props: any) => {
  const styles = useStyles();
  const { setAuthState } = props;
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
          setShowAlert(false);
          setAuthState(true);
          navigation.navigate('app', {
            screen: 'Home',
          });
        }}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = {
  setAuthState: setAuthState,
};
export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen);
