import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
// import { GrUserManager } from "react-icons/gr"
import { HiOutlineCursorArrowRipple } from "react-icons/hi2"
import { SlScreenDesktop, SlPeople } from "react-icons/sl"
import { FaKiwiBird } from "react-icons/fa"
import { TbStars } from "react-icons/tb"
import Our_customers from './Our_customers'
import Swiper_example from './Swiper_example'
import Review from './Review'

const Work_process = () => {
    return (
        <div>
            <Our_customers/>
            <section>
                <div className='flex w-full  h-[633px] bg-[#03203C]'>
                    <div className='left_div  w-1/2'>
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
                    <div className='right_div w-1/2 flex items-center bg-[#D8D8D8]'>
                        <div className='px-[40px] py-[30px] w-full flex  flex-col'>
                            <div className='w-full  my-[20px] '>
                                <input type="text" placeholder='Name' className='w-full h-[30px] p-[20px] border-solid border-[#c0c0c0]' />
                            </div>
                            <div className='w-full  my-[20px]'>
                                <input type="text" placeholder='Email Address' className='w-full h-[30px] p-[20px] border-solid border-[#c0c0c0]' />
                            </div>
                            <div className='w-full  my-[20px]'>
                                <input type="text" placeholder='Phone number' className='w-full h-[30px] p-[20px] border-solid border-[#c0c0c0]' />
                            </div>
                            <div className='w-full   my-[20px]'>
                                <textarea rows="4" cols="50" type="text" placeholder='Enter message' className='w-full  p-[20px] border-solid border-[#c0c0c0]' />
                            </div>
                            <div className=''>
                            <button className='bg-[#EC2C05] text-white py-2 px-4 text-[14px] font-medium'> Request Quotes</button>
                        </div>
                        </div>
                        
                    </div>
                   
                </div>
            </section>
           <Review />
        </div>
    )
}

export default Work_process