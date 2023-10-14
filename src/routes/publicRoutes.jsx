import { Navigate, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import Divisions from "../pages/Dashboard/Division/Divisions";
import EditDivision from "../pages/Dashboard/Division/EditDivision";
import AddPlaces from "../pages/Dashboard/Places/AddPlaces";
import EditPlace from "../pages/Dashboard/Places/EditPlace";
import Places from "../pages/Dashboard/Places/Places";
import UserProfile from "../pages/Dashboard/Profile/UserProfile";
import Experience from "../pages/Experience/Experience";
import Home from "../pages/Home/Home";
import Hotels from "../pages/Hotels/Hotels";
import PackageDetails from "../pages/Packages/PackageDetails";
import Packages from "../pages/Packages/Packages";
import PlaceDetails from "../pages/PlaceDetails/PlaceDetails";
import DivisionsPage from "../pages/PlanTour/DivisionsPage";
import PlanTour from "../pages/PlanTour/PlanTour";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AdditionalInfo from "../pages/Dashboard/Profile/AdditionalInfo";
import AllAgencies from "../pages/Dashboard/Agencies/AllAgencies";
import ViewAgencyDetails from "../pages/Dashboard/Agencies/ViewAgencyDetails";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {path: '/', element: <Home/> },
        {path: '/signin', element: <SignIn/> },
        {path: '/signup', element: <SignUp/> },
        {path: '/plantour', element: <PlanTour/> },
        {path: '/plantour/:id', element: <DivisionsPage/> },
        {path: '/places/:id', element: <PlaceDetails/> },
        {path: '/experience', element: <Experience/> },
        {path: '/packages', element: <Packages/> },
        {path: '/package/:id', element: <PackageDetails/> },
        {path: '/hotels', element: <Hotels/> },
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout/>,
      children: [
        {
          path: '',
          element: <Navigate to='/dashboard/home'/>
        },
        {
          path: 'home',
          element: <Dashboard/>
        },
        {
          path: 'profile',
          element: <UserProfile/>
        },
        {
          path: 'profile/additionalinfo',
          element: <AdditionalInfo/>
        },
        {
          path: 'divisions',
          element: <Divisions/>
        },
        {
          path: 'divisions/:id',
          element: <EditDivision/>
        },
        {
          path: 'places',
          element: <Places/>
        },
        {path: 'places/addplaces', element: <AddPlaces/> },
        {path: 'places/edit/:id', element: <EditPlace/> },
        {path: 'agencies', element: <AllAgencies/> },
        {path: 'agencies/:id', element: <ViewAgencyDetails/> },

      ]
    }
  ]);