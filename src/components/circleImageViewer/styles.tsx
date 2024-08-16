import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  circle: {
    height: 117,
    width: 117,
    borderRadius: 117,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.pink,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    height: 117,
    width: 117,
    borderRadius: 117,
    borderWidth: 1,
    borderColor: Colors.pink,
  },
  cameraIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    width: 117,
    height: 117,
  },
});
