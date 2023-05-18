import React from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'


const ToyCard = ({ toy }) => {

    const { picture_url, name, price, rating } = toy;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;