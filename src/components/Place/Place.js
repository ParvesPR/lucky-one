import React from 'react';
import './Place.css';
import { BsArrowRightCircle } from 'react-icons/bs'

const Place = ({ place, addToBooking }) => {
    const { img, name, price } = place;
    return (
        <div className='place'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Travel Package: {price} tk</h4>
            <button onClick={() => addToBooking(place)} className='booking-btn'>
                <p className='btn-text'>Booking Now</p>
                <BsArrowRightCircle size={25} />
            </button>
        </div>
    );
};

export default Place;