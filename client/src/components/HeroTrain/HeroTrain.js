import React from 'react';
import './HeroSec.css';
import Img1 from "./img2.png";
import bookingData from '../../configs/Booking/Transport.json';
import { Link } from 'react-router-dom';

export default function HeroTrain() {
    return (
        <div className='border-top '>
            <div className="container col-xxl-8 px-4 py-5 ">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6 heroimg">
                        <img src={Img1} className="d-block mx-lg-auto img-fluid heroimg" alt="Bootstrap Themes"   loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="fs-1 fw-bold text-info-emphasis lh-1 mb-3">DISCOVER THE WORLD WITH TRAIN</h1>
                        <p className="lead fs-6 text-body-secondary ">You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/booking/1">
                            <button type="button" className="btn btn-outline-info  btn-lg px-4 me-md-2">Book Train</button>
                            </Link>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
