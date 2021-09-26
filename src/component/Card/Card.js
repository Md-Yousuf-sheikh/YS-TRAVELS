import React from 'react';
import CardItem from '../CardItem/CardItem';
import './Card.css'

const Card = (props) => {
    // console.log(props.cart[0]);
    const {cart} = props;

    let total = 0;
    for(const place of cart){
        total = total + place.price;
    }
    const budget = 100000 - total;
    return (
        <div>
            
            <div className="card card-main text-dark bg-light mb-3">
                <div className="card-header"><h4>Travel Places Added</h4></div>
                <div className="card-body">
                    
                    <div className="text-light">
                        <h5 className='title-color'>Your Budget: {budget} BDT </h5>
                        <h5>Total Travel: <i class="fas fa-users"></i> <sup className="bg-danger">{props.cart.length}</sup> </h5>
                        <h6>Total : {total}k BDT</h6>
                        <strong>Placese Name</strong>
                    </div>
                    <div className="list-group">
                        {
                            cart.map(items => <CardItem items={items}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;