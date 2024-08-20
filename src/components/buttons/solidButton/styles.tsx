import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    width: 342,
    height: 44,
    backgroundColor: Colors.red,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  buttonText: {
    color: Colors.white,
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  reversebuttonText: {
    color: Colors.black,
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '600',
  },
});
