
import React, {useState} from 'react' 
import './Booking.css'

function Booking() {


  const [payment, setPayment] = useState('');

  return (
    <div className=''>

      <div className='text-center bg-info p-3'>
        <h1 className='  fs-3'>PASSENGER DETAILS</h1>
        <span className=''> HDP TO AVG </span>
        <span>| WED, 10 APR 2024 </span>
      </div>

      <hr className=' border-5 '></hr>

      <div className=' ms-3 ' >

        <b>
          HDP xyz EXPRESS(1234)
        </b>

      </div>

      <hr className=' border-5 '></hr>

      <div className='d-flex justify-content-around '>

        <div>
          <b>15:30</b>
          <p>Hadapsar</p>
          <p>(HDP)</p>
          <p>Tue, 09 Apr</p>
        </div>

        <div className=' d-flex flex-column justify-content-around '>
          <p>
            --10h:30m--
          </p>
          <span className=' text-bg-dark  text-light p-1'>
            SLEEPER(SL)
          </span>
        </div>

        <div>
          <b>1:30</b>
          <p>Laturr</p>
          <p>(LTR)</p>
          <p>Wed, 10 Apr</p>
        </div>

      </div>
      <hr></hr>

      <div className='p-3'>
        <h4>
          Select Passenger
        </h4>
        <p className='text-info '>
          + Add New
        </p>

        <p className='text-info' >
          + Add Existing
        </p>

        <p>*Children under 5 years of age shall be carried free and no purchase of any ticket is required. (If no seperate berth is opted.)</p>
      </div>

      <hr></hr>

      <div>
        <h4>Passenger Mobile Number</h4>
        <b>+91-</b><span>9876543210</span>
        <hr></hr>
        <p>Your ticket will be sent to email and phone</p>
      </div>

      <hr></hr>

      <div>
        <h4>Payment Mode</h4>
        Payment = {payment}

        <label htmlfor='credit'>
          <input type='radio' name='payment' id='credit' onChange={(e)=>{
            if(e.target.checked){
              setPayment('credit')
            }
          }} />Credit
        </label>
          <br/>
        <label htmlfor='upi'>
          <input type='radio' name='payment' id='upi' onChange={(e)=>{
            if(e.target.checked){
              setPayment('upi')
            }
          }} />UPI
        </label>

      </div>

      <div>
        <h3>Travel Insurance</h3>
        <b>Do you want to take Take insurance (&#8377;0.75/person)? </b>


      </div>
    </div>
  )
}

export default Booking


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import bookingData from '../../configs/Booking/Transport.json';


// export default function Booking() {
//     const { id } = useParams();
//     const booking = bookingData.find(item => item.id === id);

//     if (!booking) {
//         return <div>Booking not found</div>;
//     }

//     return (
//         <div className="container col-xxl-12 px-4 py-5 d-flex mx-auto">
//             <div className="mx-auto d-flex">
//                 <div className="col-10 col-sm-8 col-lg-8 border rounded-2 p-3">
//                     <h2>{booking.title}</h2>
//                     <p>{booking.description}</p>
//                     <p>Booking ID: {booking.id}</p>
//                 </div>
//                 <div>
//                         <img src={booking.img} alt="Transport" className="img-fluid rounded-2 border"/>
//                     </div>
//             </div>
//         </div>
//     );
// }
