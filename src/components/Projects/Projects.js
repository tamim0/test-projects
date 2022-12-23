import React from 'react';
import timekeeper from "../../assets/timekeeper1.png"
import sky from "../../assets/skyPhotography2.png"
import learn from "../../assets/learnp.png"

const Projects = () => {
    return (
        <div className='mt-4'>
            <div className='mr-4'>
           <h1 className='text-2xl uppercase'>My projects</h1> 
           <hr className='border-2'/>
           </div>
            <div className="carousel w-full mt-4 ">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='w-full '>
                <div className="card lg:card-side bg-base-100 shadow-xl ">
                <div className=''>
                <figure><img src={timekeeper} alt="Album" className='w-98 h-98'/></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
            <div className='w-full '>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={sky} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
            <div className='w-full '>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={learn} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
            </div>
        </div>
    );
};

export default Projects;