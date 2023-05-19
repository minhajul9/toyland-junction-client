import Toy from './Toy';
import useTitle from '../../../Hook/useTitle';
import { useEffect, useState } from 'react';

const AllToys = () => {
    useTitle('Toyland Junction - All Toys');
    const [toys, setToys] = useState([])
    const [limit, setLimit] = useState(true);
    const [search, setSearch] = useState('')


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


    const handleSearch = event => {
        event.preventDefault();
        const search = event.target.search.value;
        setSearch(search)

    }

    useEffect(() => {
        if (search) {
            fetch(`http://localhost:5000/search?search=${search}`)
            .then(res => res.json())
            .then(data => setToys(data))
        }
        else {
            fetch(`http://localhost:5000/getAllToys?limit=${limit}`)
                .then(res => res.json())
                .then(data => setToys(data))
        }
    }, [limit, search])

    return (
        <div>
            {/* search bar */}
            <div className="navbar bg-base-100">

                <div className="flex-1 justify-between gap-2">
                    <div className="form-control">
                        <form onSubmit={handleSearch}>
                            <label className="input-group">
                                <span><input type="submit" value="Search" /></span>
                                <input type="text" name='search' placeholder="search" className="input input-bordered" />
                            </label>
                        </form>
                    </div>
                    <select className='p-4 rounded-xl' onChange={handleSelectChange}>
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
