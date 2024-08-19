import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ProfileCard from '../../components/profileCard';
import TextButton from '../../components/buttons/textButton';

import {POSTS_SCREEN} from '../../navigation/routePaths';

import {fetchImages} from '../../redux/actions/images';
import {fetchPosts} from '../../redux/actions/posts';
import {fetchUsers} from '../../redux/actions/users';
import {fetchUserData} from '../../redux/actions/user';

import {Images, Users} from '../../services/constants/types/home';

import {Colors} from '../../assets/colors';
import CommentIcon from '../../assets/icons/comments.svg';
import RedArrowIcon from '../../assets/icons/redArrow.svg';

import styles from './styles';

const HomeScreen = (props: {navigation: any}) => {
  const {navigation} = props;
  const dispatch: any = useDispatch();
  const imagesLoading = useSelector(({images}) => images.isFetching);
  const usersLoading = useSelector(({users}) => users.isFetching);
  const postsLoading = useSelector(({posts}) => posts.isFetching);

  const imagesData = useSelector(({images}) => images.imagesData);
  const usersData = useSelector(({users}) => users.usersData);
  const postsData = useSelector(({posts}) => posts.postsData);
  const authData = useSelector(({authorizer}) => authorizer.authData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchImages());
        await dispatch(fetchUsers());
        await dispatch(fetchPosts());
        await dispatch(fetchUserData(authData.uid));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [authData.uid, dispatch]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  const onPost = () => {
    navigation.navigate(POSTS_SCREEN);
  };

  return imagesLoading || usersLoading || postsLoading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={20} color={Colors.lightGrey} />
    </View>
  ) : (
    <ScrollView>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}>
          {imagesData.map((image: Images, index: any) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{uri: image.url}} style={styles.image} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.paginationContainer}>
          <Text style={styles.paginationText}>
            {currentIndex + 1}/{imagesData.length}
          </Text>
        </View>
      </View>
      <View style={styles.eventContainer}>
        <Text style={styles.eventName}>Event Name</Text>
        <Text style={styles.eventLocation}>
          56 O'Mally Road, ST LEONARDS, 2065, NSW
        </Text>
      </View>
      <View style={styles.orgContainer}>
        <Text style={styles.orgTitle}>Organizers</Text>
        {usersData.map((user: Users, index: number) => (
          <View key={index} style={styles.profileContainer}>
            <ProfileCard name={user.name} email={user.email} imageUri={''} />
            <View style={styles.commentContainer}>
              <CommentIcon />
            </View>
          </View>
        ))}
      </View>
      <View style={styles.photoContainer}>
        <View style={styles.photoTitleContianer}>
          <Text style={styles.orgTitle}>Photos</Text>
          <TextButton
            buttonText="All Photos"
            icon={<RedArrowIcon />}
            onPress={() => console.log('Press')}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}>
          {imagesData &&
            imagesData.map((image: Images, index: any) => (
              <View key={index} style={styles.photoMainContainer}>
                <Image source={{uri: image.url}} style={styles.photo} />
                <View style={styles.photoDetailsContainer}>
                  <Text style={styles.photoTitle}>{image.title}</Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.postCountContainer} onPress={onPost}>
        <Text style={styles.postCount}>{postsData.length}</Text>
        <Text style={styles.postCountName}>Post count</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeScreen;
