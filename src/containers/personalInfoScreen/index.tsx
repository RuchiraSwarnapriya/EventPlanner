import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import {useDispatch} from 'react-redux';

import CustomTextInput from '../../components/customTextInput';
import Button from '../../components/buttons/solidButton';

import {flowCompleted} from '../../redux/actions/auth';

import RightArrow from '../../assets/icons/rightArrow.svg';

import styles from './styles';

const PersonalInfoScreen = (props: {navigation: any}) => {
  const {navigation} = props;
  const dispatch: any = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

  const onNext = () => {
    dispatch(flowCompleted());
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Personal info</Text>
            <Text style={styles.subTitle}>
              You can add your personal data now or do it later
            </Text>

            <View style={styles.inputContainer}>
              <CustomTextInput
                label={'First Name'}
                placeholder={'Please enter your first name'}
                onChangeText={setFirstName}
                mailInput={false}
                value={firstName}
              />
              <CustomTextInput
                label={'Last Name'}
                placeholder={'Please enter your last name'}
                onChangeText={setLastName}
                mailInput={false}
                value={lastName}
              />
              <CustomTextInput
                label={'Email'}
                placeholder={'Please enter your email'}
                onChangeText={setEmail}
                mailInput={false}
                value={email}
              />
              <CustomTextInput
                label={'Phone number'}
                placeholder={'Please enter your phone number'}
                onChangeText={setPhoneNum}
                mailInput={false}
                value={phoneNum}
                keyboardType="numeric"
              />
              <CustomTextInput
                label={'Mailing address'}
                placeholder={'Please enter your mailing address'}
                onChangeText={setAddress}
                mailInput={false}
                value={address}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                buttonText="Back"
                onPress={goBack}
                buttonWidth={166}
                reverse={true}
              />
              <Button
                buttonText="Next"
                onPress={onNext}
                buttonWidth={166}
                icon={<RightArrow />}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PersonalInfoScreen;
