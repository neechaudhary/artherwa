import React from 'react'
import Swiper_example from './Swiper_example'
import just_dial from './images/just_dial.webp'
import google from './images/google.jpg'
import ecom_img from './images/ecom_img.webp'
import jawa_img from './images/jawa_img.webp'
import burger_company from './images/burger_company.webp'
import team_core from './images/team_core.webp'
import emblem from './images/emblem.webp'




const Review = () => {
    return (
        <div>
            <section className='mt-[30px]'>
                <div className='flex flex-col text-center'>
                    <div className='text-[#FF1E00] text-[15px] font-medium'>CLIENT REVIEWS</div>
                    <div className='text-[#033957] text-[39px] font-semibold'>What People & Client Think About Us ?</div>
                    <div className='text-[#6F6B6B] text-[14px] font-sans'>ArtHerwa - Best Wall Art and Graffiti Artist in Gurgaon, Delhi NCR, India</div>
                </div>
                <div className='mt-[50px]'>
                    <Swiper_example />
                </div>
            </section>
            <section className='my-[40px] mt-[40px]'>
                <div className='text-center my-[30px]'>
                    <h1>SEE OUR REVIEWS ON</h1>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[130px] h-[123px]'>
                        <img src={just_dial} alt="just dial image" />
                    </div>
                    <div className='w-[130px] h-[123px]'>
                        <img src={google} alt="just dial image" />
                    </div>
                </div>

            </section>
            

            <section className='my-[40px] mt-[40px]'>
            <div className='text-center my-[30px]'>
                    <h1>SEE OUR REVIEWS ON</h1>
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
        </div>
    )
}

export default Review