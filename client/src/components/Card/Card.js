import React from 'react';
import './card.css';


function Card(props) {
    const {img,country,place,description,price}=props;
  return (
    <div className="card width shadow-md ">
      <img src={img} className="card-img-top image" alt="Card image cap" />
      <div className="card-body">
        <h1 className="card-title">{country}</h1>
        <p className='place'>{place}</p>
        <p className="card-text">{description}</p>
        <button className='btn btn-primary'>{price}</button>
      </div>
    </div>
    );
}

export default Card;
