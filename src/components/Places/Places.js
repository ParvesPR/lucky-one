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
    const chooseAgain = () => {
        setSelected([])
    };

    const chooseHandleOne = () => {
        if (selected.length === 0) {
            alert('Please add item to choose')
        }

        else {
            const newCart = [...selected]
            const randomCart = Math.floor(Math.random() * newCart.length);
            setSelected([]);
            setSelected([newCart[randomCart]])
            // alert('Your Random product is:' + newCart[randomCart].name)
        }
    }
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
                {
                    selected.map(select => <h4 className='place-name' key={select.id}> <li>{select.name} <img src={select.img} alt="" /></li></h4>)
                }
                <SelectedPlaces
                    chooseHandleOne={chooseHandleOne}
                    chooseAgain={chooseAgain}
                ></SelectedPlaces>
            </div>
        </div>
    );
};

export default Places;