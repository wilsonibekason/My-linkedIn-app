import { auth, provider } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});
// export function signInAPI() {
//   return (dispatch) => {
//     auth
//       .signInWithPopup(provider)
//       .then((payload) => {
//         console.log(payload);
//       })
//       .catch((error) =>
//         alert("the error occured in actions folder " + error.message)
//       );
//   };
// }

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user + token);
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
