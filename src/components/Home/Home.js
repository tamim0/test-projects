import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='grid items-center mt-10'>
            <div className='px-4'>
            <h1 className='text-6xl mb-6'>
                Ismile Arefin
            </h1>
            <hr className='w-1/12 border-gray-900 border-2 mb-4'/>
           <div className='flex items-center text-3xl mb-4 gap-2'>
           <p className='font-light'>Creative</p>
            <div>{<Typewriter
            className='font-bold'
            options={{
                strings: ['Developer', 'Persion'],
                autoStart: true,
                loop: true,
            }}
            />}</div>
           </div >
            <button className='btn mt-10'>Download Resume</button>
            </div>
        </div>
    );
};

export default Home;