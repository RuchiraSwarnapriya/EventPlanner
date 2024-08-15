import React, {useState} from 'react';
import {View} from 'react-native';

import Button from '../../components/buttons/solidButton';
import CustomTextInput from '../../components/customTextInput';
import Titles from '../../components/titles';

import {LOGIN_SCREEN} from '../../navigation/routePaths';

import styles from './styles';

const SignUpScreen = (props: {navigation: any}) => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const login = () => {
    navigation.navigate(LOGIN_SCREEN);
  };
  const signUp = () => {
    console.log('signup Success');
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
        <CustomTextInput
          label={'Confirm Password'}
          placeholder={'Please enter your password again'}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          doubleIcons={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button buttonText="Sign Up" onPress={signUp} />
        <Button buttonText="Login" onPress={login} />
      </View>
    </View>
  );
};

export default SignUpScreen;
