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

import {useDispatch, useSelector} from 'react-redux';
import {
  fetchUserData,
  updateUserData,
  uploadImage,
} from '../../redux/actions/user';

import styles from './styles';

const EditProfileScreen = (props: {navigation: any}) => {
  const {navigation} = props;
  const dispatch: any = useDispatch();
  const authData = useSelector(({authorizer}) => authorizer.authData);
  const userData = useSelector(({user}) => user.userData);
  const profileImageURL = useSelector(({user}) => user.userImageData);
  const isUserDataUpdating = useSelector(({user}) => user.isUserDataUpdating);
  const isUserImageUpdating = useSelector(({user}) => user.isImageUploding);

  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [email, setEmail] = useState(userData.email);
  const [phoneNum, setPhoneNum] = useState(userData.phoneNum);
  const [address, setAddress] = useState(userData.address);
  const [imagePath, setImagePath] = useState(userData.profileImageURL);

  const onSave = async () => {
    try {
      const data = {
        firstName,
        lastName,
        email,
        phoneNum,
        address,
        profileImageURL:
          profileImageURL.length === 0 ? imagePath : profileImageURL,
      };
      console.log(data);
      await dispatch(updateUserData(authData.uid, data)).then(
        async () =>
          await dispatch(fetchUserData(authData.uid)).then(() =>
            navigation.goBack(),
          ),
      );
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const onOpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async image => {
      await dispatch(uploadImage(image.path));
      setImagePath(image.path);
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
              <Button
                buttonText="Save"
                onPress={onSave}
                isLoading={isUserDataUpdating || isUserImageUpdating}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;
