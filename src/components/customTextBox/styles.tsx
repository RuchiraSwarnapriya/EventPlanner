import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    marginTop: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 13,
    fontWeight: '500',
    color: Colors.darkGrey,
  },
  textContainer: {
    width: 343,
    height: 48,
    backgroundColor: Colors.pink,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  value: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 20,
    color: Colors.darkGrey,
  },
});
