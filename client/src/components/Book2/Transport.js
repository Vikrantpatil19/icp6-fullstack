
import React from 'react';
import { Link } from 'react-router-dom';
import bookingData from '../../configs/Booking/Transport.json';

export default function Transport() {
    return (
        <div className="container col-xxl-12 px-4 py-5 d-flex mx-auto">
            {bookingData.map((block) => (
                <div className="mx-auto" key={block.id}>
                    <div className="col-10 col-sm-8 col-lg-8 border rounded-2 p-3">
                        <h2>{block.title}</h2>
                        <p>{block.description}</p>
                        <Link to={`/booking/${block.id}`} className="btn btn-primary btn-lg px-4 me-md-2">{block.buttonText}</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
