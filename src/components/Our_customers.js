import React from 'react'
import our_customers from "./images/our_customers.jpg"
//icons
import { AiFillYoutube } from "react-icons/ai"
import { BsPersonFill } from "react-icons/bs"
import {BiBuilding} from "react-icons/bi"
import {TbBuildingCommunity} from "react-icons/tb"
import {GoThumbsup} from "react-icons/go"

const Our_customers = () => {
    return (
        <div>
            <section>
                <div className='h-[600px] w-full flex items-center relative' style={{ backgroundImage: `url(${our_customers})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className='w-full h-full bg-[#010C1B] opacity-80 absolute '></div>
                    <div className='w-full p-[10px]  z-10'>
                        <div className='w-full h-full mb-[30px]'>
                            <div className='text-[#F63102] w-full flex justify-center'><AiFillYoutube size={80} /></div>
                        </div>
                        <div className='flex justify-center text-center mb-[20px]'>
                            <div className='text-white text-[39px] font-bold'>
                                <span className='leading-none'>Our Customers Tell Everything </span><br />
                                <span className='leading-none '>About Our Company</span>
                            </div>
                        </div>
                        <div className='text-center mt-[30px]'>
                            <h1 className='text-[14px] font-medium font-serif text-white'>LOOKING FOR THE MOST AMAZING AND EXCELLENT GRAFFITI ART SERVICES IN DELHI NCR, GURGAON THEN YOU ARE AT THE RIGHT PLACE. WE ARE A PROFESSIONAL WALL ART COMPANY THAT ARE WORKING SINCE PAST MANY YEARS AND MAKING THE CUSTOMERS HAPPY.</h1>
                        </div>

                    </div>
                </div>
            </section>

            <section className='px-[20px]  flex justify-center mb-[50px] mt-[-50px] '>
                <div className='  w-[80%] z-10 '>
                    <div className='flex justify-center shadow-md py-[20px] px-[15px] w-full bg-white  ' >
                        <div className='flex w-full'> 
                            <div className='text-[#EC2C05]'><BsPersonFill size={50} /></div>
                            <div className='text-center w-full'>
                                <div className='text-[#021D36] text-[26px] font-bold tracking-widest'>12000+</div>
                                <div>Happy Customers</div>
                            </div>
                        </div>
                        <div className='flex w-full'> 
                            <div className='text-[#EC2C05]'><BiBuilding size={50} /></div>
                            <div className='text-center w-full'>
                                <div className='text-[#021D36] text-[26px] font-bold tracking-widest'>12000+</div>
                                <div>Outdoor projects</div>
                            </div>
                        </div>
                        <div className='flex w-full'> 
                            <div className='text-[#EC2C05]'><TbBuildingCommunity size={50} /></div>
                            <div className='text-center w-full'>
                                <div className='text-[#021D36] text-[26px] font-bold tracking-widest'>12000+</div>
                                <div>Indoor projects</div>
                            </div>
                        </div>
                        <div className='flex w-full'> 
                            <div className='text-[#EC2C05]'><GoThumbsup size={50} /></div>
                            <div className='text-center w-full'>
                                <div className='text-[#021D36] text-[26px] font-bold tracking-widest'>12000+</div>
                                <div>Finished projects</div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Our_customers