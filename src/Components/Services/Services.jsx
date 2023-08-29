import React from 'react';
import Items from '../Items/Items';
import { Outlet } from 'react-router-dom';

const Services = () => {
    return (
        <div className='w-1/5 border-r-2 bg-yellow-800 h-screen border-x-neutral-900	'>
            <Items></Items>
            <Outlet></Outlet>
        </div>
    );
};

export default Services;