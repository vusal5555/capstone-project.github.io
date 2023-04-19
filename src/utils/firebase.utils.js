import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';

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
