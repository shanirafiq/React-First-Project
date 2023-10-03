import React from "react";
import { NavLink } from "react-router-dom";
import {FaFacebook } from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {ImSkype} from "react-icons/im"
const Footer=()=>{
    return(
        <>
        <div className="footer mb-sm-0 mb-5 mt-sm-0 mt-5">
            <div className="container">
                <div className="row gy-5 text-center">
                    <div className="col-6 col-md-3 pt-5">
                        <h5 className="fw-bold">Company</h5>
                        <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>

                        
                    </div>
                    <div className="col-6 col-md-3 pt-5">
                    <h5 className="fw-bold">Support</h5>
                    <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        
                    </div>
                    <div className="col-6 col-md-3 pt-5">
                    <h5 className="fw-bold">Services</h5>
                    <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        <li><NavLink className="navLink" to={"/about"}>about</NavLink></li>
                        
                    </div>
                    <div className="col-6 col-md-3 pt-5">
                    <h5 className="fw-bold"> Follow us</h5>
                    <div className="pt-2">
                    <FaFacebook />
                  <span className="ps-5">  <BsInstagram/> </span>
                  <span className="ps-5">    <ImSkype/></span>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer