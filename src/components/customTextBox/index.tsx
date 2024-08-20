import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type Props = {
  label: string;
  value: any;
};

const CustomTextBox: React.FC<Props> = props => {
  const {label, value} = props;
  return (
    <View style={styles.mainContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.textContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default CustomTextBox;
