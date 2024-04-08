import axios from 'axios';
import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [payment, setPayment] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [seat, setSeat] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/booking`, {
        name,
        // gender,
        phone
        // birth,
        // seat
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className=''>
      <div className='text-center bg-info p-3'>
        <h1 className='  fs-3'>PASSENGER DETAILS</h1>
        <span className=''> HDP TO AVG </span>
        <span>| WED, 10 APR 2024 </span>
      </div>

      <hr className=' border-5 '></hr>

      <div className=' ms-3 ' >
        <b>HDP xyz EXPRESS(1234)</b>
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
          <p>--10h:30m--</p>
          <span className=' text-bg-dark  text-light p-1'>SLEEPER(SL)</span>
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
        <h4>Select Passenger</h4>
        <p className="text-info" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">+ Add New</p>
        <p className='text-info'>+ Add Existing</p>
        <p>*Children under 5 years of age shall be carried free and no purchase of any ticket is required. (If no separate berth is opted.)</p>
      </div>

      <hr></hr>

      <div>
        <h4>Passenger Mobile Number</h4>
        <b>+91-</b><span>9876543210</span>
        <hr></hr>
        <p>Your ticket will be sent to email and {tel} </p>
      </div>

      <hr></hr>

      <div>
        <h4>Payment Mode</h4>
        Payment = {payment}

        <label htmlFor='credit'>
          <input type='radio' name='payment' id='credit' onChange={() => setPayment('credit')} />Credit
        </label>
        <br />
        <label htmlFor='upi'>
          <input type='radio' name='payment' id='upi' onChange={() => setPayment('upi')} />UPI
        </label>
      </div>

      <div>
        <h3>Travel Insurance</h3>
        <b>Do you want to take Take insurance (&#8377;0.75/person)? </b>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Passenger</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input type="text" className='w-100 p-2' placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="tel" className='w-100 p-2' placeholder="Mobile No." onChange={(e) => setTel(e.target.value)} />
                </div>
                {/* <div className="mb-3">
                  <p>Selected Gender: {gender}</p>
                  <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} checked={gender === "Male"} />Male
                  <br />
                  <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} checked={gender === "Female"} />Female
                </div>
                <div>
                  <p>Selected Birth : {birth}</p>
                  <select value={birth} onChange={(e) => setBirth(e.target.value)}>
                    <option value="LB">Lower Birth</option>
                    <option value="MB">Middle Birth</option>
                    <option value="UB">Upper Birth</option>
                  </select>
                </div> */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking;
