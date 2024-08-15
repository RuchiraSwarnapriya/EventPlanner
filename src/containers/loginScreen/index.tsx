import React, {useState} from 'react';
import {View} from 'react-native';

import Button from '../../components/buttons/solidButton';
import CustomTextInput from '../../components/customTextInput';
import TextButton from '../../components/buttons/textButton';
import Titles from '../../components/titles';

import {SIGNUP_SCREEN} from '../../navigation/routePaths';

import styles from './styles';

const LoginScreen = (props: {navigation: any}) => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetPassword = () => {
    console.log('password resetted');
  };
  const login = () => {
    console.log('login success');
  };
  const signUp = () => {
    navigation.navigate(SIGNUP_SCREEN);
  };

  return (
    <View style={styles.mainContainer}>
      <Titles title="Welcome" subTitle="Welcome to your portal" />
      <View style={styles.inputContainer}>
        <CustomTextInput
          label={'Email'}
          placeholder={'Please enter your email'}
          onChangeText={setEmail}
          mailInput={true}
        />
        <CustomTextInput
          label={'Password'}
          placeholder={'Please enter your password'}
          onChangeText={setPassword}
          secureTextEntry={true}
          doubleIcons={true}
        />
        <View style={styles.textButton}>
          <TextButton buttonText="Restore password" onPress={resetPassword} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button buttonText="Login" onPress={login} />
        <Button buttonText="Sign Up" onPress={signUp} />
      </View>
    </View>
  );
};

export default LoginScreen;
