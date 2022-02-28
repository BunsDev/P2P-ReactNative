import React, { useState, useRef } from 'react';
import { View, UIManager, LayoutAnimation, SafeAreaView } from 'react-native';
import { Text, InputProps, Button, SocialIcon } from 'react-native-elements';
import FormInput from '@components/Organisms/FormInput';
// @redux
import { connect } from 'react-redux';
import { setAuthState } from '@store/actions/auth';
// @style
import { useStyles } from './styles';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const LoginScreen: React.FC = (props: any) => {
  const styles = useStyles();
  const { navigation, setAuthState } = props;
  // state
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [validEmail, setEmailValid] = useState<boolean>(true);
  const [validPassword, setPasswordValid] = useState<boolean>(true);

  const [isLoading, setLoading] = useState<boolean>(false);
  // ref
  let emailInput = useRef<InputProps>(null);
  let passwordInput = useRef<InputProps>(null);

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

  const login = () => {
    setAuthState(true);
    // navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View>
          <Text style={styles.mdlabel}>{'Welcome Login'}</Text>
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
              login();
            }}
          />
          <Button
            title={'Log In'}
            activeOpacity={0.7}
            onPress={() => {
              login();
            }}
            titleStyle={styles.inText}
            buttonStyle={styles.inButton}
            disabled={isLoading}
          ></Button>
          <Button
            title={'Forgotten your password ?'}
            titleStyle={styles.loginHereText}
            containerStyle={{ flex: -1 }}
            buttonStyle={{ backgroundColor: 'transparent' }}
            onPress={() => {}}
          />
          <View style={styles.socialgp}>
            <SocialIcon title="Sign In With Google" button type="google" />
            <SocialIcon title="Sign In With Facebook" button type="facebook" />
          </View>
        </View>
        <View style={styles.loginHereContainer}>
          <Text style={styles.alreadyAccountText}>
            If you don't have account ?
          </Text>
          <Button
            title="register"
            titleStyle={styles.loginHereText}
            containerStyle={{ flex: -1 }}
            buttonStyle={{ backgroundColor: 'transparent' }}
            onPress={() => navigation.navigate('register')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  setAuthState: setAuthState,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
