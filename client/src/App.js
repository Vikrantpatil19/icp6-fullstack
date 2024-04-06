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
      path: "/destination",
      element: <Destination/>
    },

    {
      path: "/review",
      element: <Review/>
    },

    {
      path: "/booking/:id",
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


  ])

  return (
    <>

    {/* === ROUTING HERE  === */}
    <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
