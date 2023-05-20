import React from 'react';
import ToyCard from './ToyCard';

const TabData = ({ loadedData }) => {

    // console.log(loadedData);
    return (
        <div className='grid md:grid-cols-3'>
            {
                loadedData?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
            }

        </div>
    );
};

export default TabData;