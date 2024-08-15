import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Button from '../../components/buttons/solidButton';
import CustomTextInput from '../../components/customTextInput';
import TextButton from '../../components/buttons/textButton';
import Titles from '../../components/titles';

import {SIGNUP_SCREEN} from '../../navigation/routePaths';

import {login} from '../../redux/slices/auth';

import styles from './styles';
import {useDispatch} from 'react-redux';

const LoginScreen = (props: {navigation: any}) => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const resetPassword = () => {
    console.log('password resetted');
  };

  const onLogin = () => {
    const userData = {email: email, password: password};
    dispatch(login(userData));
    setEmail('');
    setPassword('');
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
                onChangeText={setEmail}
                value={email}
                mailInput={true}
              />
              <CustomTextInput
                label={'Password'}
                placeholder={'Please enter your password'}
                onChangeText={setPassword}
                secureTextEntry={true}
                value={password}
                doubleIcons={true}
              />
              <View style={styles.textButton}>
                <TextButton
                  buttonText="Restore password"
                  onPress={resetPassword}
                />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <Button buttonText="Login" onPress={onLogin} />
              <Button buttonText="Sign Up" onPress={signUp} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
