import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import RightArrow from '../../../assets/icons/rightArrow.svg';
import LeftArrow from '../../../assets/icons/leftArrow.svg';

import styles from './styles';

type Props = {
  buttonText: string;
  onPress: () => void;
  reverse?: boolean;
};

const Button: React.FC<Props> = props => {
  const {buttonText, onPress, reverse} = props;
  return (
    <TouchableOpacity style={[styles.mainContainer]} onPress={onPress}>
      {reverse ? (
        <>
          <LeftArrow />
          <Text style={[styles.reversebuttonText]}>{buttonText}</Text>
        </>
      ) : (
        <>
          <Text style={styles.buttonText}>{buttonText}</Text>
          <RightArrow />
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
