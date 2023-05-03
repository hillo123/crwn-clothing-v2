import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAw_5jwE1W60FH-7Qf2Aa0lO9Kt0I-XCmM",
    authDomain: "crwn-clothing-db-f0487.firebaseapp.com",
    projectId: "crwn-clothing-db-f0487",
    storageBucket: "crwn-clothing-db-f0487.appspot.com",
    messagingSenderId: "687668355385",
    appId: "1:687668355385:web:0e26bdf6e6f908fcb3c8e8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);