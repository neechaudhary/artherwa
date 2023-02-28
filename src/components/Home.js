import hero_image from './images/bbnnn-4-scaled.jpg';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Google_maps from './Google_maps';
import Hero_page from './Hero_page';

function Home(){
    return (
        <div>
            <Navbar/>
            <Hero_page />
            {/* <div className='w-full h-[100vh] xl:h-[110vh] bg-cover bg-top overflow-y-hidden' style={{backgroundImage: `url(${hero_image})`}}>
                <div className='min-h-[150vh] w-full bg-black/30'>
                    <div className='max-w-[1200px] m-auto flex h-[100vh] xl:min-h-[110vh]'>
                        <div className='md:w-1/2 flex flex-col justify-center min-h-full p-6'>
                            <p className='text-[16px] font-semibold text-white'>ALL TYPE ART SOLUTION</p>
                            <p className='text-[#05132a] text-[45px] leading-[68px] font-black my-8'>BEST GRAFFITI ARTIST IN DELHI NCR, INDIA</p>
                            <p className='text-[13px] leading-[17px] text-white font-medium mt-4'>Artherwa Brings People a Fast, Affordable, and High-Quality Solution For All Of Their Interior Or Exterior Residential, Commercial And Industrial Art Projects. We Respect Your Time As Much As You Do And Provide The Quality Art Job You Expect, In a Timeline That Is Unexpected.</p>
                            <button className='h-[47px] w-[180px] rounded-sm bg-[#F23E03] hover:bg-[#06BCF8] hover:transition-all text-white text-[23px] px-6 grow-0 shrink-0 mt-12'>Learn More</button>
                        </div>
                        <div className='w-0 md:w-1/2'></div>
                    </div>
                </div>
            </div> */}
            <Footer/>
        </div>
    )
}
export default Home;