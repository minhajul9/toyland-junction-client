import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToy from './MyToy';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import useTitle from '../../../Hook/useTitle';

const MyToys = () => {
    useTitle("My Toys")

    const { user } = useContext(AuthContext)

    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure, You want to delete this item?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                fetch(`http://localhost:5000/toy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining)
                        }
                    })

            }
        })


    }

    // console.log(myToys);

    return (
        <div>
            {myToys.length === 0 && <h1 className='text-2xl font-bold text-center my-10'>No Toys</h1>}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <tbody>
                        {
                            myToys.map(toy => <MyToy
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></MyToy>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;