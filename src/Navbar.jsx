import React from "react";
import {NavLink} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Navbar=()=>{
    return (
        <>
        <div className="main">
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
  <div className="container">
    <a href="#" className="navbar-brand ps-4">zeeshan Rafiq</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 gap-3">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
       
    
        
      </ul>
      <button type="button" class="btn btn-primary rounded-pill mt-4 ps-3 pe-3 me-2">Sign Up</button>
        <button type="button" class="btn btn-outline-primary mt-4 rounded-pill ps-3 pe-3 me-4">Login</button>
      
    </div>
  </div>
</nav>
</div>
        </>
    )
}
export default Navbar