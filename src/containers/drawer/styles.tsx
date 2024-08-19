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
});
