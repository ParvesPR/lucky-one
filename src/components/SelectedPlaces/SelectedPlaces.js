import React from 'react';
import './SelectedPlaces.css';

const SelectedPlaces = ({ selected }) => {
    let placeName = [];
    for (const place of selected) {
        placeName = placeName + place.name;
    }
    return (
        <div className='selected-container'>
            <h3>Selected Places: {selected.length}</h3>
            <div className='selected'>
            <h4>{placeName}</h4>
            </div>
            <div className='selected-btn'>
                <button className='choose'>Choose 1 For Me</button>
                <button className='choose2'>Choose Again</button>
            </div>
        </div>
    );
};

export default SelectedPlaces;