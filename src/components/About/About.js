import React from 'react';

const About = () => {
    return (
        <div className=''>
           <div>
           <div className='mr-4'>
           <h1 className='text-2xl uppercase'>About me</h1> 
           <hr className='border-2'/>
           </div>
           <div className='flex items-center mt-4'>
            <div className='w-1/2 text-md'>
                <p className='font-light mb-4'>Hello there! My name is <span className='font-bold'>Ismile Arefin.</span> I am a Web Developer, and i'm very passionate and dedicated to my work.</p>
                <p className='font-light mb-4'>With 1year experience as a professional a web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
            </div>
            <div className='w-1/2 text-md ml-4 grid gap-1'>
                <p className='font-light '><span className='font-bold mr-6'>Name :</span>    Ismile Arefin</p>
                <p className='font-light '><span className='font-bold mr-6'>Address :</span>    134 no. Bongshal, Dhaka-1100, Bangladesh</p>
                <p className='font-light '><span className='font-bold mr-6'>Study :</span>    Udayan Higher Secondary School,Dhaka</p>
                <p className='font-light '><span className='font-bold mr-6'>Degree :</span>    H.S.C</p>
                <p className='font-light '><span className='font-bold mr-6'>E-mail :</span>    arefinismile@gmail.com</p>
                <p className='font-light '><span className='font-bold mr-6'>Phone :</span>    01303105521</p>
            </div>
           </div>
           </div>
           <div>
           <div className='mr-4'>
           <h1 className='text-2xl uppercase'>Skills</h1> 
           <hr className='border-2'/>
           </div>
           <div className='flex'>
                <div className='w-1/2'>
                <p>HTML5</p>
                <progress className="progress progress-accent w-56" value="90" max="100"></progress>
                <p>CSS3</p>
                <progress className="progress progress-accent w-56" value="80" max="100"></progress>
                <p>Tailwind CSS</p>
                <progress className="progress progress-accent w-56" value="90" max="100"></progress>
                <p>Bootstrap</p>
                <progress className="progress progress-accent w-56" value="80" max="100"></progress>
                <p>JavaScript</p>
                <progress className="progress progress-accent w-56" value="85" max="100"></progress>
                </div>
                <div>
                    <p>React</p>
                    <progress className="progress progress-accent w-56" value="90" max="100"></progress>
                    <p>MongoDB</p>
                    <progress className="progress progress-accent w-56" value="75" max="100"></progress>
                    <p>Express JS</p>
                    <progress className="progress progress-accent w-56" value="70" max="100"></progress>
                    <p>Firebase</p>
                    <progress className="progress progress-accent w-56" value="80" max="100"></progress>
                    <p>TypeScript</p>
                    <progress className="progress progress-accent w-56" value="70" max="100"></progress>
                </div>
           </div>
           </div>
        </div>
    );
};

export default About;