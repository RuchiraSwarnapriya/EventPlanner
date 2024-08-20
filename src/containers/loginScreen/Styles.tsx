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
});
