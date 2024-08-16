import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import Button from '../../components/buttons/solidButton';
import CircleImageViewer from '../../components/circleImageViewer';
import Titles from '../../components/titles';

import {PERSONAL_INFO_SCREEN} from '../../navigation/routePaths';

import styles from './styles';

const WelcomScreen = (props: {navigation: any}) => {
  const {navigation} = props;

  const [imagePath, setImagePath] = useState('');
  const onNext = () => {
    navigation.navigate(PERSONAL_INFO_SCREEN);
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
    <View style={styles.mainContainer}>
      <Titles
        title="Welcome"
        subTitle="You are logged in for the first time and can upload a profile photo"
      />
      <TouchableOpacity style={styles.camera} onPress={onOpenCamera}>
        <CircleImageViewer imageSource={imagePath} />
      </TouchableOpacity>
      <View style={styles.buttonContiner}>
        <Button buttonText="Next" onPress={onNext} />
      </View>
    </View>
  );
};

export default WelcomScreen;
