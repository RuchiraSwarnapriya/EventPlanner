import React from 'react';
import {Image, View} from 'react-native';

import RedCamIcon from '../../assets/icons/redCam.svg';
import WhiteCamIcon from '../../assets/icons/whiteCam.svg';

import styles from './styles';

type Props = {
  imageSource: string;
};

const CircleImageViewer: React.FC<Props> = props => {
  const {imageSource} = props;

  return (
    <View style={styles.circle}>
      {imageSource && (
        <Image source={{uri: imageSource}} style={styles.image} />
      )}
      <View style={styles.cameraIcon}>
        {imageSource ? <WhiteCamIcon /> : <RedCamIcon />}
      </View>
    </View>
  );
};

export default CircleImageViewer;
