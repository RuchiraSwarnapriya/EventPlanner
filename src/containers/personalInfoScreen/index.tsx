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

import {useDispatch, useSelector} from 'react-redux';

import CustomTextInput from '../../components/customTextInput';
import Button from '../../components/buttons/solidButton';

import {setAppState} from '../../redux/actions/auth';
import {uploadUserData} from '../../redux/actions/user';

import {HOME} from '../../utils/constants';

import RightArrow from '../../assets/icons/rightArrow.svg';
import LeftArrow from '../../assets/icons/leftArrow.svg';

import styles from './styles';

const PersonalInfoScreen = (props: {navigation: any}) => {
  const {navigation} = props;
  const dispatch: any = useDispatch();
  const authData = useSelector(({authorizer}) => authorizer.authData);
  const isLoading = useSelector(({user}) => user.isUserDataUploading);
  const profileImageURL = useSelector(({user}) => user.userImageData);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(authData.email);
  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

  const onNext = async () => {
    try {
      const data = {
        firstName,
        lastName,
        email,
        phoneNum,
        address,
        profileImageURL,
      };
      await dispatch(uploadUserData(authData.uid, data)).then(() =>
        dispatch(setAppState(HOME)),
      );
    } catch (error) {
      console.error('Error saving user data:', error);
    }
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
                value={firstName}
              />
              <CustomTextInput
                label={'Last Name'}
                placeholder={'Please enter your last name'}
                onChangeText={setLastName}
                value={lastName}
              />
              <CustomTextInput
                label={'Email'}
                placeholder={'Please enter your email'}
                onChangeText={setEmail}
                value={email}
              />
              <CustomTextInput
                label={'Phone number'}
                placeholder={'Please enter your phone number'}
                onChangeText={setPhoneNum}
                value={phoneNum}
                keyboardType="numeric"
              />
              <CustomTextInput
                label={'Mailing address'}
                placeholder={'Please enter your mailing address'}
                onChangeText={setAddress}
                value={address}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                buttonText="Back"
                onPress={goBack}
                buttonWidth={166}
                reverse={true}
                icon={<LeftArrow />}
              />
              <Button
                buttonText="Next"
                onPress={onNext}
                isLoading={isLoading}
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
