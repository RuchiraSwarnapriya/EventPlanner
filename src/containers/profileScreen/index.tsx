import {ScrollView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomTextBox from '../../components/customTextBox';
import CircleImageViewer from '../../components/circleImageViewer';
import Button from '../../components/buttons/solidButton';
import {EDIT_PROFILE_SCREEN} from '../../navigation/routePaths';

const ProfileScreen = (props: {navigation: any}) => {
  const {navigation} = props;
  const imagePath = '';

  const onEdit = () => {
    navigation.navigate(EDIT_PROFILE_SCREEN);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <CircleImageViewer imageSource={imagePath} />
        </View>
        <CustomTextBox label="First name" value={'name'} />
        <CustomTextBox label="Last name" value={'email'} />
        <CustomTextBox label="Email" value={'email'} />
        <CustomTextBox label="Phone number" value={'email'} />
        <CustomTextBox label="Mailing address" value={'email'} />
      </ScrollView>
      <Button buttonText="Edit" onPress={onEdit} noIcon={true} />
    </View>
  );
};

export default ProfileScreen;
