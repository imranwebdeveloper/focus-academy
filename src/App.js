import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import { router } from "./routers/root";

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
