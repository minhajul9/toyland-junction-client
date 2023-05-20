import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, picture_url, name, seller_name, sub_category, price, available_quantity } = toy;

    return (
        <tr>
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
            <td>
                Seller: {seller_name}

            </td>
            <td>Sub-Category: {sub_category}</td>
            <td>Available: {available_quantity}</td>
            <td className='text-xl'>Price: ${price}</td>
            <th>
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-primary">details</button>
                </Link>
            </th>
        </tr>
    );
};

export default Toy;