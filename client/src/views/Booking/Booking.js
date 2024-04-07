
import React from 'react';
import { useParams } from 'react-router-dom';
import bookingData from '../../configs/Booking/Transport.json';


export default function Booking() {
    const { id } = useParams();
    const booking = bookingData.find(item => item.id === id);

    if (!booking) {
        return <div>Booking not found</div>;
    }

    return (
        <div className="container col-xxl-12 px-4 py-5 d-flex mx-auto">
            <div className="mx-auto d-flex">
                <div className="col-10 col-sm-8 col-lg-8 border rounded-2 p-3">
                    <h2>{booking.title}</h2>
                    <p>{booking.description}</p>
                    <p>Booking ID: {booking.id}</p>
                </div>
                <div>
                        <img src={booking.img} alt="Transport" className="img-fluid rounded-2 border"/>
                    </div>
            </div>
        </div>
    );
}
