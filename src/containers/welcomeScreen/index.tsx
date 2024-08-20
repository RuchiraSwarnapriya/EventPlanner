import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ImagePicker from 'react-native-image-crop-picker';

import {uploadImage} from '../../redux/actions/user';

import Button from '../../components/buttons/solidButton';
import CircleImageViewer from '../../components/circleImageViewer';
import Loader from '../../components/loader';
import Titles from '../../components/titles';

import {PERSONAL_INFO_SCREEN} from '../../navigation/routePaths';

import RightArrow from '../../assets/icons/rightArrow.svg';
import RedCamIcon from '../../assets/icons/redCam.svg';
import WhiteCamIcon from '../../assets/icons/whiteCam.svg';

import styles from './styles';

const WelcomScreen = (props: {navigation: any}) => {
  const {navigation} = props;
  const dispatch: any = useDispatch();
  const isImageUploding = useSelector(({user}) => user.isImageUploding);
  const [isDisabled, setIsDisabled] = useState(true);

  const [imagePath, setImagePath] = useState('');

  const onNext = async () => {
    await dispatch(uploadImage(imagePath)).then(() =>
      navigation.navigate(PERSONAL_INFO_SCREEN),
    );
  };

  const onOpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImagePath(image.path);
      setIsDisabled(false);
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Titles
        title="Welcome"
        subTitle="You are logged in for the first time and can upload a profile photo"
      />
      <TouchableOpacity style={styles.camera} onPress={onOpenCamera}>
        <CircleImageViewer
          imageSource={imagePath}
          icon={imagePath ? <WhiteCamIcon /> : <RedCamIcon />}
        />
      </TouchableOpacity>
      <View style={styles.buttonContiner}>
        <Button
          buttonText="Next"
          onPress={onNext}
          icon={<RightArrow />}
          disabled={isDisabled}
        />
      </View>
      {isImageUploding && <Loader />}
    </View>
  );
};

export default WelcomScreen;
