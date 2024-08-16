import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import Button from '../../components/buttons/solidButton';
import CircleImageViewer from '../../components/circleImageViewer';
import CustomTextInput from '../../components/customTextInput';

import WhiteCamIcon from '../../assets/icons/whiteCam.svg';

import styles from './styles';

const EditProfileScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('');
  const [imagePath, setImagePath] = useState('');

  const onSave = () => {
    console.log('saved');
  };

  const onOpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImagePath(image.path);
      console.log(image);
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.mainContainer}>
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={onOpenCamera}>
              <CircleImageViewer
                imageSource={imagePath}
                icon={<WhiteCamIcon />}
              />
            </TouchableOpacity>
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
              <Button buttonText="Save" onPress={onSave} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;
