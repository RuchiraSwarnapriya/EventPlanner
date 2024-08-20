import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type Props = {
  label: string;
  placeholder: string;
  onChangeText: any;
  value?: any;
  secureTextEntry?: boolean;
  keyboardType?: any;
  showPassword?: boolean;
  errorText?: string;
  iconOne?: any;
  iconTwo?: any;
};

const CustomTextInput: React.FC<Props> = props => {
  const {
    label,
    placeholder,
    onChangeText,
    value,
    secureTextEntry = false,
    keyboardType,
    errorText,
    iconOne,
    iconTwo,
  } = props;

  const [isVisible, setIsVisible] = useState(secureTextEntry);

  const toggleSecureTextVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.mainContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContianer}>
        <View style={styles.subInputContainer}>
          {iconOne && <View style={styles.firstIcon}>{iconOne}</View>}

          <TextInput
            style={[styles.input]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isVisible}
            keyboardType={keyboardType}
          />
        </View>
        {iconTwo && (
          <TouchableOpacity
            style={styles.seconIcon}
            onPress={toggleSecureTextVisibility}>
            {iconTwo}
          </TouchableOpacity>
        )}
      </View>
      {errorText ? (
        <Text style={styles.errorText}>{errorText}</Text>
      ) : (
        <Text style={styles.errorText}>{''}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;
