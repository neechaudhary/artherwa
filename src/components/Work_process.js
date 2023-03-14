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
                <div className='flex flex-wrap w-full   bg-[#03203C]'>
                    <div className='left_div w-full  lg:w-1/2'>
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
                    <div className='right_div w-full lg:w-1/2 flex items-center bg-[#D8D8D8]'>
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