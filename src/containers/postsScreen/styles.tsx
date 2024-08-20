import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

export default StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: Colors.white,
    padding: 10,
  },
  postContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.pink,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  postTitle: {
    color: Colors.grey,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  commentsContainer: {
    marginTop: 10,
    paddingLeft: 10,
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentContainer: {
    marginBottom: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.pink,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.grey,
    marginBottom: 5,
  },
  commentBody: {
    fontSize: 12,
    color: Colors.lightGrey,
    fontWeight: '400',
  },
  arrowButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  commentButtonContainer: {
    flexDirection: 'row',
  },
  commentsButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.grey,
  },
  expandIconContainer: {
    marginTop: 3,
  },
});
