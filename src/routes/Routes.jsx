import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home/Home";
import Login from "../page/authentication/Login";
import SingUp from "../page/authentication/SingUp";
import Products from "../page/Products/Products";
import Carts from "../page/Carts/Carts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },{
        path:"/carts",
        element:<Carts/>
      }
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