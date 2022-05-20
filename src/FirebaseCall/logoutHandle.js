import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

export const logoutHandle = async () => {
  await signOut(auth);
  localStorage.removeItem("quiz-email");
  localStorage.removeItem("quiz-token");
  return "All Good";
};
