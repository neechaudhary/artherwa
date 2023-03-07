import React from 'react'
import hero_image from "./images/hero_image.jpg"
import { BiPhoneCall } from "react-icons/bi"

import About_main_page from './About_main_page'

const Hero_page = () => {
    return (
        <div>
            <section style={{ backgroundImage: `url(${hero_image})`, backgroundRepeat: "no-repeat", backgroundSize: "100%",  }} className='md:min-h-[540px] lg:min-h-[600px] flex  w-full relative '>
                <div className='bg-[#01060F9C] opacity-50 absolute top-0 left-0 w-full h-full'></div>
                <div className='w-full flex items-center'>
                    <div className='w-full flex z-10'>
                        <div className='left-hero w-full md:w-[54%]'>
                            <div className=' m-auto md:ml-[70px] p-[10px]  mb-[10px] w-full '>
                                <div>
                                    <h6 className='text-[#ffffff] text-[16px] font-semibold leading-none tracking-wider' >ALL TYPE ART SOLUTION</h6>
                                </div>
                                <div className='mb-[10px] w-full'>
                                    <div className='mt-[20px] text-[23px] xl:text-[55px]'>
                                        <h1 className='text-[#05132A] font-sans  font-black leading-[1.5em] tracking-[1.5px]'>BEST GRAFFITI ARTIST IN DELHI NCR, INDIA</h1>
                                    </div>
                                </div>
                                <div className='mb-[10px]  text-justify w-full'>
                                    <div className='text-[#ffffff] text-[13px] font-[500] leading-[1.3em] tracking-[1.7px] mt-[40px] mr-[50px] break-words'>
                                        <h6>Artherwa Brings People a Fast, Affordable, and High-Quality Solution For All Of Their Interior Or Exterior Residential, Commercial And Industrial Art Projects. We Respect Your Time As Much As You Do And Provide The Quality Art Job You Expect, In a Timeline That Is Unexpected.</h6>
                                    </div>

                                </div>
                                <div className='w-full '>
                                    <div className='mt-[40px]  w-full '>
                                        <div className='text-[23px] bg-[#F23E03] no-underline text-[#ffffff] px-[24px] py-[12px] text-center break-words w-[180px]'>
                                            <a href="" className=''>Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right_hero w-[46%] hidden md:block'>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full mt-[0px] md:mt-[-24px]  md:mb-[50px]'>
                <div className=' w-full flex '>
               
                    <div className='max-w-[400px] sm:max-w-[600px] z-10 relative top-[0px] left-[0px] md:left-[100px]'>
                        <div className='w-full mx-[50px] bg-[#061E3F] p-[10px] content-start'>
                            <div className='mb-[10px] w-full '>
                                <div className='mt-[20px] ml-[70px]'>
                                    <h5 className='text-[16px] text-white font-semibold tracking-wider'>
                                        Quick Service On Call
                                    </h5>

                                </div>

                            </div>
                            <div className='w-full'>
                                <div className='ml-[50px]'>
                                    <div className='flex flex-row text-left items-start'>
                                        <div className='flex items-center mr-[15px]'><BiPhoneCall size={30} className="text-red-400" /></div>
                                        <div className='text-[23px] text-white font-semibold '>
                                            <h3 className='text-left'>
                                                +91 9999 999 999
                                            </h3>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <About_main_page />
        </div>
    )
}

export default Hero_page