import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BiSolidDownload} from "react-icons/bi"
import {SiInstructure} from "react-icons/si"
import {RiFundsBoxLine} from "react-icons/ri"
const Cards=()=>{
    return(
        <>
        <div className="cards">
        <div className="container text-center bg-white shadow-lg"> 
        <h2 className="text-capatalize py-5">how does it work</h2>
        <div className="row gy-5">
         <div className="col-lg-4 col-12">
         <h2 className="text-primary"><BiSolidDownload/></h2>
         <h3 className="mt-2">Downloads Apps</h3>
         <p className="mt-4 pb-5 ps-3 pe-3" >n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>

         </div>
         <div className="col-lg-4 col-12">
         <h2 className="text-primary"><SiInstructure/></h2>
         <h3 className="mt-2">complete the instruction</h3>
         <p className="mt-4 pb-5 ps-3 pe-3" >n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>

         </div>
         <div className="col-lg-4 col-12">
         <h2 className="text-primary"><RiFundsBoxLine/></h2>
         <h3 className="mt-2">Recieve your funds</h3>
         <p className="mt-4 pb-5 ps-3 pe-3" >n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>

         </div>
        </div>
        </div>
        </div> 

        </>
    )
}
export default Cards