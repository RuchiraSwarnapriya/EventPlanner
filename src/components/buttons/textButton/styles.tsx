import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  buttonText: {
    color: Colors.red,
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '600',
  },
});
