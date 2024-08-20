import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  imageContainer: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 25,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
});
