import { UserDataProvider } from "../UserData";
import { ToastProvider } from "../ToastContext";

export const ClusteredContext = ({ children }) => {
  return (
    <ToastProvider>
      <UserDataProvider>{children}</UserDataProvider>
    </ToastProvider>
  );
};
