import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top  navbar-expand-lg  navbar-dark bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Booking</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Booking
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/booking/1">Aeroplane</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/booking/2">Train</Link></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" >
        
      <Link to='/login' >
      <button className="btn btn-info border text-white" type="submit">Login</button>
      </Link>
        
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
