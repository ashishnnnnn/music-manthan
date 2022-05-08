import { UserDataProvider } from "../UserData";

export const ClusteredContext = ({ children }) => {
  return <UserDataProvider>{children}</UserDataProvider>;
};
