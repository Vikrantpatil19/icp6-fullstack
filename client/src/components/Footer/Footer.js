import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


export default function Footer() {
    return (
        <div className='w-100 bg-img-footer pb-4'>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 pb-3 my-5 border-top mb-0">
                    <div className="col ">
                        <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <h4>Save on your plans!
<<<<<<< HEAD
                                Select XYZ And Receive
=======
                                Select BOOKING And Receive
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
                                our discounts by e-mail.</h4>
                        </Link>
                        {/* <p className="text-body-secondary">&copy; 2024</p> */}
                    </div>

                    <div className="col "></div>

                    <div className="col ">
                        <h5>Follow Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">FaceBook(Meta)</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Instagram</Link></li>
                            <li className="nav-item pb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Twitter(X)</Link></li>

                        </ul>
                    </div>

                    <div className="col ">
                        <h5>Travel</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Business Cass</Link></li>
                            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Economy</Link></li>
                            <li className="nav-item pb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Sleeper</Link></li>

                        </ul>
                    </div>

                    <div className="col pb-2">
                        <h5>Contact Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="mailto:booking@gmail.com" className="nav-link p-0 text-body-secondary">booking@gmail.com</a></li>
                            <li className="nav-item mb-2"><a href="tel:+919766426214" className="nav-link p-0 text-body-secondary">+91 9766426214</a></li>
                            <li className="nav-item pb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pune</a></li>
                        </ul>

                    </div>


                </footer>

<<<<<<< HEAD
                <div class=" offset-md-1  mx-auto">
=======
                <div className=" offset-md-1  mx-auto">
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
                    <form className='w-75 gap-2 flex-sm-row mx-auto gap-2'>
                        <div className='d-flex flex-column flex-sm-row  gap-2'>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                        </div>
<<<<<<< HEAD
                        <div class="d-flex flex-column flex-sm-row  gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                            <button class="btn btn-info" type="button" fdprocessedid="6bvxu">Subscribe</button>
=======
                        <div className="d-flex flex-column flex-sm-row  gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                            <button className="btn btn-info" type="button" fdprocessedid="6bvxu">Subscribe</button>
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
