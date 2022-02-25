import React, { useState, useRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import PhoneInput from 'react-native-phone-number-input';

// utils
import { sendSmsVerification } from '@utils/phone-verify';

import { useStyles } from './styles';
const PhoneNumberScreen = (props: any) => {
  const { navigation } = props;
  const styles = useStyles();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.mdlabel}>{'Please check your phone.'}</Text>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="US"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          countryPickerProps={{ withAlphaFilter: true }}
          autoFocus
          containerStyle={styles.phonecontainer}
        />
      </View>
      <View>
        <Button
          title={'Send Code'}
          buttonStyle={styles.button}
          onPress={() => {
            // sendSmsVerification(formattedValue).then((sent) => {
            navigation.navigate('otp', { phoneNumber: formattedValue });
            // });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumberScreen;
