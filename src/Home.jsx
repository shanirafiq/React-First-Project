import React from "react";
import Navbar from "./Navbar";
import Section from "./Section"
import Cards from "./Cards";
import Body from "./Body";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import BodyOne from "./BodyOne";
import BodyTwo from "./BodyTwo";
import {FaRegistered} from "react-icons/fa"
import {BsCameraVideoOffFill} from "react-icons/bs"
import {BsBank2} from "react-icons/bs"
import {RiFileTransferFill} from "react-icons/ri"
import {FaMountain} from "react-icons/fa"
import  Form  from "./Form"
import Footer from "./Footer";
const Home=()=>{
    return(
        <>
         <Navbar/>
        <Section/>
        <Cards/>
        <Body/>
        <BodyOne/>
        <h3  className="text-center body-two" style={{marginTop:"180px"}}>How to send money</h3>
        <div className="container my-5 mx-auto">
             <div className="row g-4">
      <BodyTwo 
      
        icon={<FaRegistered/>}
        heading="register for free"
      
       
      />
      <BodyTwo
          icon={<BsCameraVideoOffFill/>}
        heading="verify your identify"

      />
      <BodyTwo
          icon={<BsBank2/>}
        heading="Add recipent bank details"

      />
      <BodyTwo
          icon={<RiFileTransferFill/>}
        heading="pay for your transfer"
        
      />
      <BodyTwo
          icon={<FaMountain/>}
        heading="choose an amount to send"
    
      />
      <BodyTwo
          icon={<FaMountain/>}
        heading="that,s it"
        
      />
    
     
      </div>
      </div>
      <Form/>
      <Footer/>
    
        
        </>
    )
}
export default Home