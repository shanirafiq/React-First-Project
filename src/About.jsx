import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";
import Cards from "./Cards";
import Body from "./Body";
const About=()=>{
    return(
        <>
        <Navbar/>
        <Section/>
        <Cards/>
        <Body/>
        <div style={{marginTop:"300px"}}>
        <Footer/>
        </div>

        </>
    )
}
export default About