import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

export const saveUserData = async (userId: string, data: any) => {
  await firestore().collection('users').doc(userId).set(data);
};

export const updateUser = async (userId: string, data: any) => {
  await firestore().collection('users').doc(userId).update(data);
};

export const getUser = async (userId: string) => {
  try {
    const userDoc = await firestore().collection('users').doc(userId).get();
    if (userDoc.exists) {
      return userDoc.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const uploadProfileImage = async (imageUri: string) => {
  const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
  const reference = storage().ref(`profile_images/${fileName}`);
  await reference.putFile(imageUri);
  const downloadURL = await reference.getDownloadURL();
  return downloadURL;
};
