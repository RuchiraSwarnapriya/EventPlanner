import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.grey,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.lightGrey,
  },
});
