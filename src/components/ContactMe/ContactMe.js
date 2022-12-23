import React, { useRef } from 'react';
import { FaMapMarkerAlt,FaRegEnvelope,FaPhone } from "react-icons/fa";
import emailjs from '@emailjs/browser';


const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_3x4m4x9', 'template_gk2f4mr', form.current, 'kL1kUd8TEYWXGVqQc')
        .then((result) => {
            console.log(result.text);
            if(result.text === 'OK'){
                alert('Message send successfully')
            }
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div>
            <div className='mr-4'>
           <h1 className='text-2xl uppercase'>Get in Touch</h1> 
           <hr className='border-2'/>
           </div>
           <div className='grid md:grid-cols-3 text-center mt-6 gap-3'>
            <div className='border py-4 md:py-10'>
                <FaMapMarkerAlt className='w-full mb-2'></FaMapMarkerAlt>
                <p>134.No Bongshal, Dhaka-1100</p>
            </div>
            <div className='border py-4 md:py-10'>
                <FaRegEnvelope className='w-full mb-2'></FaRegEnvelope>
                <p>arefinismile@gmail.com</p>
            </div>
            <div className='border py-4 md:py-10'>
                <FaPhone className='w-full mb-2'></FaPhone>
                <p>0130-3105521</p>
            </div>
           </div>
           <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="User name" className="input input-bordered w-full my-2"/>
            <input type="email" name="user_email" placeholder="E-mail" className="input input-bordered w-full mb-2"/>
            <textarea name="message" className="textarea textarea-bordered w-full h-32" placeholder="Message"/>
            <input type="submit" value="Send Message" className='btn px-6'/>
            </form>
        </div>
    );
};

export default ContactMe;