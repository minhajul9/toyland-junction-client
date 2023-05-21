import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import useTitle from '../../../Hook/useTitle';


const AddAToy = () => {

    useTitle("Toyland Junction | Add A Toy")
    const { user } = useContext(AuthContext)
    

    const handleAddAToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sub_category = form.subCategory.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const description = form.description.value;
        const picture_url = form.picture_url.value;
        const available_quantity = form.quantity.value;
         

        const newToy = {name, sub_category, price, rating, available_quantity, picture_url, description, seller_email: user.email, seller_name: user.displayName}

        fetch('http://localhost:5000/addToy', {
            method: "POST", 
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        <div className=" mx-auto my-24">
            <form onSubmit={handleAddAToy} className='md:grid grid-cols-2 gap-8'>
                <div>
                    <label>Name: </label><br />
                    <input type="text" name="name" id="" placeholder='Name' className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Sub-Category: </label><br />
                    <select type="text" name="subCategory" id="" placeholder='Name' className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2'>
                        <option value="Racing Toys">Racing Toys</option>
                        <option value="SUV Toys">SUV Toys</option>
                        <option value="Truck Toys">Truck Toys</option>
                    </select>
                </div>
                <div>
                    <label>Seller Name: </label><br />
                    <input type="text" name="seller-name" id="" placeholder='Seller Name' defaultValue={user.displayName} disabled className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Seller Email: </label><br />
                    <input type="text" name="email" defaultValue={user.email} disabled className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Price: </label><br />
                    <input type="text" name="price" id="" placeholder='Name' className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Rating: </label><br />
                    <input type="text" name="rating" id="" placeholder='Rating' className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Available Quantity: </label><br />
                    <input type="text" name="quantity" id="" placeholder='Name' className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2' />
                </div>
                <div>
                    <label>Photo URL: </label><br />
                    <input type="text" name="picture_url" id="" placeholder='Photo URL' className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2' />
                </div>
                <div className='col-span-2'>
                    <label>Description: </label><br />
                    <input type="text" name="description" id="" placeholder='Description' className='bg-[#ffffffc1] text-black px-2 rounded border w-full py-2 ' />
                </div>
                <input type="submit" value="Add Toy" className="btn btn-block btn-secondary col-span-2" />
            </form>
        </div>
    );
};

export default AddAToy;