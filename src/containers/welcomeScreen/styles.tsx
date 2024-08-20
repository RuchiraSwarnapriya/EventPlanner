import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  camera: {
    marginTop: 25,
  },
  buttonContiner: {
    position: 'absolute',
    bottom: 25,
  },
});
