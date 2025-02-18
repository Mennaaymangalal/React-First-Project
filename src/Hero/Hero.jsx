import React from 'react'
import './Hero.css'
import Linewhite from '../LineWhite/Linewhite'
import hero from '../Assets/images/avataaars.aa9aff02ddd0ef36a1724ecef4133df9-_1_.png'


export default function Hero() {
  return (
    <>
    <div className="heroSection">
        <div className="d-flex flex-column justify-content-center align-items-center ">
            <img className='w-25 pt-5' src={hero} alt="" />
            <h1 className='fw-bold text-white'>MY PORTFOLIO</h1>
           <Linewhite/>
        </div>
        
    </div>
      
    </>
  )
}
