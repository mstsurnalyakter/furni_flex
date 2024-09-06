import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home/Home";
import Login from "../page/authentication/Login";
import SingUp from "../page/authentication/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //     path:"/login",
      //     element:<Login/>
      // },
      // {
      //     path:"/signup",
      //     element:<SingUp/>
      // }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SingUp />,
  },
]);


export default router;