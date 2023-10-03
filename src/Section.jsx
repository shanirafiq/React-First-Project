import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
const Section=()=>{
    return(
        <>
          <header className="header">
            <div className="container">
                <div className="row  gap-y-5 gy-5">
                    <div className="col-12 col-md-6 ps-5">
                    <h1>onlion payment made <br/> easy for you</h1>
                    <p className="pt-3 text-transform-capatalize">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </p>
                    <h4 className="sm:ms-1 ms-2">get early acess for you</h4>
                    <div className="input pt-3 mx-auto sm:ms-1 ms-2">
                        <input type="text" placeholder="Enter your mail" className=" w-75 bg-white p-3 ps-3 pe-3 rounded-pill"/>
                        <button  className="btn input-btn btn-primary rounded-pill p-2 p-2 ps-4 pe-4">get mail</button>
                    </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 d-flex mt-5 pe-2  image justify-content-center align-items-start">
                        <img src="https://picsum.photos/300/400" alt="nothing" className="rounded img-fluid shadow-lg"/>
                        <img src="https://picsum.photos/200/200" alt="nothing"
                            className="rounded shadow img-fluid img-2"
                        />
                    </div>
                </div>
            </div>
          </header> 
        </>
    )
}
export default Section