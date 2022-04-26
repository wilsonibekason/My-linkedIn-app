import db, { auth, firebaseApp, provider, storage } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { SET_LOADING_STATUS, SET_USER } from "./actionType";
import { async } from "@firebase/util";
import { getStorage } from "firebase/storage";

export const setUser = (result) => ({
  type: SET_USER,
  user: result,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

const storages = getStorage(firebaseApp);

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(result.user + result.token);

        console.log(result);
        dispatch(setUser(result.user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function postArticleAPI(result) {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (result.image !== "") {
      const upload = storages
        .ref(`images/${result.image.name}`)
        .put(result.image);
      upload.on(
        "state changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress} %`);
          if (snapshot.state === "RUNNNG") {
            console.log(`Progress: ${progress} %`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: result.user.email,
              title: result.user.displayName,
              date: result.timestamp,
              image: result.user.photoURL,
            },
            video: result.video,
            sharedImg: downloadURL,
            comments: 0,
            description: result.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (result.video) {
      db.collection("articles").add({
        actor: {
          description: result.user.email,
          title: result.user.displayName,
          date: result.timestamp,
          image: result.user.photoURL,
        },
        video: result.video,
        sharedImg: "",
        comments: 0,
        description: result.description,
      });
      dispatch(setLoading(false));
    }
  };
}
