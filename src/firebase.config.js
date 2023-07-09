import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAtmf_SHrBocMGEWTP6H_1hmq0QUw1apXw",
  authDomain: "trip-trekker-1b797.firebaseapp.com",
  projectId: "trip-trekker-1b797",
  storageBucket: "trip-trekker-1b797.appspot.com",
  messagingSenderId: "476230235311",
  appId: "1:476230235311:web:fede3dfcaf93b4df50905a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googlrProvider = new GoogleAuthProvider();
export const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
export const signinUser=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

export const googleSignin=()=>{
    return signInWithPopup(auth, googlrProvider)
}