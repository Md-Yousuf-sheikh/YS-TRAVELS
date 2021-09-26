import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Place from '../Place/Place';

const Placese = () => {
    const [places , setPlaces ] = useState([])
    const [cart, setCaet] = useState([])
    useEffect(()=>{
        fetch('./torestDt.JSON')
        .then(res => res.json())
        .then(data => setPlaces(data))
    },[])

    const addToCart =(place) =>{
        const newCart = [...cart,place];
        setCaet(newCart);
    }

    return (
        <div className="mx-5 row">
            <div className="row row-cols-1 row-cols-md-3 g-4 col-9">
                {
                    places.map(place =><Place 
                        key={place.id}
                        place={place}
                        addToCart={addToCart}
                        /> )
                }
            </div>
            <div className="col-3 mt-5 crBody">
                <Card cart={cart}/>
            </div>
        </div>
    );
};

export default Placese;