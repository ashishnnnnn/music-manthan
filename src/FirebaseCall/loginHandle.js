import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

export const loginHandle = async ({ email, password, handleaddtoast }) => {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(email)) {
    handleaddtoast({
      message: "Enter Valid Email",
      type: "alert-dang",
    });
    return;
  }
  if (password.length < 6) {
    handleaddtoast({
      message: "Password Length Should be greater than 5",
      type: "alert-dang",
    });
    return;
  }
  let response = await signInWithEmailAndPassword(auth, email, password);
  localStorage.setItem("quiz-email", response.user.email);
  localStorage.setItem("quiz-token", response.user.uid);
  return "All Good";
};
