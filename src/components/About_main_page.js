import React from 'react'
import panda_img from "./images/panda.webp"
import king_painting from "./images/king_painting.webp"
import {AiOutlineCheck} from "react-icons/ai"
import What_offer from './What_offer'



const About_main_page = () => {
    return (
        <div>
            <div className='flex flex-wrap xl:flex-nowrap '>
                <div className=' w-full xl:w-1/2 pt-[20px] order-2 xl:order-none'>
                    <div className='flex flex-wrap md:flex-nowrap'>
                        <div className='flex flex-col  md:justify-end w-full md:w-1/2'>
                            <div className='xl:h-[80%] h-full mb-[20px] md:mb-[0px]'>
                                <img src={panda_img} alt="panda image" className="h-full m-auto" />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img src={king_painting} alt="king painting" className="h-full m-auto" />
                        </div>
                    </div>
                    <div className='relative top-[0px] md:top-[-100px] flex justify-end'>
                        <div className='w-full md:w-[600px] xl:w-[400px] p-10 bg-[#02152F] flex flex-col justify-center'>
                            <div className='font-bold text-[#fd4306] text-[35px]'>10+ Years</div>
                            <div className='text-white text-[30px] font-bold'>Working Experience</div>

                        </div>
                    </div>
                </div>
                <div className=' w-full xl:w-1/2  md:p-4 ml-4 order-1 xl:order-none '>
                    <div className='mb-[20px]'>
                        <h1 className='text-[25px] text-[#E64306] font-semibold font-sans'>About Us</h1>
                    </div>
                    <div className='text-[#033957] text-[39px] font-bold mb-[20px]'>
                        <h1>Best Wall Art & Graffiti Designers in Delhi NCR</h1>
                    </div>
                    <div className='mb-[20px]'>
                        <div className='mt-[15px]'>
                            <h1 className='text-[#989595] text-[15px]'>When it comes to professional Wall art company, ArtHerwa is your premier provider of the highest quality wall art and graffiti services in the Gurgaon and Delhi NCR areas.
                                We do all kinds of commission jobs related to aerosol art: Graffiti art, 3d painting, canvas painting, wall art, wall painting, wall decor, sketch, portrait, caricature, digital illustration, set design, live events, murals art, sculpture, relif, calligraphy, artwork on vehicles and much more.
                            </h1>
                        </div>
                    </div>
                    <div className='mb-[20px]'>
                        <div className='text-[#353333] font-semibold text-[19px]'>Our Mission </div>
                        <div className='flex flex-wrap lg:flex-nowrap'>
                            <div>
                                <div className='flex'>
                                <span><AiOutlineCheck size={30} className="text-[#E64306] mr-[10px]"/></span><p className='text-[#686565] font-semibold text-[18px]'>Wide Range of Services</p>
                                </div>
                                <div className='flex'>
                                <span><AiOutlineCheck size={30} className="text-[#E64306] mr-[10px]"/></span><p className='text-[#686565] font-semibold text-[18px]'>No Compromise on Qualtiy</p>
                                </div>
                                <div className='flex'>
                                <span><AiOutlineCheck size={30} className="text-[#E64306] mr-[10px]"/></span><p className='text-[#686565] font-semibold text-[18px]'>100% Satisfaction Guranteed</p>
                                </div>
                            </div>
                            <div>
                            <div className='flex'>
                                <span><AiOutlineCheck size={30} className="text-[#E64306] mr-[10px]"/></span><p className='text-[#686565] font-semibold text-[18px]'>100% Understand Your Work Need</p>
                                </div>
                                <div className='flex'>
                                <span><AiOutlineCheck size={30} className="text-[#E64306] mr-[10px]"/></span><p className='text-[#686565] font-semibold text-[18px]'>100% Affordable Prices</p>
                                </div>
                                <div className='flex'>
                                <span><AiOutlineCheck size={30} className="text-[#E64306] mr-[10px]"/></span><p className='text-[#686565] font-semibold text-[18px]'>100% No Excuses</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div>
                        <button className='bg-[#E64306] text-white px-4 py-2 font-semibold text-[18px]'>Know Us More</button>
                    </div>
                </div>
            </div>
            {/* ======space seciton======= */}
            <div className='w-full h-[25px]'></div>
            <What_offer />
        </div>
    )
}

export default About_main_page