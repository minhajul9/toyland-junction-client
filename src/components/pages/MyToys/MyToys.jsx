import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToy from './MyToy';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import useTitle from '../../../Hook/useTitle';

const MyToys = () => {
    useTitle("Toyland Junction | My Toys")

    const { user } = useContext(AuthContext)

    const [myToys, setMyToys] = useState([]);
    const [ascending, setAscending] = useState(1);

    const handleSort = event => {
        setAscending(event.target.value);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user.email}/${ascending}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user, ascending])

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
            <div className="navbar bg-base-100">

                <div className="flex-1 justify-between gap-2">
                    <div className="form-control">

                    </div>
                    <div className='bg-neutral-focus p-4 rounded-lg'>
                        <label className='mr-4 text-xl text-white font-bold' >Sort By:</label>
                        <select onChange={handleSort} className='p-4 rounded-xl'>
                            <option className='p-2' value={1}>Price low to high</option>
                            <option className='p-2' value={-1}>Price high to low</option>
                        </select>
                    </div>
                </div>
            </div>
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