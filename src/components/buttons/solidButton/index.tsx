/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import {Colors} from '../../../assets/colors';

import styles from './styles';

type Props = {
  buttonText: string;
  onPress: () => void;
  reverse?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  buttonWidth?: number;
  icon?: any;
};

const Button: React.FC<Props> = props => {
  const {buttonText, onPress, reverse, isLoading, disabled, buttonWidth, icon} =
    props;
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        {
          backgroundColor: disabled
            ? Colors.pink
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
          {icon}
          <Text style={[styles.reversebuttonText]}>{buttonText}</Text>
        </>
      ) : (
        <>
          <Text style={styles.buttonText}>{buttonText}</Text>
          {icon}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
