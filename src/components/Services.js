import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import contact_bg from './images/contact_bg.jpg';

function Services() {
  return (
    <div className="services">
      <Navbar/>
      <div className="bg-center bg-cover" style={{backgroundImage: `url(${contact_bg})`}}>
        <div className="bg-[#010C1D] h-[218px] opacity-90 px-4">
            <div className="max-w-[1200px] m-auto flex flex-col justify-center h-full">
                <p className="text-[20px] font-semibold text-white">Services</p>
                <div className="w-[100px] h-[4px] bg-[#ff3a02] my-5"></div>
                <Link className="text-white active:border-white border-[#010C1D] border  text-[14px]" to="/">Artherwa is here to make your life easier.</Link>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Services;