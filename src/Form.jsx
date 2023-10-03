import React, { useState } from "react";
const Form=()=>{
    const[name,setName]=useState({
        fname:"",
        lname:"",
        number:"",
        email:"",
        address:"",
        messege:"",
    })
    const[fullName,setFullName]=useState();
const Abc=()=>{
setFullName(
    setName(alert(`${name.fname}  ${name.lname} 
${name.number}  ${name.email}
    ${name.address} 
     ${name.messege}`)
    
  
    ))
  
  



}


    const Xyz=(e)=>{
    let value=e.target.value;
    let name=e.target.name;
    setName((pre)=>{
return{...pre, [name]:value}
    })
    

    }
    

    return(
        <>
       
        <div className="form d-flex justify-content-center align-items-center">
            <div className="container">
            <div className="row gy-2">
                <div className="col-12 col-md-5 text-sm-start text-center">
                    <h1 className="text-capitalize">connect with our <br/> team sales</h1>
                    <p className="py-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typefac</p>
                    <img src="data:image/jpeg;base64,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" 
                    alt="nothing" className="w-75 img-fluid rounded"/>
                </div>
                <div className="col-12 col-md-7  text-center text-sm-start">
                    
                        <input type="text" value={fullName} name="fname" placeholder="Enter your first name" className="col-5 p-3 p-3 ps-3 pe-3 mt-sm-5 mt-2 
                        rounded" onChange={Xyz}/>
                        <input type="text" value={fullName} name="lname" placeholder="Enter your last name" className="col-5 p-3 ps-3 pe-3 ms-2 mt-sm-3 mt-sm-5 mt-2 
                        rounded" onChange={Xyz}/>
                        <input type="text" value={fullName} name="number" placeholder="Enter your number" className="col-5 p-3 p-3 ps-3 pe-3 mt-sm-3 mt-2 
                        rounded" onChange={Xyz}/>
                        <input type="email" value={fullName} name="email" placeholder="Enter your email" className="col-5 p-3 ps-3 pe-3 ms-2 mt-sm-5 mt-2
                        rounded" onChange={Xyz}/>
                        <input type="text" value={fullName} name="address" placeholder="Add your address" className="col-10 ms-1 mx-auto p-3 ps-3 pe-3 mt-sm-5 mt-2
                        rounded" onChange={Xyz}/>
                          <input type="text" value={fullName} name="messege" placeholder="Enter your messege" className="col-10 ms-1 mx-auto p-3 ps-3 pe-3 mt-sm-5 mt-2
                        rounded" onChange={Xyz}/>
                        <button className="bg-primary text-white text-center rounded-pill col-10 mt-sm-5 mt-2 p-3" onClick={Abc}>Submit</button>
            
                </div>
            </div>

            </div>
            </div>
        </>
    )
}
export default Form