import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
  inputContianer: {
    width: 343,
    height: 48,
    backgroundColor: Colors.pink,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  subInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 13,
    fontWeight: '500',
    color: Colors.darkGrey,
  },
  input: {
    width: 'auto',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.grey,
    paddingLeft: 10,
  },
  firstIcon: {
    marginLeft: 10,
  },
  seconIcon: {
    marginRight: 10,
  },
});
