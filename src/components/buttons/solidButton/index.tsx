import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import RightArrow from '../../../assets/icons/rightArrow.svg';
import LeftArrow from '../../../assets/icons/leftArrow.svg';

import styles from './styles';
import {Colors} from '../../../assets/colors';

type Props = {
  buttonText: string;
  onPress: () => void;
  reverse?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  buttonWidth?: number;
};

const Button: React.FC<Props> = props => {
  const {buttonText, onPress, reverse, isLoading, disabled, buttonWidth} =
    props;
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: disabled
            ? Colors.grey
            : reverse
            ? Colors.pink
            : Colors.red,
          width: buttonWidth ? buttonWidth : 342,
        },
      ]}
      onPress={onPress}
      disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator size={20} color={Colors.white} />
      ) : reverse ? (
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
