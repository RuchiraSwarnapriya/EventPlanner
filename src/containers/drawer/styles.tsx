import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  },
  versionText: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    fontSize: 14,
    color: Colors.lightGrey,
    fontWeight: '400',
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
  profileContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.pink,
  },
});
