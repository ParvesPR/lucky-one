import React from 'react';
import './Place.css';

const Place = ({ place }) => {
    const { img, name, price } = place;
    return (
        <div className='place'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Travel Package: {price} tk</h4>
            <button className='booking-btn'>
                <p>Booking Now</p>
               
                
            </button>
        </div>
    );
};

export default Place;