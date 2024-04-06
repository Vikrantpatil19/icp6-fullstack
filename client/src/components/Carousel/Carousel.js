import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';
import Img1 from './car1.jpg';
import Img2 from './car2.jpg';
import Img3 from './car3.jpg';


export default function Carousel() {
    return (
        <div div className='carousel-size' style={{ width: '100%', height: '450px', overflow: 'hidden' }}>
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Img1} className="d-block w-100" alt="Slide 1"></img>
                        <div className="container">
                            <div className="carousel-caption text-start text-black ">
                                <h1>Discover Your Dream Destinations Today.</h1>
                                <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                                <p><Link className="btn btn-lg btn-info" to="/">Sign up today</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img2} className="d-block w-100" alt="Slide 2"></img>
                        <div className="container">
                            <div className="carousel-caption text-black ">
                                <h1>Book Your Next Adventure with Ease!</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><Link className="btn btn-lg btn-info" to="/">Learn more</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img3} className="d-block w-100" alt="Slide 3"></img>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Unlock Unforgettable Journeys Here!</h1>
                                <p>Some representative placeholder content for the third slide of the carousel.</p>
                                <p><Link className="btn btn-lg btn-info" to="/">Browse gallery</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
