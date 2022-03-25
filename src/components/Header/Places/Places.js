import React, { useEffect, useState } from 'react';
import Place from '../../Place/Place';
import './Places.css';

const Places = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, []);
    return (
        <div className='places-container'>
            <div className='places-wrapper'>
                {
                    places.map(place => <Place
                        place={place} key={place.id}
                    ></Place>)
                }
            </div>
            <div className='selected-place-wrapper'>
                <h1>selected</h1>
            </div>
        </div>
    );
};

export default Places;