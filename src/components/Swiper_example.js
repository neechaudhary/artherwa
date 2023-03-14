import React from 'react'
import slider_img from "./images/slider_img.png"

//icons
import { AiFillStar } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  Autoplay } from 'swiper';
  // import required modules
  import { Pagination } from "swiper";

const Swiper_example = () => {


  SwiperCore.use([Autoplay]);
  return (
    <>
  <div className='my-[30px]'>
     <Swiper
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
      // spaceBetween={50}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 70,
        },
      }}
    >
      <SwiperSlide>
        <div className='border px-[30px]   py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angel chaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      

    </Swiper>
  </div>
  {/* <div className='my-[30px] hidden sm:block md:hidden'>
     <Swiper
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className='border px-[30px]   py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angel chaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      

    </Swiper>
  </div>
  <div className='my-[30px] hidden md:block lg:hidden'>
     <Swiper
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className='border px-[30px]   py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angel chaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      

    </Swiper>
  </div>
  <div className='my-[30px] hidden lg:block xl:hidden'>
     <Swiper
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className='border px-[30px]   py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angel chaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      

    </Swiper>
  </div>
  <div className='my-[30px] hidden xl:block 2xl:hidden'>
     <Swiper
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className='border px-[30px]   py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angel chaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      

    </Swiper>
  </div>
  <div className='my-[30px] hidden 2xl:block w-full'>
     <Swiper
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      className='w-[100%] h-[100%] '
    >
      <SwiperSlide>
        <div className='border px-[30px]   py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angel chaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='border shadow-md px-[30px] py-[40px]'>
          <div className=''>
            <div className='flex justify-center'>
              <img src={slider_img} alt="" />
            </div>
            <div className='my-[30px]'>
              <h1 className='text-[18px] font-bold flex  justify-center'>Angelchaudhary</h1>
              <p className='flex  justify-center text-[#6F6B6B]'>Founder</p>
            </div>
          </div>

          <div className='flex justify-center my-[30px]'>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
            <span className='text-[#EC2C05]'><AiFillStar size={20} /></span>
          </div>
          <div className='my-[30px] text-[#6F6B6B]'>
            <p>I highly recommend ArtHerwa. They arrived on time, completed the job quickly, and were very neat. I am very happy with the results.</p>
          </div>
        </div>
      </SwiperSlide>
      

    </Swiper>
  </div> */}
  </>
    
   
  )
}

export default Swiper_example