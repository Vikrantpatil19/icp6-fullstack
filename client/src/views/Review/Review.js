import React, { useState, useEffect } from 'react'
import './Review.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReviewCard from './../../components/ReviewCard/ReviewCard';
<<<<<<< HEAD

function App() {

  const [name, setName] = useState('');
=======
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';

function App() {
  const userName = localStorage.getItem("userName");
  const uPhoto = localStorage.getItem("userPhoto")

>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
  const [message, setMessage] = useState('');

  const [reviews, setReviews] = useState([]);
  const loadReview = async () =>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/review`);
<<<<<<< HEAD

    setReviews(response.data.data);
=======
    setReviews(response.data.data);
    toast.success("Reviews Loaded");
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
  }

  useEffect(()=>{
    loadReview();
  }, []);

  const addReview = async() => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/review`,
    {
<<<<<<< HEAD
      name: name,
      message: message
    })
=======
      name: userName,
      message: message,
      userPhoto: uPhoto
    });
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
    toast.success(response.data.message);
    loadReview();
    reset();
  }

  const reset = () => {
<<<<<<< HEAD
    setName('')
    setMessage('')
=======
    setMessage('');
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
  }

  return (
    <div className='body mt-5'>
<<<<<<< HEAD
      <div className="container">
          <div className='col-12 col-sm-7 card m-auto shadow p-4 mt-4'>
          <h1 className="text-center">Add Review</h1><hr />
            <p className="mb-2">Name : </p>
                <input type='text'
                placeholder='Enter Name'
                value={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }} 
                className='mb-3 p-2 px-3 rounded border border-black'/>

            <p className="mb-2">Review : </p>
            <input type='text'
              placeholder='Enter Message'
              value={message}
              onChange={(e)=>{
                setMessage(e.target.value)
              }} 
              className='mb-3 p-2 px-3 rounded border border-black'/>

            <div className="mb-3">
              <button type='button' onClick={reset} class="py-2 rounded bod border-info with">Reset</button>
              <button type='button' onClick={addReview} class="ms-2 py-2 rounded border bg-info with">Save</button>
            </div>
          </div>
        </div>

      
        <div className="body p-5">
            <h1 className="text-center pt-4">Read what our Customers says</h1><hr />
            <div className="container">
            <div className="d-flex flex-wrap">
            {
                reviews.map((review) => {
                    const {_id, name, message} = review;
                    return( <ReviewCard key={_id} _id={_id} name={name} message={message} loadReview={loadReview} /> )
                })
            }
            </div>
            </div>
        </div>
    </div>
  )
}

export default App
=======
      <Navbar/>
      <div className="container mt-5">
        <div className='col-12 col-sm-7 card m-auto shadow p-4 mt-5'>
          <h1 className="text-center text-info-emphasis ">Add Review</h1><hr />
          <p className="mb-2">Name: <span className='fw-bold '>{userName}</span></p>
          <p className="mb-2">Review: </p>
          <input 
            type='text'
            placeholder='Enter Message'
            value={message}
            onChange={(e)=>{
              setMessage(e.target.value)
            }} 
            className='mb-3 p-2 px-3 rounded border border-black'/>

          <div className="mb-3">
            <button type='button' onClick={reset} className="btn btn-outline-info ">Reset</button>
            <button type='button' onClick={addReview} className="btn btn-info mx-3">Save</button>
          </div>
        </div>
      </div>

      <div className="body p-5">
        <h1 className="text-center pt-4 text-info-emphasis">Read what our Customers say</h1><hr />
        <div className="container">
          <div className="d-flex flex-wrap">
            {reviews.map((review) => {
              const {_id, name, message, userPhoto} = review;
              return (
                <ReviewCard key={_id} _id={_id} name={name} message={message} userPhoto={userPhoto} loadReview={loadReview} />
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>

    
  );
}

export default App;
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
