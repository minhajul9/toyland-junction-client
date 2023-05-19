import Toy from './Toy';
import useTitle from '../../../Hook/useTitle';
import { useEffect, useState } from 'react';

const AllToys = () => {

    const [toys, setToys] = useState([])
    const [limit, setLimit] = useState(true);


    const handleSelectChange = (event) => {

        const selectedOption = event.target.value;
        if (selectedOption === '20') {
            setLimit(true)
        }
        else {
            setLimit(false)
        }
        console.log(limit);
    }

    // console.log(toys);
    useTitle('Toyland Junction - All Toys')

    useEffect(() => {
        fetch(`http://localhost:5000/getAllToys?limit=${limit}`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(data => setToys(data))
    }, [limit])

    return (
        <div>
            {/* search bar */}
            <div className="navbar bg-base-100">

                <div className="flex-end gap-2">
                    <div className="form-control">
                        <label className="input-group">
                            <span>Email</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>
                    <select onChange={handleSelectChange}>
                        <option value="20">20</option>
                        <option value="All">All</option>
                    </select>
                </div>
            </div>

            {/* toys */}
            <div className="overflow-x-auto w-full my-4">
                <table className="table w-full">

                    <tbody>
                        {
                            toys.map(toy => <Toy
                                key={toy._id}
                                toy={toy}
                            ></Toy>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllToys;
