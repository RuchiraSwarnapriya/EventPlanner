import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.pink,
    paddingBottom: 20,
  },
  image: {
    height: 44,
    width: 44,
    borderRadius: 44,
    borderWidth: 1,
    marginHorizontal: 20,
    borderColor: Colors.pink,
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
