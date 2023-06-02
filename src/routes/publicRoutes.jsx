import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {path: '/', element: <Home/> },
        {path: '/signin', element: <SignIn/> },
        {path: '/signup', element: <SignUp/> },
      ]
    },
  ]);