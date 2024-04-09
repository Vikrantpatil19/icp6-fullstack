import React from 'react'
import './dashboard.css'
import Footer from '../../components/Footer/Footer.js'
import user from './../Dashboard/profile.png';
import airline1 from './../Dashboard/airline1.png';
import airline2 from './../Dashboard/airline2.png';
import airline3 from './../Dashboard/airline3.png';
import airline4 from './../Dashboard/airline4.png';
import Arrow from './../Dashboard/arrow.png'
import Navbar from '../../components/Navbar/Navbar.js';

function Dashboard() {

  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("email");
  const profile = localStorage.getItem("userPhoto");


  //Random Phone Number
  function generateRandomMobileNumber() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  
    const formattedNumber = `+91 ${randomNumber.toString().substring(0, 3)} ${randomNumber.toString().substring(3, 6)} ${randomNumber.toString().substring(6)}`;
  
    return formattedNumber;
  }

  const randomMobileNumber = generateRandomMobileNumber();

  // Random birth date

  function generateRandomBirthdate() {
    
    const currentYear = new Date().getFullYear();
    const minBirthYear = currentYear - 99;
    const maxBirthYear = currentYear - 10;
    const randomBirthYear = Math.floor(Math.random() * (maxBirthYear - minBirthYear + 1)) + minBirthYear;
  
    
    const randomBirthMonth = Math.floor(Math.random() * 12) + 1;
  
    
    const daysInMonth = new Date(randomBirthYear, randomBirthMonth, 0).getDate();
    const randomBirthDay = Math.floor(Math.random() * daysInMonth) + 1;
  
    
    const formattedBirthdate = `${randomBirthMonth.toString().padStart(2, '0')}/${randomBirthDay.toString().padStart(2, '0')}/${randomBirthYear}`;
  
    return formattedBirthdate;
  }
  
  const randomBirthdate = generateRandomBirthdate();

  return (

    <div>
      <Navbar/>
      <div className='user-dashboard mt-5'>
        <div className='empty mt-3'>

        </div>
   <div className='d-flex justify-content-center '>
   <img src={profile} className='profile rounded-circle ' />
   </div>
        <p className='username'>Hii !! {name}..</p>
        <p className='user-detail' >
          <table>
            <tr> <td> Name : <span className='span'>{name} </span></td></tr>
            <tr><td>Location : <span className='span'>India</span> </td></tr>
            <tr>Email : <span className='span'> {email}</span> </tr>
            <tr>Mobile : <span className='span'>{randomMobileNumber}</span> </tr>
            <tr>DOB : <span className='span'> {randomBirthdate}</span> </tr>
          </table>
        </p>
      </div>
      <div>
        <h4 className='subheading3'>✈ Current Flights ✈</h4>
      </div>
      <div className='flight-card'>
        <p>
          <img src={airline1} className='flight-logo' />
          <h4>Air India</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>Air India</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $1300
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'} > ✖ Cancel</button>
      </div>


      <div className='flight-card'>
        <p>
        <img src={airline2} className='flight-logo ' />
        <h4>IndiGo</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>IndiGo</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $1450
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'} >✖ Cancel</button>
      </div>


      <div className='flight-card'>
        <p>
        <img src={airline3} className='flight-logo' />
        <h4>Spice jet</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>Spice jet</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $2000
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'}> ✖ Cancel</button>
      </div>


      <div className='flight-card'>
        <p>
        <img src={airline4} className='flight-logo' />
        <h4>Vistara</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>Vistara</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $2300
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'} > ✖ Cancel</button>
      </div>



      <div className='flight-image'>
        <h1 className='subheading'>Add More Flights..</h1>
        <p className='subheading1'>Travel More And Keep Shinig...</p>
        <button className='Add-btn  '>Book Now</button>
      </div>
      <Footer />
    </div>

  )
}

export default Dashboard
