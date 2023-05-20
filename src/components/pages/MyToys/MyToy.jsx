import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MyToy = ({ toy, handleDelete }) => {

    // eslint-disable-next-line react/prop-types
    const { picture_url, name, _id, available_quantity, price, sub_category } = toy;


    return (
        <tr>
            <td>
                <button onClick={() =>handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="avatar w-32">
                    <div className="mask mask-squircle w-28 h-28">
                        <img className='p-4' src={picture_url} />
                    </div>
                </div>
            </td>
            <td>
                <div className=" text-2xl font-bold">{name}</div>
            </td>
            <td>Sub-Category: {sub_category}</td>
            <td>Available: {available_quantity}</td>
            <td className='text-xl'>Price: ${price}</td>
            <th>
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-primary">Edit</button>
                </Link>
            </th>
        </tr>
    );
};

export default MyToy;