import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore';

const addHistory = async (userID, searchTerm) => {
  if (!userID) {
    throw new Error('No userId provided for addSearchToHistory');
  }
  const db = getFirestore();
  const searchHistoryRef = doc(db, 'searchHis', userID);

  try {
    await updateDoc(searchHistoryRef, {
      histories: arrayUnion(searchTerm)
    });

    console.log('Search added to history:', searchTerm);
  } catch (error) {
    console.error('Error adding search to history:', error);
  }
};

export { addHistory };