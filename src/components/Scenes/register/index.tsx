import React, { useState, useRef } from 'react';
import {
  View,
  UIManager,
  LayoutAnimation,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Text,
  InputProps,
  Button,
  CheckBox,
  useTheme,
  SocialIcon,
} from 'react-native-elements';
import FormInput from '@components/Organisms/FormInput';
import { useStyles } from './stlyes';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const RegisterScreen: React.FC = (props: any) => {
  const styles = useStyles();
  const { theme } = useTheme();
  const { navigation } = props;

  // state
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const [validUsername, setUsernameValid] = useState<boolean>(true);
  const [validEmail, setEmailValid] = useState<boolean>(true);
  const [validPassword, setPasswordValid] = useState<boolean>(true);

  const [isLoading, setLoading] = useState<boolean>(false);
  // ref
  let emailInput = useRef<InputProps>(null);
  let passwordInput = useRef<InputProps>(null);
  let usernameInput = useRef<InputProps>(null);

  const validateUsername = () => {
    const usernameCheck = username.length > 0;
    LayoutAnimation.easeInEaseOut();
    setUsernameValid(usernameCheck);
    usernameCheck || usernameInput.shake();
    return usernameCheck;
  };

  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = re.test(email);
    LayoutAnimation.easeInEaseOut();
    setEmailValid(emailCheck);
    emailCheck || emailInput.shake();
    return emailCheck;
  };

  const validatePassword = () => {
    const passwordCheck = password.length >= 8;
    LayoutAnimation.easeInEaseOut();
    setPasswordValid(passwordCheck);
    passwordCheck || passwordInput.shake();
    return passwordCheck;
  };

  const Signup = () => {
    navigation.navigate('phoneNumber');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View>
          <Text style={styles.mdlabel}>{'Sign Up'}</Text>
          <FormInput
            refInput={(input) => (usernameInput = input)}
            icon="user"
            value={username}
            onChangeText={(text: string) => setUsername(text)}
            placeholder="Username"
            returnKeyType="next"
            errorMessage={validUsername ? '' : "Your username can't be blank"}
            onSubmitEditing={() => {
              validateUsername();
              emailInput.focus();
            }}
          />
          <FormInput
            refInput={(input) => (emailInput = input)}
            icon="envelope"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            errorMessage={
              validEmail ? '' : 'Please enter a valid email address'
            }
            onSubmitEditing={() => {
              validateEmail();
              passwordInput.focus();
            }}
          />
          <FormInput
            refInput={(input) => (passwordInput = input)}
            icon="lock"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            placeholder="Password"
            secureTextEntry
            returnKeyType="next"
            errorMessage={
              validPassword ? '' : 'Please enter at least 8 characters'
            }
            onSubmitEditing={() => {
              validatePassword();
              Signup();
            }}
          />
          <Button
            title={'Sign Up'}
            activeOpacity={0.7}
            onPress={() => {
              Signup();
            }}
            titleStyle={styles.inText}
            buttonStyle={styles.inButton}
            disabled={isLoading}
          ></Button>
          <View>
            <CheckBox
              title={'Subscribe to our newsletter'}
              checked={check1}
              containerStyle={{
                backgroundColor: theme?.colors?.white,
              }}
              checkedColor={theme?.colors?.secondary}
              textStyle={{ fontWeight: 'normal' }}
              onPress={() => setCheck1(!check1)}
            />
            <CheckBox
              title={
                'By registering, I confirm that I accept Terms & Conditions and Pro terms of sale, have red the Privacy policy, and am at least 18 years old.'
              }
              checked={check2}
              containerStyle={{ backgroundColor: theme?.colors?.white }}
              checkedColor={theme?.colors?.secondary}
              textStyle={{ fontWeight: 'normal' }}
              onPress={() => setCheck2(!check2)}
            />
          </View>
          <View>
            <SocialIcon title="Sign Up With Google" button type="google" />
            <SocialIcon title="Sign Up With Facebook" button type="facebook" />
          </View>
        </View>
        <View style={styles.loginHereContainer}>
          <Text style={styles.alreadyAccountText}>
            {'You already have account ?'}
          </Text>
          <Button
            title="sign in"
            titleStyle={styles.loginHereText}
            containerStyle={{ flex: -1 }}
            buttonStyle={{ backgroundColor: 'transparent' }}
            onPress={() => {
              navigation.navigate('login');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
