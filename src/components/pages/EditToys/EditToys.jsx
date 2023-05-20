import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useLoaderData } from 'react-router-dom';


const EditToys = () => {


    const loadedToy = useLoaderData();
    const { user } = useContext(AuthContext)

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        
        const price = form.price.value;
        const description = form.description.value;
        const available_quantity = form.quantity.value;


        const updates = { price,  available_quantity,  description}

        fetch(`http://localhost:5000/toy/${loadedToy._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updates)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }


    return (
        <div className=" mx-auto my-24">
            <form onSubmit={handleUpdateToy} className='md:grid grid-cols-2 gap-8'>
                <div>
                    <label>Name: </label><br />
                    <input type="text" name="name" id="" placeholder='Name' disabled defaultValue={loadedToy.name} className='bg-[#a6a4a4d4] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Sub-Category: </label><br />
                    <select type="text" name="subCategory" id="" placeholder='Name' disabled defaultValue={loadedToy.sub_category} className='bg-[#a6a4a4d4] text-black px-2 rounded border w-full py-2'>
                        <option value="Racing Toys">Racing Toys</option>
                        <option value="SUV Toys">SUV Toys</option>
                        <option value="Truck Toys">Truck Toys</option>
                    </select>
                </div>
                <div>
                    <label>Seller Name: </label><br />
                    <input type="text" name="seller-name" id="" placeholder='Seller Name' defaultValue={loadedToy.seller_name} disabled className='bg-[#a6a4a4d4] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Seller Email: </label><br />
                    <input type="text" name="email" defaultValue={user.email} disabled className='bg-[#a6a4a4d4] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Price: </label><br />
                    <input type="text" defaultValue={loadedToy.price} name="price" id="" placeholder='Name' className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Rating: </label><br />
                    <input type="text" name="rating" id="" placeholder='Rating' disabled defaultValue={loadedToy.rating} className='bg-[#a6a4a4d4] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Available Quantity: </label><br />
                    <input type="text" defaultValue={loadedToy.available_quantity} name="quantity" id="" placeholder='Name' className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Photo URL: </label><br />
                    <input type="text" name="picture_url" id="" placeholder='Photo URL' disabled defaultValue={loadedToy.picture_url} className='bg-[#a6a4a4d4] text-black px-2 rounded border w-full py-2' />
                </div>
                <div className='col-span-2'>
                    <label>Description: </label><br />
                    <textarea type="text" defaultValue={loadedToy.description} name="description" id="" placeholder='Description' className='bg-[#ffffffc1] text-black px-2 h-32 rounded border w-full py-2 ' />
                </div>
                <input type="submit" value="Update Toy" className="btn btn-block btn-secondary col-span-2" />
            </form>
        </div>
    );
};

export default EditToys;