import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hook/useTitle';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    
    const toy = useLoaderData();
    console.log(toy);
    const {picture_url, name, price, rating, seller_name, seller_email, available_quantity, description} = toy;
    useTitle(name)

    // toy name, seller name, seller email, price, rating, available quantity, and detail description

    return (
        <div className='p-12 md:flex justify-center items-center gap-20 text-xl '>
            <img src={picture_url} alt="" />
            <div className='space-y-7'>
                <h1 className="text-4xl font-bold">{name}</h1>
                <p><span className='font-bold'>Seller Info:</span> <br />
                <span className='ml-4'>Name: {seller_name}</span>
                 <br />
                 <span className='ml-4'>Email: {seller_email}</span>
                </p>

                <p className='font-bold'>Price: ${price}</p>

                <div className='flex items-center'>
                <span className='font-bold'>Rating</span> 
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                </div>

                <p><span className='font-bold'>Available</span> {available_quantity}</p>

                <p className='max-w-xl text-justify'><span className='font-bold'>Details:</span> {description}</p>

            </div>
        </div>
    );
};

export default ToyDetails;