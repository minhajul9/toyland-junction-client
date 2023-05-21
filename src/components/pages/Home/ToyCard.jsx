import React from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';


const ToyCard = ({ toy }) => {

    const { picture_url, name, price, rating, _id } = toy;

    return (
        <div data-aos="fade-up" className="md:m-8 card w-96 bg-base-100 shadow-xl">
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
                    <Link to={`/toy/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;