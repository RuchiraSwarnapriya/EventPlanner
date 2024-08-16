import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

import {useDispatch} from 'react-redux';

import Button from '../../components/buttons/solidButton';
import CustomTextInput from '../../components/customTextInput';
import Titles from '../../components/titles';

import {LOGIN_SCREEN} from '../../navigation/routePaths';

import {signUp} from '../../redux/actions/auth';

import {validateEmail} from '../../utils/validators';

import styles from './styles';

const SignUpScreen = (props: {navigation: any}) => {
  const {navigation} = props;

  const dispatch: any = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateForm = () => {
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confrim Password is required');
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords are not matching');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    return valid;
  };

  const login = () => {
    navigation.navigate(LOGIN_SCREEN);
  };

  const onSignUp = () => {
    // if (validateForm()) {
    //   console.log('signup Success');
    //   setEmail('');
    //   setPassword('');
    //   setConfirmPassword('');
    // }
    dispatch(signUp(email, password, confirmPassword));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.mainContainer}>
            <Titles title="Welcome" subTitle="Welcome to your portal" />
            <View style={styles.inputContainer}>
              <CustomTextInput
                label={'Email'}
                placeholder={'Please enter your email'}
                onChangeText={(text: string) => {
                  setEmail(text);
                  if (emailError) {
                    setEmailError('');
                  }
                }}
                mailInput={true}
                value={email}
                errorText={emailError}
              />
              <CustomTextInput
                label={'Password'}
                placeholder={'Please enter your password'}
                onChangeText={(text: string) => {
                  setPassword(text);
                  if (passwordError) {
                    setPasswordError('');
                  }
                }}
                secureTextEntry={true}
                doubleIcons={true}
                value={password}
                errorText={passwordError}
              />
              <CustomTextInput
                label={'Confirm Password'}
                placeholder={'Please enter your password again'}
                onChangeText={(text: string) => {
                  setConfirmPassword(text);
                  if (confirmPasswordError) {
                    setConfirmPasswordError('');
                  }
                }}
                secureTextEntry={true}
                doubleIcons={true}
                value={confirmPassword}
                errorText={confirmPasswordError}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button buttonText="Sign Up" onPress={onSignUp} />
              <Button buttonText="Login" onPress={login} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
