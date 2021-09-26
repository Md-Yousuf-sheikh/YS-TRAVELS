import React from 'react';
import './CardItem.css';
const CardItem = (props) => {
    // console.log('Card Item ' , props.items);
    const {img ,name,price }= props.items
    return (
        <div>
            <a href="/" className="list-group-item list-group-item-action" aria-current="true">
                <div class="card mb-3 itm-bg-cd">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start item-img" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <span class="card-title text-light"><strong>{name} <i class="fas fa-check-circle chack-mark"></i></strong></span> <br />
                            <span className="text-light">Price : {price}k BDT</span>
                        </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default CardItem;