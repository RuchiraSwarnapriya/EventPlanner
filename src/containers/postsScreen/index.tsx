import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchComments} from '../../redux/actions/commets';

import {Posts} from '../../services/constants/types/posts';
import {Comments} from '../../services/constants/types/comments';

import DownArrow from '../../assets/icons/downArrow.svg';
import UpArrow from '../../assets/icons/upArrow.svg';

import {Colors} from '../../assets/colors';

import styles from './styles';

const PostsScreen = () => {
  const dispatch: any = useDispatch();
  const commentsLoading = useSelector(({comments}) => comments.isFetching);

  const postsData = useSelector(({posts}) => posts.postsData);
  const commentsData = useSelector(({comments}) => comments.commentsData);

  // State to track the expanded state of comments for each post
  const [expandedPost, setExpandedPost] = useState(null);

  const getCommentsForPost = (postId: number) => {
    return commentsData.filter((comment: any) => comment.postId === postId);
  };

  // Toggle the expanded state of comments for a specific post
  const toggleExpand = (postId: any) => {
    setExpandedPost(prevState => (prevState === postId ? null : postId));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchComments());
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return commentsLoading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={20} color={Colors.lightGrey} />
    </View>
  ) : (
    <View style={styles.mainContainer}>
      <ScrollView>
        {postsData.map((post: Posts) => (
          <View key={post.id} style={styles.postContainer}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text>{post.body}</Text>
            <TouchableOpacity
              onPress={() => toggleExpand(post.id)}
              style={styles.arrowButton}>
              <View style={styles.commentButtonContainer}>
                <Text style={styles.commentsButtonText}>
                  {getCommentsForPost(post.id).length} comments{' '}
                </Text>
                <View style={styles.expandIconContainer}>
                  {expandedPost === post.id ? <UpArrow /> : <DownArrow />}
                </View>
              </View>
            </TouchableOpacity>
            {expandedPost === post.id && (
              <View style={styles.commentsContainer}>
                {getCommentsForPost(post.id).map((comment: Comments) => (
                  <View key={comment.id} style={styles.commentContainer}>
                    <Text style={styles.commentAuthor}>{comment.name}</Text>
                    <Text style={styles.commentBody}>{comment.body}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default PostsScreen;
