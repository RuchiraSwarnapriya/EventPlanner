import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {login} from '../../redux/actions/auth';

import {validateEmail} from '../../utils/validators';

import Button from '../../components/buttons/solidButton';
import CustomTextInput from '../../components/customTextInput';
import TextButton from '../../components/buttons/textButton';
import Titles from '../../components/titles';

import {SIGNUP_SCREEN, WELCOME_SCREEN} from '../../navigation/routePaths';

import styles from './styles';

const LoginScreen = (props: {navigation: any}) => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch: any = useDispatch();
  const loading = useSelector(({auth}) => auth.isFetching);

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

    return valid;
  };

  const resetPassword = () => {
    console.log('password resetted');
  };

  const onLogin = async () => {
    // if (validateForm()) {
    //   dispatch(login(email, password));
    //   setEmail('');
    //   setPassword('');
    //   navigation.navigate(WELCOME_SCREEN);
    // }
    navigation.navigate(WELCOME_SCREEN);
  };

  const signUp = () => {
    navigation.navigate(SIGNUP_SCREEN);
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
                value={email}
                mailInput={true}
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
                value={password}
                doubleIcons={true}
                errorText={passwordError}
              />
              <View style={styles.textButton}>
                <TextButton
                  buttonText="Restore password"
                  onPress={resetPassword}
                />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                buttonText="Login"
                onPress={onLogin}
                isLoading={loading}
              />
              <Button buttonText="Sign Up" onPress={signUp} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
