import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import contact_bg from './images/contact_bg.jpg';

import { HiOutlineCursorArrowRipple } from "react-icons/hi2"
import { SlScreenDesktop, SlPeople } from "react-icons/sl"
import { FaKiwiBird } from "react-icons/fa"
import { TbStars } from "react-icons/tb"
import { BiSearchAlt2 } from "react-icons/bi"


import ecom_img from './images/ecom_img.webp'
import jawa_img from './images/jawa_img.webp'
import burger_company from './images/burger_company.webp'
import team_core from './images/team_core.webp'
import emblem from './images/emblem.webp'

import about_who_we_are from './images/about-who_we_are.webp';
import about_us_who_we_are_2 from './images/about_us_who_we_are_2.webp';
import about_us_who_we_are_3 from './images/about_us_who_we_are_3.webp';
import Review from './Review';

function Services() {
  return (
    <div className="services">
      <Navbar />
      <div className="bg-center bg-cover" style={{ backgroundImage: `url(${contact_bg})` }}>
        <div className="bg-[#010C1D] h-[218px] opacity-90 px-4">
          <div className="max-w-[1200px] m-auto flex flex-col justify-center h-full">
            <p className="text-[20px] font-semibold text-white">Services</p>
            <div className="w-[100px] h-[4px] bg-[#ff3a02] my-5"></div>
            <Link className="text-white active:border-white border-[#010C1D] border  text-[14px]" to="/">Artherwa is here to make your life easier.</Link>
          </div>
        </div>
      </div>
      <section className='px-[30px]'>
        <div className='space-section w-full h-[40px]'> </div>

        <div className='flex flex-wrap md:flex-nowrap mb-[20px]'>
          <div className='w-full md:w-[46%]'>
            <div className='mb-[20px]'>
              <h1 className='text-[20px] text-[#E64306] font-medium font-sans'>About Us</h1>
            </div>
            <div className='text-[#033957] md:text-[30px] lg:text-[39px] px-[10px] font-bold mb-[20px]'>
              <h1>Hire Artist for Wall Art  & Graffiti  in Delhi NCR</h1>
            </div>
          </div>
          <div className='w-full md:w-[54%] mr-[20px]'>
            <div className='mt-[15px]'>
              <h1 className='text-[#837F7F] text-[14px] lg:text-[16px] text-justify mb-[20px] tracking-wider'>Established in 2016, Our Company has years of Experience in Provide High-Quality Art Services no matter what you need for offices, Apartments, Villa or any Commercial Building. Our Expert artists are ready to serve you up to your 100% Satisfaction and We will be there till the Jobe is done.
              </h1>
              <h1 className='text-[#837F7F] text-[14px] lg:text-[16px] text-justify mb-[20px] tracking-wider'>ArtHerwa brings people a fast, affordable, and high-quality solution for all of their Interior or Exterior Residental, Commercial, and Industrial Wall Decor projects. We respect your time as much as you do and provide the quality wall art job you expect, in a timeline that is unexpected.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className='my-[40px] mt-[40px] shadow-lg border'>
        <div className='text-center my-[30px]'>
          <h1>OUR CLIENTS:</h1>
        </div>
        <div className='flex justify-around mt-[50px]'>
          <div className='w-[130px] h-[123px]'>
            <img src={ecom_img} alt="just dial image" />
          </div>
          <div className='w-[130px] h-[123px]'>
            <img src={jawa_img} alt="just dial image" />
          </div>
          <div className='w-[130px] h-[123px]'>
            <img src={burger_company} alt="just dial image" />
          </div>
          <div className='w-[130px] h-[123px]'>
            <img src={team_core} alt="just dial image" />
          </div>
          <div className='w-[130px] h-[123px]'>
            <img src={emblem} alt="just dial image" />
          </div>
        </div>

        <div className='flex justify-around mt-[50px]'>
          <div className='w-[130px] h-[123px]'>
            <img src={ecom_img} alt="just dial image" />
          </div>
          <div className='w-[130px] h-[123px]'>
            <img src={jawa_img} alt="just dial image" />
          </div>
          <div className='w-[130px] h-[123px]'>
            <img src={burger_company} alt="just dial image" />
          </div>
          <div className='w-[130px] h-[123px]'>
            <img src={team_core} alt="just dial image" />
          </div>
          <div className='w-[130px] h-[123px]'>
            <img src={emblem} alt="just dial image" />
          </div>
        </div>

      </section>

      <section>
        <div className='flex flex-wrap p-[30px]'>
          <div className='left_main_container lg:w-[50%] p-[20px] flex items-center'>
            <div className='flex justify-between '>
              <div className='h-[276px] md:h-[400px] w-[45%] flex flex-col justify-center'>
                <img src={about_who_we_are} alt="" className='h-full' />
              </div>
              <div className='flex flex-col justify-between w-[45%]'>
                <div className='w-full h-[153px] md:h-[35%]'>
                  <img src={about_us_who_we_are_2} alt="" className='h-full w-full' />
                </div>
                <div className='w-full h-[153px] md:h-[55%]'>
                  <img src={about_us_who_we_are_3} alt="" className='h-full w-full' />
                </div>
              </div>
            </div>
          </div>

          <div className='right_main_container lg:w-[50%] px-[30px] py-[20px]'>
            <div className='mb-[20px]'>
              <h1 className='text-[20px] text-[#E64306] font-medium font-sans'>Who we are</h1>
            </div>
            <div className='text-[#033957] text-[39px] font-bold mb-[20px]'>
              <h1>Hire Artist for Wall Art  & Graffiti  in Delhi NCR</h1>
            </div>
            <div className='mt-[20px] text-[14px] text-[#5B5959] tracking-widest text-justify'>
              <h1>
                The establishment of this as a firm was recent but we are working for the clients for the past 12 years. The market has grown from that time and so does we have moved further with capturing our endeavors. We are highly specialized in wall designing and painting. Our main USP. Is of spray paint. Although we do graffiti as well as any other sort of wall project. With time we have also started painting on canvas and have illustrations intact. We as a team are Naveen as the main controller with a fine art degree with our specialization in applied art & painting resp. Apart from that, there are other eight people who work with us according to the need of the project. Our clients include the giants like Dominoes, Bronzx café, Global Traveltech Pvt. Ltd., HOOQ, Chaplin Community House, force gym and spa, Walk in the woods, MoU Pvt. Ltd. & many more.
              </h1>
            </div>
            <div className='space_section w-full h-[40px]'></div>
            {/* ======ranges start=== */}
            <div>
              <div className='text-[18px] font-bold'> Experienced</div>
              <div className='w-full'>
                <input type="range" min={0} max={100} value={90} className='w-full ' />
              </div>
              <div className='text-[18px] font-bold'> Professional</div>
              <div className='w-full'>
                <input type="range" min={0} max={100} value={85} className='w-full ' />
              </div>
              <div className='text-[18px] font-bold'> Skill</div>
              <div className='w-full'>
                <input type="range" min={0} max={100} value={97} className='w-full ' />
              </div>

            </div>
            {/* ========ranges end======= */}
          </div>

        </div>
      </section>

      <section>
        <div className='flex flex-wrap w-full bg-[#03203C]'>
          <div className='right_div w-full lg:w-[50%]  items-center bg-[#03203C] flex justify-center'>
            <div className='w-[600px] h-[500px]  bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${about_us_who_we_are_2})` }}></div>

          </div>

          <div className='left_div w-full lg:w-[50%]'>
            <div className='md:px-[30px] md:py-[50px] mx-[40px]'>
              <div className='text-[#EC2C05] text-[17px] flex justify-center lg:block font-semibold my-[20px]'>
                <h1>OUR WORK PROCESS</h1>
              </div>
              <div className='flex justify-center lg:block'>
                <h1 className='text-[30px] text-white font-semibold'>The Perfect Solution For All Art Service</h1>
              </div>
              <div className='mt-[40px]'>
                <div className='sm:flex flex-wrap sm:flex-nowrap  justify-between my-[20px]'>
                  <div className='sm:flex items-center w-full sm:min-w-[180px]  grow shrink basis-0 mt-[20px]'>
                    <div className='text-[#EC2C05] mr-[20px] flex justify-center sm:block'><BiSearchAlt2 size={50} /></div>
                    <div className='text-[23px] text-white font-bold flex justify-center sm:block'><span>Client &nbsp;</span> <br />
                      <span>Enquiry</span>
                    </div>
                  </div>
                  <div className='sm:flex items-center w-full sm:w-[253px] grow shrink basis-0 mt-[20px]'>
                    <div className='text-[#EC2C05] mr-[20px] flex justify-center sm:block'><SlPeople size={50} /></div>
                    <div className='text-[23px] text-white font-bold flex justify-center sm:block'><span>Direct</span> <br />
                      <span>Communication</span>
                    </div>
                  </div>
                </div>
                <div className='sm:flex flex-wrap md:flex-nowrap justify-between my-[20px]'>
                  <div className='sm:flex items-center w-full sm:min-w-[180px] grow shrink basis-0 mt-[20px]'>
                    <div className='text-[#EC2C05] mr-[20px] flex justify-center sm:block'><HiOutlineCursorArrowRipple size={50} /></div>
                    <div className='text-[23px] text-white font-bold flex justify-center sm:block'><span>Select</span> <br />
                      <span>Design</span>
                    </div>
                  </div>
                  <div className='sm:flex items-center w-full sm:w-[253px] grow shrink basis-0 mt-[20px]'>
                    <div className='text-[#EC2C05] mr-[20px] flex justify-center sm:block'><SlScreenDesktop size={50} /></div>
                    <div className='text-[23px] text-white font-bold flex justify-center sm:block'><span>Design</span> <br />
                      <span>Development</span>
                    </div>
                  </div>
                </div>
                <div className='sm:flex flex-wrap md:flex-nowrap justify-between my-[20px]'>
                  <div className='sm:flex items-center w-full sm:min-w-[180px] grow shrink basis-0 mt-[20px]'>
                    <div className='text-[#EC2C05] mr-[20px] flex justify-center sm:block'><FaKiwiBird size={50} /></div>
                    <div className='text-[23px] text-white font-bold flex justify-center sm:block'><span>On Site</span> <br />
                      <span>Work</span>
                    </div>
                  </div>
                  <div className='sm:flex items-center w-full sm:w-[253px] grow shrink basis-0 mt-[20px]'>
                    <div className='text-[#EC2C05] mr-[20px] flex justify-center sm:block'><TbStars size={50} /></div>
                    <div className='text-[23px] text-white font-bold flex justify-center sm:block'><span>Finish Work</span> <br />
                      <span>& Feedback</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Review />
      <Footer />
    </div>
  );
}
export default Services;