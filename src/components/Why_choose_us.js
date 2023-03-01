import React from 'react'
import why_choose_us from "./images/why_choose_us.webp"
import { AiOutlineArrowRight } from 'react-icons/ai'


//icons
import { SlPeople } from 'react-icons/sl'
import { TiMessages } from 'react-icons/ti'
import { AiTwotoneStar } from "react-icons/ai"
import { GiWallet } from "react-icons/gi"

const Why_choose_us = () => {
    return (
        <div>
            <section className='bg-[#03203C] mt-[50px]'>
                <div className='flex  h-full items-center '>
                    <div className='left_div w-[50vw] lg:w-[48%] px-[30px]  ml-[30px]'>
                        <div>
                            <div className='text-[20px] text-[#EC2C05] font-semibold'>
                                <h1>WHY CHOOSE US</h1>
                            </div>
                            <div className='text-white text-[29px] font-semibold tracking-wider font-sans mb-[10px]'>
                                <h1>The Perfect Solution For All Art Service</h1>
                            </div>
                            <div className='text-white text-[12px] font-semibold tracking-wider'>
                                <h1>FOR PROVIDING THE BEST TO YOU, WE HAVE A TEAM OF PROFESSIONAL ARTIST. OUR EXPERTS ARE TRAINED SO THAT THEY CAN EASILY GIVE THEIR BEST TO YOU AND MAKE YOU SATISFIED WITH THE SERVICES.</h1>
                            </div>
                            <div className='flex flex-wrap justify-between mt-[20px]'>
                                <div className='flex items-center justify-center w-[208px]'>
                                    <div className='text-[#EC2C05] mr-[20px]'><SlPeople size={50} /></div>
                                    <div className='text-white text-[23px] font-semibold'>
                                        <span>Expert &</span><br />
                                        <span>Professional</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center w-[208px]'>
                                    <div className='text-[#EC2C05] mr-[20px]'><TiMessages size={50} /></div>
                                    <div className='text-white text-[23px] font-semibold'>
                                        <span>Free</span><br />
                                        <span>consultation</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-between mt-[20px]'>
                                <div className='flex items-center justify-center w-[208px]'>
                                    <div className='text-[#EC2C05] mr-[20px]'><AiTwotoneStar size={50} /></div>
                                    <div className='text-white text-[23px] font-semibold'>
                                        <span>Best Quality</span><br />
                                        <span>Service</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center w-[208px]'>
                                    <div className='text-[#EC2C05] mr-[20px]'><GiWallet size={50} /></div>
                                    <div className='text-white text-[23px] font-semibold'>
                                        <span>Affordable</span><br />
                                        <span>Pricing</span>
                                    </div>
                                </div>
                            </div>
                          
                            <div className='my-[35px]'>
                                <h1 className='text-white font-semibold text-[14px] text-justify'>
                                WE HAVE WIDE RANGE OF SERVICES AND ALL OF THEM ARE THE BEST AS WE ONLY PROMISE WHAT WE GIVE TO YOU AND WE CAN PROUDLY SAY THAT WE FULFILL ALL THE PROMISES  THAT WE MAKE WITH THE CUSTOMERS AT THE TIME OF HIRING. THOUSANDS OF THE CUSTOMERS TRY US AND WHEN WE WORK FOR THEM, THEY FEEL GLAD THAT THEY HAVE HIRED US.
                                </h1>
                            </div>
                            <div className='mt-[30px] flex items text-[#EC2C05] font-semibold tracking-wider'>
                                <h1 className='flex items-center'>Know More <span className='ml-[10px]'><AiOutlineArrowRight size={20}/></span></h1>

                            </div>

                        </div>

                    </div>
                    <div className='right_div w-[50vw] '>
                        <div className='p-[10px]'>
                           <img src={why_choose_us} alt="why choose us image" />
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Why_choose_us