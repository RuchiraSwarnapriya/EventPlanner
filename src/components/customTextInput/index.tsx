import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';

import MailIcon from '../../assets/icons/email.svg';
import PasswordIcon from '../../assets/icons/lock.svg';
import ShowPasswordIcon from '../../assets/icons/eye.svg';

import styles from './styles';

type Props = {
  label: string;
  placeholder: string;
  onChangeText: any;
  value?: any;
  secureTextEntry?: boolean;
  keyboardType?: any;
  mailInput?: boolean;
  doubleIcons?: boolean;
  showPassword?: boolean;
};

const CustomTextInput: React.FC<Props> = props => {
  const {
    label,
    placeholder,
    onChangeText,
    value,
    secureTextEntry = false,
    keyboardType,
    mailInput,
    doubleIcons,
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
          {mailInput && (
            <View style={styles.firstIcon}>
              <MailIcon />
            </View>
          )}
          {secureTextEntry && (
            <View style={styles.firstIcon}>
              <PasswordIcon />
            </View>
          )}
          <TextInput
            style={[styles.input]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isVisible}
            keyboardType={keyboardType}
          />
        </View>
        {doubleIcons && (
          <TouchableOpacity
            style={styles.seconIcon}
            onPress={toggleSecureTextVisibility}>
            <ShowPasswordIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;
