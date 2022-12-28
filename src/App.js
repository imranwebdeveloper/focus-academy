import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import UsersContextProvider from "./contexts/UsersContextProvider";
import { router } from "./routers/root";

const App = () => {
  return (
    <UsersContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </UsersContextProvider>
  );
};

export default App;
