import { createContext, useContext, useReducer } from "react";

import { UserDataReducer } from "../Reducer/UserDataReducer";

const UserData = createContext(null);

const useUserDataContext = () => useContext(UserData);

const initial_user_state = {
  score: 0,
  questions: [],
  index: 0,
};

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useReducer(
    UserDataReducer,
    initial_user_state
  );
  return (
    <UserData.Provider value={{ userData, setUserData }}>
      {children}
    </UserData.Provider>
  );
};

export { useUserDataContext, UserDataProvider };
