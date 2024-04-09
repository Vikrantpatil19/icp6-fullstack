import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./views/Home/Home";
import Booking from "./views/Booking/Booking";
import Destination from "./views/Destination/Destination";
import Login from "./views/Login/Login";
import Review from "./views/Review/Review";
import TimeSlot from "./views/TimeSlot/TimeSlot";
import Dashboard from "./views/Dashboard/Dashboard";
import Contact from "./views/Contact/Contact";
import Payment from "./views/Payment/Payment";
<<<<<<< HEAD
=======
import Admin from "./views/Admin/Admin";
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/contact",
      element: <Contact/>
    },

    {
<<<<<<< HEAD
      path: "/destination",
=======
      path: "/destination/:id",
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
      element: <Destination/>
    },

    {
      path: "/review",
      element: <Review/>
    },

    {
<<<<<<< HEAD
      path: "/booking/:id",
=======
      path: "/booking",
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
      element: <Booking/>
    },

    {
      path: "/timeslot",
      element: <TimeSlot/>
    },

    {
      path: "/payment",
      element: <Payment/>
    },

    {
      path: "/login",
      element: <Login/>
    },

    {
      path: "/dashboard",
      element: <Dashboard/>
    },

<<<<<<< HEAD
=======
    {
      path: "/badmin",
      element: <Admin/>
    }

>>>>>>> 857b75833836ebca55ecac60497d3610178bc078

  ])

  return (
    <>

    {/* === ROUTING HERE  === */}
    <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
