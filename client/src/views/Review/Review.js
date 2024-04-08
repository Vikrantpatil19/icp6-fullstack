import React, { useState, useEffect } from 'react'
import './Review.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReviewCard from './../../components/ReviewCard/ReviewCard';

function App() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [reviews, setReviews] = useState([]);
  const loadReview = async () =>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/review`);

    setReviews(response.data.data);
  }

  useEffect(()=>{
    loadReview();
  }, []);

  const addReview = async() => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/review`,
    {
      name: name,
      message: message
    })
    toast.success(response.data.message);
    loadReview();
    reset();
  }

  const reset = () => {
    setName('')
    setMessage('')
  }

  return (
    <div className='body mt-5'>
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
