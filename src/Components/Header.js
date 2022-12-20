import React from 'react'
import About from '../Pages/About'
import Reservation from '../Pages/Reservation'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="section">
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid header-nav">
    <a className="navbar-brand" href="#">
      <img src="Images/logo/logo.png" alt="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-list" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Reservation">Reservation</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
        </>
  )
}

export default Header