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
  title: {
    fontSize: 19,
    fontWeight: '600',
    color: Colors.grey,
    textAlign: 'left',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.lightGrey,
    textAlign: 'left',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: Dimensions.get('window').width,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
});
