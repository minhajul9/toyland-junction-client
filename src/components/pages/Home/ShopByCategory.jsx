import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className='my-8'>
            <Tabs>
                <TabList>
                    <Tab>Super Cars</Tab>
                    <Tab>SUVs</Tab>
                    <Tab>Trucks</Tab>

                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ShopByCategory;