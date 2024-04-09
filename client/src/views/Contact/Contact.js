import React from "react";
import './contact.css'
import om from '../Contact/om.jpg'
import chetna from '../Contact/chetna.jpg'
import harshal from '../Contact/harshal.jpg'
import avinash from '../Contact/avinashj.jpg'
import sadanand from '../Contact/sadanand.jpg'
import vikrant from '../Contact/vikrant.jpg'
import ph from '../Contact/ph.jpg'
import facebook from '../Contact/facebook.png'
import twitter from '../Contact/twitter.png'
import team from '../Contact/team.png'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";



export default function ContactUs() {


    return (
        <>
            <Navbar />
            <div className="">
                <div className='container mt-5'>

                    <p className='title '>CONTACT US</p>
                    <p className='title-text'>Our team of customer care ninjas is ready to hear from you.</p>
                    <hr></hr>

                    <div>
                        <div class="row justify-content-evenly">

                            <div class="col-5 text-start">
                                <p className="heading"> Reach out to us!</p>
                                <p className="description">Ready to hear from You💌</p>

                                <div>
                                    <form>

                                        <input type='text' placeholder='Enter your name' className='input-1 rounded'></input>


                                        <input type='text' placeholder='Enter your email' className='input-2 rounded'></input>


                                        <input type='text' placeholder='Enter your contact no' className='input-3 rounded'></input>


                                        <input type='text' placeholder='Enter your message' className='input-4 rounded'></input><br></br>
                                        <button type="button" class="btn btn-outline-info btn-md mt-3">Summit</button>
                                    </form>
                                </div>
                            </div>




                            <div class="col-5 text-start">

                                <p className='heading-1' >Customer Care</p>
                                <p className="description-1">Our team of customer care ninjas is ready to hear from you.</p>


                                <div className='wrapper'>
                                    <div className='text-box'>
                                        <img src={om}
                                            alt='Om' className='user-1'>
                                        </img>
                                        <h6>Om nandurkar</h6>
                                        <p >Customer Care<br></br>
                                            +91 **********14
                                        </p>
                                    </div>

                                    <div className='text-box-2'>
                                        <img src={ph}
                                            alt='nidhi' className='user-2'>
                                        </img>
                                        <h6>Nidhi jangde</h6>
                                        <p >Customer Care<br></br>
                                            +91 **********88
                                        </p>

                                    </div>
                                </div>

                                <p className='heading-2' >Others ways to connect</p>

                                <div className='wrapper'>
                                    <div className='text-box-3'>
                                        <img src={facebook}
                                            alt='facebook' className='user-3'>
                                        </img>
                                        <p> Be the first on your block get product updates,<br></br>
                                            announcements, news and lots of realiy good content.
                                            like us on facebook today!
                                        </p>
                                    </div>

                                    <div className='text-box-3'>
                                        <img src={twitter}
                                            alt='twitter' className='user-4'>
                                        </img>
                                        <p> Where the best tips on conversion optimization, landing<br></br>
                                            pages, content marketing SEO & SEM ?
                                            follow us on twitter today at !
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div>
                    <h4 className=' about-head text-center'>About us</h4>

                    <div className='wrapper-5'>
                        <div className='text-box-5'>
                            <img src={team}
                                alt='team' className='user-5'>
                            </img>
                            <p> 'Travel is the movement of people between distant <br></br>
                                geographical locations.Travel can be done by  foot, bicycle,<br></br>
                                automobile, train, boat, bus, airplane, <br></br>
                                ship or other means, with or without luggage,<br></br>
                                and can be one way or round trip.<br></br>
                                Travel can also include relatively short
                                stays between successive<br></br>
                                movements, as in the case of tourism<br></br>
                            </p>
                        </div>

                    </div>

                    <h6 className=' team-title text-center'> OUR TEAM</h6>

                    <div className="card-container">
                        <div className="card-1" >
                            <img src={ph}
                                alt='ph' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">Nidhi Jangde</h6>
                                <p className="education"> BCA</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>

                        <div className="card-1" >
                            <img src={om}
                                alt='om' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">Om Nandurkar</h6>
                                <p className="education">BE Computer</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>

                        <div className="card-1" >
                        <img src={harshal}
                            alt='harshal' className='user-6'>
                        </img>
                        <div className="card-body">
                            <h6 className="card-text-1">Harshal Kawadse</h6>
                            <p className="education">BE IT</p>
                            <p className='description-5'>Fullstack Developer</p>
                        </div>
                    </div>

                        <div className="card-1" >
                            <img src={chetna}
                                alt='chetna' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">Chetana Bahale</h6>
                                <p className="education">BE IT</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>

                        <div className="card-1" >
                        <img src={sadanand}
                            alt='sadanand' className='user-6'>
                        </img>
                        <div className="card-body">
                            <h6 className="card-text-1">Sadanand Gurude</h6>
                            <p className="education">BE entc</p>
                            <p className='description-5'>Fullstack Developer</p>
                        </div>
                    </div>

                   < div className="card-1" >
                        <img src={avinash}
                            alt='avinash' className='user-6'>
                        </img>
                        <div className="card-body">
                            <h6 className="card-text-1">Avinash Jadhav</h6>
                            <p className="education">TE Computer</p>
                            <p className='description-5'>Fullstack Developer</p>
                        </div>
                    </div>

                    < div className="card-1" >
                        <img src={vikrant}
                            alt='avinash' className='user-6'>
                        </img>
                        <div className="card-body">
                            <h6 className="card-text-1">Vikrant Patil</h6>
                            <p className="education">Btech AI</p>
                            <p className='description-5'>Fullstack Developer</p>
                        </div>
                    </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}