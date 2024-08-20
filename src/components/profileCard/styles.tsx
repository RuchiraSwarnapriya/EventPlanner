import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.darkGrey,
  },
  email: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.lightGrey,
    width: 200,
  },
  image: {
    height: 44,
    width: 44,
    borderRadius: 44,
    borderWidth: 1,
    marginHorizontal: 20,
    borderColor: Colors.pink,
    backgroundColor: Colors.pink,
  },
  initialsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
