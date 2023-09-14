import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PlanTour from "../pages/PlanTour/PlanTour";
import PlaceDetails from "../pages/PlaceDetails/PlaceDetails";
import Experience from "../pages/Experience/Experience";
import PackageDetails from "../pages/Packages/PackageDetails";
import Packages from "../pages/Packages/Packages";
import Hotels from "../pages/Hotels/Hotels";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {path: '/', element: <Home/> },
        {path: '/signin', element: <SignIn/> },
        {path: '/signup', element: <SignUp/> },
        {path: '/plantour', element: <PlanTour/> },
        {path: '/plantour/:id', element: <PlaceDetails/> },
        {path: '/experience', element: <Experience/> },
        {path: '/packages', element: <Packages/> },
        {path: '/package/:id', element: <PackageDetails/> },
        {path: '/hotels', element: <Hotels/> },
      ]
    },
  ]);