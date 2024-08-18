import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 220,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  paginationText: {
    color: Colors.black,
    fontSize: 12,
  },
  eventContainer: {
    paddingHorizontal: 10,
  },
  eventName: {
    color: Colors.grey,
    fontSize: 26,
    fontWeight: '600',
    marginTop: 10,
  },
  eventLocation: {
    color: Colors.lightGrey,
    fontSize: 14,
    fontWeight: '400',
  },
  orgContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.pink,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  orgTitle: {
    color: Colors.grey,
    fontSize: 22,
    fontWeight: '600',
    marginTop: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentContainer: {
    marginTop: 20,
    marginRight: 10,
  },
  photoContainer: {
    borderBottomWidth: 1,
    borderColor: Colors.pink,
    paddingHorizontal: 10,
  },
  photoTitleContianer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  photoMainContainer: {
    width: 244,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.pink,
  },
  photo: {
    width: 244,
    height: 130,
  },
  photoDetailsContainer: {
    marginHorizontal: 10,
  },
  photoTitle: {
    color: Colors.grey,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  postCountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.pink,
    paddingBottom: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  postCount: {
    color: Colors.red,
    fontSize: 19,
    fontWeight: '600',
  },
  postCountName: {
    color: Colors.lightGrey,
    fontSize: 13,
    fontWeight: '500',
  },
});
