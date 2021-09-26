import React from 'react';
import './Place.css';
const Place = (props) => {
    // console.log(props);
    const {name,img,country,price ,area,division} = props.place;
    return (
        <div className="col">
            <div className="card place-card shadow ">
                    <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-light">{name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <strong>Country : </strong>{country}</li>
                        <li className="list-group-item"> <strong>Division : </strong>{division}</li>
                        <li className="list-group-item"> <strong>Area : </strong>{area} </li>
                        <li className="list-group-item"> <strong>Coust : </strong>{price}k/=Tk</li>
                        <button onClick={()=> props.addToCart(props.place)} className="btn mt-2 buyNowBtn">Add to Cart <i class="fas fa-plane-departure"></i>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Place;