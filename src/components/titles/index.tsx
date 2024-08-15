import {View, Text} from 'react-native';
import React from 'react';

import styles from './styles';

type Props = {
  title: string;
  subTitle: string;
};

const Titles: React.FC<Props> = props => {
  const {title, subTitle} = props;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default Titles;
