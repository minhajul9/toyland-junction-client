import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>this is Main</h1>
            <div className='md:w-4/5 mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;