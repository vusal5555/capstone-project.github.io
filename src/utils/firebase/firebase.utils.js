import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeu80Hx8rMwIoFe0svF8LIM32zrQVsEMg",
  authDomain: "my-crown-project.firebaseapp.com",
  projectId: "my-crown-project",
  storageBucket: "my-crown-project.appspot.com",
  messagingSenderId: "472275385797",
  appId: "1:472275385797:web:09583b612fb49689c21fac",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const authUser = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(authUser, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDate,
      });
    } catch (error) {
      console.log("there was an error creating user:", error.message);
    }
  }

  return userDocRef;
};
