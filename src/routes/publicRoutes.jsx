import { Navigate, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
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
import AllHotels from "../pages/Dashboard/Hotels/AllHotels";
import ViewHotelDetails from "../pages/Dashboard/Hotels/ViewHotelDetails";
import AllPackages from "../pages/Dashboard/Packages/AllPackages";
import AddPackages from "../pages/Dashboard/Packages/AddPackages";
import HotelDetails from "../pages/HotelDetails/HotelDetails";
import Orders from "../pages/Dashboard/Orders/Orders";
import OrderDetails from "../pages/Dashboard/Orders/OrderDetails";
import Transaction from "../pages/Dashboard/Transaction/Transaction";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";


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
        {path: 'hotels/:id', element: <HotelDetails/> },

      ]
    },
    //Dashboard
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
          element: <Dashboard />
         
        },
        {
          path: 'profile',
          element: <UserProfile/>
        },
        //Profile
        {
          path: 'profile/additionalinfo',
          element: <AdditionalInfo/>
        },
        //Divisions
        {
          path: 'divisions',
          element: <Divisions/>
        },
        {
          path: 'divisions/:id',
          element: <EditDivision/>
        },
        //Places
        {
          path: 'places',
          element: <Places/>
        },
        {path: 'places/addplaces', element: <AddPlaces/> },
        {path: 'places/edit/:id', element: <EditPlace/> },
        //Agencies
        {path: 'agencies', element: <AllAgencies/> },
        {path: 'agencies/:id', element: <ViewAgencyDetails/> },
        //hotels
        {path: 'hotels', element: <AllHotels/> },
        {path: 'hotels/:id', element: <ViewHotelDetails/> },
        //Packages
        {path: 'packages', element: <AllPackages/>},
        {path: 'packages/:id', element: <AddPackages/>},
        //Orders
        {path: 'orders', element: <Orders/>},
        {path: 'orders/:id', element: <OrderDetails/>},
        //Transaction
        {path: 'transaction', element: <Transaction/>},


        


      ]
    }
  ]);