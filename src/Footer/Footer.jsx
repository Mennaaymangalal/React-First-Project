import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
     <div className="p-5" style={{background:"#2c3e50"}}>
     <div className="container ">
        <div className="row text-white d-flex justify-content-center align-items-center">
            <div className="col-lg-4 mt-5 d-flex flex-column justify-content-center align-items-center">
                <h4  className='fw-bold mb-4'>Location</h4>
                <p className='text-center'>2215 John Daniel Drive <br/>
                Clark, MO 65243</p>
            </div>     

            <div className="col-lg-4 mt-5  d-flex flex-column justify-content-center align-items-center ">
            <h3 className='fw-bold mb-4 text-center'>Around the web</h3>
               <div className="icons">
                <ul>
                <li href=""><i className="fa-brands fa-facebook"></i></li>
                <li href=""><i className="fa-brands fa-twitter"></i></li>
                <li href=""><i className="fa-brands fa-linkedin-in"></i></li>
                <li href=""><i className="fa-brands fa-youtube"></i></li>
                </ul>
               </div>
            </div>  

            <div className="col-lg-4 mt-5  d-flex flex-column justify-content-center align-items-center">
                <h3 className='fw-bold mb-4'>About freelancer</h3>
                <p className='fw-bold text-center'>Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
            </div>         
        </div>        
     </div>
    </div>
   
    <div className="" style={{background:"#212529"}}>
        <div className="container">
            <p className='p-4 text-center text-white'>Copyright © Hamza Nouh 2022</p>
        </div>
    </div>
  
    </>
  )
}
