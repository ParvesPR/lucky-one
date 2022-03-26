import React from 'react';
import './SelectedPlaces.css';

const SelectedPlaces = ({ chooseHandleOne, chooseAgain }) => {
    return (
        <div className='selected'>
            <div className='selected-btn'>
                <button onClick={chooseHandleOne} className='choose'>CHOOSE 1 FOR ME</button>
                <button onClick={chooseAgain} className='choose2'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default SelectedPlaces;