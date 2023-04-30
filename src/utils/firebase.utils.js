import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCpfRVDfx2pxTx0Kaedjujz54LSabVP5fY',
  authDomain: 'clothing-project-db-69f4d.firebaseapp.com',
  projectId: 'clothing-project-db-69f4d',
  storageBucket: 'clothing-project-db-69f4d.appspot.com',
  messagingSenderId: '862555277612',
  appId: '1:862555277612:web:e0edf45a74b998088f0489',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionName = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionName, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  batch.commit();
};

export const getCollectionAndDocuments = async () => {
  const collectionEl = collection(db, 'categories');
  const q = query(collectionEl);
  const queryRef = await getDocs(q);

  const categoryMap = queryRef.docs.reduce((acc, category) => {
    const { title, items } = category.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDataBase = async (userAuth, additionalInfo = {}) => {
  const userDb = doc(db, 'users', userAuth.uid);

  const getUserDoc = await getDoc(userDb);

  if (!getUserDoc.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userDb, {
        name: userAuth.displayName,
        email: userAuth.email,
        created: createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return getUserDoc;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);
