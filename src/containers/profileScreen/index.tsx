import {ScrollView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomTextBox from '../../components/customTextBox';
import CircleImageViewer from '../../components/circleImageViewer';
import Button from '../../components/buttons/solidButton';
import {EDIT_PROFILE_SCREEN} from '../../navigation/routePaths';
import {useSelector} from 'react-redux';

const ProfileScreen = (props: {navigation: any}) => {
  const {navigation} = props;
  const userData = useSelector(({user}) => user.userData);
  const profileImageURL = useSelector(({user}) => user.userImageData);

  const onEdit = () => {
    navigation.navigate(EDIT_PROFILE_SCREEN);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <CircleImageViewer imageSource={profileImageURL} />
        </View>
        <CustomTextBox label="First name" value={userData.firstName} />
        <CustomTextBox label="Last name" value={userData.lastName} />
        <CustomTextBox label="Email" value={userData.email} />
        <CustomTextBox label="Phone number" value={userData.phoneNum} />
        <CustomTextBox label="Mailing address" value={userData.address} />
      </ScrollView>
      <Button buttonText="Edit" onPress={onEdit} />
    </View>
  );
};

export default ProfileScreen;
