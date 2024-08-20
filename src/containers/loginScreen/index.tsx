import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../components/buttons/solidButton';
import CustomTextInput from '../../components/customTextInput';

import TextButton from '../../components/buttons/textButton';
import Loader from '../../components/loader';
import Titles from '../../components/titles';

import {SIGNUP_SCREEN} from '../../navigation/routePaths';

import {login, resetUserPassword} from '../../redux/actions/auth';

import {validateEmail} from '../../utils/validators';

import AngledArrow from '../../assets/icons/angledArrow.svg';
import GreyAngledArrow from '../../assets/icons/greyAngledArrow.svg';
import RightArrow from '../../assets/icons/rightArrow.svg';
import MailIcon from '../../assets/icons/email.svg';
import PasswordIcon from '../../assets/icons/lock.svg';
import EyeIcon from '../../assets/icons/eye.svg';

import styles from './Styles';

const LoginScreen = (props: {navigation: any}) => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch: any = useDispatch();
  const isLoading = useSelector(({authorizer}) => authorizer.isLoginLoading);

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

  const resetPassword = async () => {
    await dispatch(resetUserPassword(email));
  };

  const onLogin = async () => {
    if (validateForm()) {
      await dispatch(login(email, password));
      setEmail('');
      setPassword('');
    }
  };

  const signUp = () => {
    navigation.navigate(SIGNUP_SCREEN);
  };

  useEffect(() => {
    setIsDisabled(email.trim().length === 0);
  }, [email]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
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
                  iconOne={<MailIcon />}
                  errorText={emailError}
                  keyboardType="email-address"
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
                  iconOne={<PasswordIcon />}
                  iconTwo={<EyeIcon />}
                  errorText={passwordError}
                />
                <View style={styles.textButton}>
                  <TextButton
                    buttonText="Restore password"
                    onPress={resetPassword}
                    icon={isDisabled ? <GreyAngledArrow /> : <AngledArrow />}
                    disabled={isDisabled}
                  />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  buttonText="Login"
                  onPress={onLogin}
                  icon={<RightArrow />}
                />
                <Button
                  buttonText="Sign Up"
                  onPress={signUp}
                  icon={<RightArrow />}
                />
              </View>
            </View>
          </ScrollView>
          {isLoading && <Loader />}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
