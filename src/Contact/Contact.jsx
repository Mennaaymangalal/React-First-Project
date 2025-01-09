import React from 'react'
import LineBlue from '../LineBlue/LineBlue'


export default function Contact() {
 
  return (
    <>
    <div className="container py-5">
    <div className="d-flex flex-column justify-content-center align-items-center pb-4">
    <h2 className="fw-bold text-uppercase">contact me</h2>
    <LineBlue/> 
    </div>   
   <div className="row">
    <div className="col-lg-8 mx-auto ">
        <div className="">
        <div className='form-group'>
       <input type="text" className='form-control mt-2 w-100 mb-4 border border-0' placeholder='Your Name' />
    </div>

    <div className='form-group'>
       <input type="text" className='form-control mt-2 w-100  mb-4 border border-0' placeholder='Email Address' />
    </div>

    <div className='form-group'>
       <input type="text" className='form-control mt-2 w-100  mb-4 border border-0' placeholder='Phone Number' />
    </div>
    <div className='form-group'>
       <textarea type="text" className='form-control mt-2 w-100  border border-0' placeholder='Message' />
    </div>
    <div className='form-group'>
    <button className='btn btn-primary py-3 px-4 fw-bold mt-3' style={{background:"#1abc9c" , border:"#1abc9c"}}>Send</button>

    </div>
        </div>
    </div>
  
   </div>
      </div>   
    </>
  )
}
