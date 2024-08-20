import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 100,
  },
  inputContainer: {
    marginTop: 25,
  },
  buttonContainer: {
    marginTop: 75,
  },
  textButton: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 10,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
