import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BodyOne from "./BodyOne";
import BodyTwo from "./BodyTwo";
import Cards from "./Cards";

const Services=()=>{
    return(
        <>
        <Navbar/>
        <BodyOne/>
        <div style={{marginTop:"300px"}}>
        <Cards/>
        </div>
        <div style={{marginTop:"100px"}}>
        <Footer/>
        </div>
        </>
    )
}
export default Services