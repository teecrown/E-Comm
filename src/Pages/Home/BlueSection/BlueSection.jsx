import React from 'react'
import Shoe from '../../../assets/shoe.png';
import './BlueSection.css'

function BlueSection() {
  return (
    <div className='blueSection'>
        <div className='Blueflex'>
            <div className='bluewords'>
            <h3> Adidas Men Running <br/>Sneakers </h3>
            <p> Performance and design. Taken right to the edge.</p>
            <h6>SHOP NOW</h6>
            </div>
            <img className='blueshoe' width={'795px'} height={'599px'} src= {Shoe}/>
            
        </div>
    

    </div>
  )
}

export default BlueSection