import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Body=()=>{
    return(
        <>
            <div className="body mt-5">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-12 col-md-5 body-img mx-auto">
                        <img src="https://picsum.photos/300/400" alt="nothing"/>

                        </div>
                        <div className="col-12 col-lg-7 mx-auto d-flex flex-column sm-justify-content-center sm-align-items-start justify-content-center align-items-center">
                        <div>
                            <h2 className="text-capatilize">How to use App</h2>
                            <h4 className="pt-4 fs-3"><span className="border fs-4 ps-3 pe-3 border-2 border-primary rounded-circle my-3 ">1</span> <span className="ps-3">sign up</span></h4>
                            <p style={{paddingLeft:"70px"}}>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used a</p>
                            </div>
                            <div>
                        
                            <h4 className="pt-4 fs-3"><span className="border fs-4 ps-3 pe-3 border-2 border-primary rounded-circle my-3 ">2</span> <span className="ps-3">Add your Bank Acount</span></h4>
                            <p style={{paddingLeft:"70px"}}>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used a</p>
                            </div>
                            <div>
                        
                        <h4 className="pt-4 fs-3"><span className="border fs-4 ps-3 pe-3 border-2 border-primary rounded-circle my-3 ">3</span> <span className="ps-3">Send payment request</span></h4>
                        <p style={{paddingLeft:"70px"}}>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a</p>
                        </div>
                        <button type="button" class="btn btn-outline-primary">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body;