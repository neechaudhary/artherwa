import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import contact_bg from './images/contact_bg.jpg';
import about_choose_us from './images/about_choose_us.webp';
import about_who_we_are from './images/about-who_we_are.webp';
import about_us_who_we_are_2 from './images/about_us_who_we_are_2.webp';
import about_us_who_we_are_3 from './images/about_us_who_we_are_3.webp';

import { AiOutlineCheck } from "react-icons/ai"

import { HiOutlineCursorArrowRipple } from "react-icons/hi2"
import { SlScreenDesktop, SlPeople } from "react-icons/sl"
import { FaKiwiBird } from "react-icons/fa"
import { TbStars } from "react-icons/tb"
import { BiSearchAlt2 } from "react-icons/bi"

import just_dial from './images/just_dial.webp'
import google from './images/google.jpg'
import ecom_img from './images/ecom_img.webp'
import jawa_img from './images/jawa_img.webp'
import burger_company from './images/burger_company.webp'
import team_core from './images/team_core.webp'
import emblem from './images/emblem.webp'






function About() {
  return (
    <div>
      <Navbar />
      {/* =====upper part start===== */}
      <div className="bg-center bg-cover" style={{ backgroundImage: `url(${contact_bg})` }}>
        <div className="bg-[#010C1D] h-[218px] opacity-90 px-4">
          <div className="max-w-[1200px] m-auto flex flex-col justify-center h-full">
            <p className="text-[20px] font-semibold text-white">About Us</p>
            <div className="w-[100px] h-[4px] bg-[#ff3a02] my-5"></div>
            <Link className="text-white active:border-white border-[#010C1D] border  text-[14px]" to="/">Click here to hire Best Graffiti Artist</Link>
          </div>
        </div>
      </div>
      {/* =====upper part end===== */}

      {/* ===========middle part start======= */}

      <section className='px-[30px]'>
        <div className='space-section w-full h-[40px]'> </div>

        <div className='flex mb-[20px]'>
          <div className='w-[46%]'>
            <div className='mb-[20px]'>
              <h1 className='text-[20px] text-[#E64306] font-medium font-sans'>About Us</h1>
            </div>
            <div className='text-[#033957] text-[39px] font-bold mb-[20px]'>
              <h1>Hire Artist for Wall Art  & Graffiti  in Delhi NCR</h1>
            </div>
          </div>
          <div className='w-[54%] mr-[20px]'>
            <div className='mt-[15px]'>
              <h1 className='text-[#837F7F] text-[16px] text-justify mb-[20px] tracking-wider'>Established in 2016, Our Company has years of Experience in Provide High-Quality Art Services no matter what you need for offices, Apartments, Villa or any Commercial Building. Our Expert artists are ready to serve you up to your 100% Satisfaction and We will be there till the Jobe is done.
              </h1>
              <h1 className='text-[#837F7F] text-[16px] text-justify mb-[20px] tracking-wider'>ArtHerwa brings people a fast, affordable, and high-quality solution for all of their Interior or Exterior Residental, Commercial, and Industrial Wall Decor projects. We respect your time as much as you do and provide the quality wall art job you expect, in a timeline that is unexpected.
              </h1>
            </div>
          </div>
        </div>

        <div className='flex '>
          <div className='w-[45%] h-[424px]'>
            <div className=''>
              <div className="h-[320px] bg-center bg-contain" style={{ backgroundImage: `url(${about_choose_us})`, backgroundRepeat: "no-repeat" }}></div>
            </div>

            <div className='top-[-44px] relative'>
              <div className='flex justify-center items-center bg-[#022853] w-[370px] h-[87px] text-[20px] text-white font-semibold'><span className='text-[#ff4400]'>10+ Years</span><span>&nbsp; of working experience</span></div>
            </div>
          </div>

          <div className='w-[55%] px-[40px] py-[30px]'>
            <div className='mb-[20px]'>
              <div className='text-[#353333] font-semibold text-[19px]'>Our Mission </div>
              <div className='flex justify-around flex-wrap lg:flex-nowrap'>
                <div>
                  <div className='flex h-[30px]'>
                    <span><AiOutlineCheck size={20} className="text-[#E64306] mr-[10px]" /></span><p className='text-[#686565] font-semibold text-[16px]'>Wide Range of Services</p>
                  </div>
                  <div className='flex h-[30px]'>
                    <span><AiOutlineCheck size={20} className="text-[#E64306] mr-[10px]" /></span><p className='text-[#686565] font-semibold text-[16px]'>No Compromise on Qualtiy</p>
                  </div>
                  <div className='flex h-[30px]'>
                    <span><AiOutlineCheck size={20} className="text-[#E64306] mr-[10px]" /></span><p className='text-[#686565] font-semibold text-[16px]'>100% Satisfaction Guranteed</p>
                  </div>
                  <div className='flex h-[30px]'>
                    <span><AiOutlineCheck size={20} className="text-[#E64306] mr-[10px]" /></span><p className='text-[#686565] font-semibold text-[16px]'>100% Satisfaction Guranteed</p>
                  </div>
                  <div className='flex h-[30px]'>
                    <span><AiOutlineCheck size={20} className="text-[#E64306] mr-[10px]" /></span><p className='text-[#686565] font-semibold text-[16px]'>100% Satisfaction Guranteed</p>
                  </div>
                </div>
                <div>
                  <div className='flex h-[30px]'>
                    <span><AiOutlineCheck size={20} className="text-[#E64306] mr-[10px]" /></span><p className='text-[#686565] font-semibold text-[16px]'>100% Understand Your Work Need</p>
                  </div>
                  <div className='flex h-[30px]'>
                    <span><AiOutlineCheck size={20} className="text-[#E64306] mr-[10px]" /></span><p className='text-[#686565] font-semibold text-[16px]'>100% Affordable Prices</p>
                  </div>
                  <div className='flex h-[30px]'>
                    <span><AiOutlineCheck size={20} className="text-[#E64306] mr-[10px]" /></span><p className='text-[#686565] font-semibold text-[16px]'>100% No Excuses</p>
                  </div>
                  <div className='flex h-[30px]'>
                    <span><AiOutlineCheck size={20} className="text-[#E64306] mr-[10px]" /></span><p className='text-[#686565] font-semibold text-[16px]'>100% No Excuses</p>
                  </div>
                  <div className='flex h-[30px]'>
                    <span><AiOutlineCheck size={20} className="text-[#E64306] mr-[10px]" /></span><p className='text-[#686565] font-semibold text-[16px]'>100% No Excuses</p>
                  </div>

                </div>
              </div>

            </div>
            <div>
              <div>
                <p className='mb-[20px] text-[#010101] font-bold font-sans'>We respect your time as much as you do and provide the quality wall painting job you expect, in a timeline that is unexpected.</p>
              </div>
              <div className=''>
                <p className=' text-[#494747] font-semibold'>Naveen kumar</p>
                <p className='text-[#494747] font-medium'>CEO and Founder</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='flex w-full  h-[633px] bg-[#03203C]'>
          <div className='left_div  w-[50%]'>
            <div className='p-[20px] mx-[40px]'>
              <div className='text-[#EC2C05] text-[17px] font-semibold my-[20px]'>
                <h1>OUR WORK PROCESS</h1>
              </div>
              <div>
                <h1 className='text-[30px] text-white font-semibold'>The Perfect Solution For All Art Service</h1>
              </div>
              <div className='mt-[40px]'>
                <div className='flex justify-between my-[20px]'>
                  <div className='flex items-center w-[253px]'>
                    <div className='text-[#EC2C05] mr-[20px]'><BiSearchAlt2 size={50} /></div>
                    <div className='text-[23px] text-white font-bold'><span>Client</span> <br />
                      <span>Enquiry</span>
                    </div>
                  </div>
                  <div className='flex items-center w-[253px]'>
                    <div className='text-[#EC2C05] mr-[20px]'><SlPeople size={50} /></div>
                    <div className='text-[23px] text-white font-bold'><span>Direct</span> <br />
                      <span>Communication</span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between my-[20px]'>
                  <div className='flex items-center w-[253px]'>
                    <div className='text-[#EC2C05] mr-[20px]'><HiOutlineCursorArrowRipple size={50} /></div>
                    <div className='text-[23px] text-white font-bold'><span>Select</span> <br />
                      <span>Design</span>
                    </div>
                  </div>
                  <div className='flex items-center w-[253px]'>
                    <div className='text-[#EC2C05] mr-[20px]'><SlScreenDesktop size={50} /></div>
                    <div className='text-[23px] text-white font-bold'><span>Design</span> <br />
                      <span>Development</span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between my-[20px]'>
                  <div className='flex items-center w-[253px]'>
                    <div className='text-[#EC2C05] mr-[20px]'><FaKiwiBird size={50} /></div>
                    <div className='text-[23px] text-white font-bold'><span>On Site</span> <br />
                      <span>Work</span>
                    </div>
                  </div>
                  <div className='flex items-center w-[253px]'>
                    <div className='text-[#EC2C05] mr-[20px]'><TbStars size={50} /></div>
                    <div className='text-[23px] text-white font-bold'><span>Finish Work</span> <br />
                      <span>& Feedback</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='right_div w-[50%]  items-center bg-[#03203C] flex justify-center'>
            <div className='w-[600px] h-[500px]  bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${about_choose_us})` }}></div>

          </div>

        </div>
      </section>

      <section>
        <div className='flex p-[30px]'>
          <div className='left_main_container w-[50%] p-[20px] flex items-center'>
            <div className='flex justify-between '>
              <div className='h-[400px] w-[45%] flex flex-col justify-center'>
                <img src={about_who_we_are} alt="" className='h-full' />
              </div>
              <div className='flex flex-col justify-between w-[45%]'>
                <div className='w-full h-[35%]'>
                  <img src={about_us_who_we_are_2} alt="" className='h-full w-full' />
                </div>
                <div className='w-full h-[55%]'>
                  <img src={about_us_who_we_are_3} alt="" className='h-full w-full'/>
                </div>
              </div>
            </div>
          </div>

          <div className='right_main_container w-[50%] px-[30px] py-[20px]'>
            <div className='mb-[20px]'>
              <h1 className='text-[20px] text-[#E64306] font-medium font-sans'>About Us</h1>
            </div>
            <div className='text-[#033957] text-[39px] font-bold mb-[20px]'>
              <h1>Hire Artist for Wall Art  & Graffiti  in Delhi NCR</h1>
            </div>
            <div className='mt-[20px] text-[#5B5959] tracking-widest text-justify'>
              <h1>
              The establishment of this as a firm was recent but we are working for the clients for the past 12 years. The market has grown from that time and so does we have moved further with capturing our endeavors. We are highly specialized in wall designing and painting. Our main USP. Is of spray paint. Although we do graffiti as well as any other sort of wall project. With time we have also started painting on canvas and have illustrations intact. We as a team are Naveen as the main controller with a fine art degree with our specialization in applied art & painting resp. Apart from that, there are other eight people who work with us according to the need of the project. Our clients include the giants like Dominoes, Bronzx café, Global Traveltech Pvt. Ltd., HOOQ, Chaplin Community House, force gym and spa, Walk in the woods, MoU Pvt. Ltd. & many more.
              </h1>
            </div> 
            <div className='space_section w-full h-[40px]'></div>
             {/* ======ranges start=== */}
          <div>
            <div className='text-[18px] font-bold'> Experienced</div>
            <div className='w-full'>
              <input type="range" min={0} max={100} value={90} className='w-full '/>
            </div>
            <div className='text-[18px] font-bold'> Professional</div>
            <div className='w-full'>
              <input type="range" min={0} max={100} value={85} className='w-full '/>
            </div>
            <div className='text-[18px] font-bold'> Skill</div>
            <div className='w-full'>
              <input type="range" min={0} max={100} value={97} className='w-full '/>
            </div>

          </div>
          {/* ========ranges end======= */}
          </div>
        
        </div>
      </section>

      <section className='my-[40px] mt-[40px]'>
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
      {/* ===========middle part end======= */}


      <Footer />
    </div>
  );
}
export default About;