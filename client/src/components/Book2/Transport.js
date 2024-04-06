import React from 'react';
import { Link } from 'react-router-dom';
import bookingData from '../../configs/Booking/Transport.json';

export default function Transport() {
    return (
        <div className='my-3'>
        <div className="container col-xxl-12 px-4 py-5 d-flex mx-auto bg-body-secondary">
            {/* Mapping over bookingData */}
            {bookingData.map((block) => (
                <div className="mx-auto d-flex flex-row-reverse " key={block.id}>
                    <div className="col-10 col-sm-8 col-lg-8 border rounded-2 p-3">
                        {/* Displaying title */}
                        <h2 className='text-info-emphasis '>{block.title}</h2>
                        {/* Displaying description */}
                        <p className='text-body-secondary'>{block.description}</p>
                        {/* Link to booking page */}
                        <Link to={`/booking/${block.id}`} className="btn btn-outline-info btn-lg px-4 me-md-2">
                            {/* Button text */}
                            {block.buttonText}
                        </Link>
                    </div>
                    <div>
                        <img src={block.img} alt="Transport" className="img-fluid rounded-2 border"/>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}
