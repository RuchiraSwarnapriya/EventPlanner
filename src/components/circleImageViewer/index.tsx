import React from 'react';
import {Image, View} from 'react-native';

import styles from './styles';

type Props = {
  imageSource: string;
  icon?: any;
};

const CircleImageViewer: React.FC<Props> = props => {
  const {imageSource, icon} = props;

  return (
    <View style={styles.circle}>
      {imageSource && (
        <>
          <Image source={{uri: imageSource}} style={styles.image} />
        </>
      )}
      <View style={styles.cameraIcon}>{icon}</View>
    </View>
  );
};

export default CircleImageViewer;
