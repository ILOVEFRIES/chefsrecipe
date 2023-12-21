import { getFirestore, doc, setDoc } from 'firebase/firestore';

const initialHistory = async (userId) => {
  console.log('Received user ID:', userId);
  const db = getFirestore();

  const initialData = {
    userID: userId,
    histories: []
  };

  try {
    await setDoc(doc(db, 'searchHis', userId), initialData);
    console.log('Initial search history added for user:', userId);
  } catch (error) {
    console.error('Error adding initial search history:', error);
  }
};

export { initialHistory };