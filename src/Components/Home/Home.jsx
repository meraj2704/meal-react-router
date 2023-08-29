import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-yellow-900 min-h-screen'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;