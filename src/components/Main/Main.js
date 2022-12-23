import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeroImg from '../HeroImg/HeroImg';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div className='container mx-auto fixed top-0 left-0 right-0 h-screen'>
            <div className=''>
            <Navbar></Navbar>
            </div>
            <div className='md:flex '>
                <div className='hidden md:block md:w-4/12 p-4'>
                <HeroImg></HeroImg>
                </div>
                <div className='md:w-8/12 min-h-fit  md:absolute top-18 right-16 bottom-18 left-22'>
                <Outlet></Outlet>
                </div>
            </div>
            <div className='absolute bottom-0 w-full '>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;