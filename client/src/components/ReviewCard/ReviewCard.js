import React from 'react'
// import axios from 'axios';
// import toast from 'react-hot-toast';
import Quote from './quote.png';
<<<<<<< HEAD
import User from './user.png';
import './ReviewCard.css';

function ReviewCard({_id, name, message, loadReview}) {
=======
// import User from './user.png';
import './ReviewCard.css';

function ReviewCard({_id, name, message, userPhoto, loadReview}) {
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
    // const deleteReview = async () => {
    //     const response = await axios.delete(`${process.env.REACT_APP_API_URL}/review/${_id}`)
    //     toast.success(response.data.message)
    //     loadReview();
    //   }
<<<<<<< HEAD
=======

    // const profile = localStorage.getItem("userPhoto");
    
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
    return (
        <div className="card p-3 px-4 m-3 card-wth border-info shadow">
            <img src={Quote} alt='img' className="icon-wth"/>
            <p className="ms-4">{message}</p>
            <div className="d-flex name">
<<<<<<< HEAD
                <img src={User} alt='img' className="icon-wth"/>
=======
                <img src={userPhoto} alt='img' className="icon-wth rounded-circle "/>
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
                <div className="ms-4">
                    <h6 className="fw-bold m-0">{name}</h6>
                    <p className="m-0 text-secondary">user</p>
                </div>
            </div>
            {/* <button onClick={deleteReview}>Delete</button> */}
        </div>
    )
}

export default ReviewCard
