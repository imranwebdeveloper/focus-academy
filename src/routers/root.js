import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Protect from "./Protect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <Protect>
      <Home />
    ),
    // </Protect>
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
