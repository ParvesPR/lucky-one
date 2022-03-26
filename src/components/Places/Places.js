import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import SelectedPlaces from '../SelectedPlaces/SelectedPlaces';
import './Places.css';

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, []);

    const addToBooking = (place) => {
        const newSelect = [...selected, place];
        setSelected(newSelect);
    };
    return (
        <div className='places-container'>
            <div className='places-wrapper'>
                {
                    places.map(place => <Place
                        place={place}
                        addToBooking={addToBooking}
                        key={place.id}
                    ></Place>)
                }
            </div>
            <div className='selected-place-wrapper'>
                <SelectedPlaces
                    selected={selected}
                ></SelectedPlaces>
            </div>
        </div>
    );
};

export default Places;