import React from 'react';
import { useParams } from 'react-router-dom';
import bookingData from '../../configs/Booking/Transport.json';
import './destination.css';
import Card from '../../components/Card/Card';
import { Infoplane, Infotrain } from '../../configs/Info/Info';


export default function Destination() {
    const { id } = useParams();
    const booking = bookingData.find(item => item.id === id);

    if (!booking) {
        return <div>Booking not found</div>;
    }


    return (
        <div>
            <div className="container-fluid p-0 position-relative ">
                <img src={booking.poster} alt="Poster " className="img-fluid w-100 " style={{ height: '570px', filter: 'brightness(70%)' }} />
                <div className="position-absolute top-0 start-50 mt-5 translate-middle-x text-center text-white">
                    <h1 className="mb-4">{booking.tag}</h1>
                    <p>{booking.description}</p>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <div className="card border-primary">
                            <div className="card-body">
                                <h5 className="card-title text-center">Destination Input</h5>
                                <form>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="fromInput" className="form-label">From:</label>
                                            <input type="text" className="form-control height" id="fromInput" placeholder="Enter origin" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="toInput" className="form-label">To:</label>
                                            <input type="text" className="form-control height" id="toInput" placeholder="Enter destination" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="dateInput" className="form-label">Date:</label>
                                            <input type="date" className="form-control height" id="dateInput" />
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button type="submit" className="btn btn-primary w-75 text-center">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 text-center">
                <h2 className="mt-5">Top {booking.transport} Deals From India:</h2>
            </div>

            <div className="container mt-3">
                <div className="row d-flex justify-content-center">
                    {
                        id === '1' && Infoplane.map((info, index) => {
                            const { img, country,place, description, price } = info;
                            return (
                                <div key={index} className="col-md-4 mb-3 d-flex">
                                    <Card img={img} country={country} place={place} description={description} price={price} />
                                </div>)
                        })
                    }
                    {
                        id === '2' && Infotrain.map((info, index) => {
                            const { img, country,place, description, price } = info;
                            return (
                                <div key={index} className="col-md-4 mb-3 d-flex">
                                    <Card img={img} country={country} place={place} description={description} price={price} />
                                </div>)
                        })

                    }
                </div>
            </div>

            <div className="container col-xxl-12 px-4 py-5  mx-auto">
                <div className="mx-auto d-flex">
                    <div className="col-10 col-sm-8 col-lg-8 border rounded-2 p-3">
                        <h2>{booking.title}</h2>
                        <p>{booking.details}</p>
                        <p>Booking ID: {booking.id}</p>
                    </div>
                    <div>
                        <img src={booking.img} alt="Transport" className="img-fluid rounded-2 border" />
                    </div>
                </div>
            </div>

        </div>
    );
}