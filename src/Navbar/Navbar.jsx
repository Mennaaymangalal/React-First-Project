import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand" href="#"><i className="fa-brands fa-react fs-1"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link  fw-bold" aria-current="page" to="">HOME</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link  fw-bold" aria-current="page" to="portfolio">PORTFOLIO</NavLink>
        </li>   
        <li className="nav-item">
          <NavLink className="nav-link fw-bold" aria-current="page" to="about">ABOUT</NavLink>
        </li>   
        <li className="nav-item">
          <NavLink className="nav-link fw-bold" aria-current="page" to="contact">CONTACT</NavLink>
        </li>                  
      </ul>     
    </div>
  </div>
</nav>
      
    </>
  )
}
