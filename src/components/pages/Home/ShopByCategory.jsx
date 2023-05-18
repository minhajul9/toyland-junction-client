import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabData from './TabData';

const ShopByCategory = () => {

    const [type, setType] = useState('Racing Toys');
    const [loadedToys, setLoadedToys] = useState([])

    const loadTabData = index => {
        if (index === 0) {
            setType('Racing Toys')
        }
        else if (index === 1) {
            setType('SUV Toys')
            
        }
        else if (index === 2) {
            setType('Truck Toys')
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/category`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ category: type })
        })
            .then(res => res.json())
            .then(data => {
                setLoadedToys(data);
            })
    }, [type])

    return (
        <div className='my-8'>
            <Tabs defaultIndex={0} onSelect={(index) => loadTabData(index)}>
                <TabList>
                    <Tab>Super Cars</Tab>
                    <Tab>SUVs</Tab>
                    <Tab>Trucks</Tab>

                </TabList>

                <TabPanel>
                    <TabData loadedData={loadedToys}></TabData>
                </TabPanel>

                <TabPanel>
                    <TabData loadedData={loadedToys}></TabData>
                </TabPanel>

                <TabPanel>
                    <TabData loadedData={loadedToys}></TabData>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ShopByCategory;