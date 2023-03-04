import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
//images
import contact_bg from './images/contact_bg.jpg';
import port_wall from './images/port_wall.webp'
import port_wall2 from './images/port_wall_2.webp'
import port_buddha from './images/port_buddha.webp'
import port_doodle_2 from './images/port_doodle_2.webp'
import port_doodle from './images/port_doodle.webp'
import port_canvas_2 from './images/port_canvas_2.webp'
import port_installation from './images/port_installation.webp'
import port_installation_2 from './images/port_installation_2.webp'
import prot_mahadev from './images/port_mahadev.webp'
import prot_portrait from './images/port_portrait.webp'
import prot_portrait_2 from './images/port_portrait_2.webp'
import prot_relief_2 from './images/port_relief_2.webp'
import prot_relief from './images/port_relief.webp'
import port_sculpture_2 from './images/port_sculpture_2.webp'
import port_sculpture from './images/port_sculpture.webp'
import port_sketch_2 from './images/port_sketch_2.webp'
import port_graffiti_2 from './images/port-graffiti_2.webp'
import port_graffiti from './images/port-graffiti.webp'
import Canvas_Painting from './images/Canvas-Painting.jpg'
import sketch from './images/relief.webp'
import wall_hulk from './images/port_3d_wall-2.webp'
import wall_panda from './images/panda.webp'



function Portfolio() {
  return (
    <div>
      <Navbar />
      {/* ========upper part start========= */}
      <div className="bg-center bg-cover" style={{ backgroundImage: `url(${contact_bg})` }}>
        <div className="bg-[#010C1D] h-[218px] opacity-90 px-4">
          <div className="max-w-[1200px] m-auto flex flex-col justify-center h-full">
            <p className="text-[20px] font-semibold text-white">Portfolio</p>
            <div className="w-[100px] h-[4px] bg-[#ff3a02] my-5"></div>
            <Link className="text-white active:border-white border-[#010C1D] border  text-[14px] w-[400px]" to="/">A portfolio is a virtual gallery—a place to put your work so it can be accessed and shared with the world.</Link>
          </div>
        </div>
      </div>
      {/* ========upper part end========= */}

      {/* ==========portfolio section start=========== */}
      <section className='px-[30px]'>
        <div>
          <div className='space_section w-full h-[20px]'></div>
          <div className='main_heading_container flex'>
            <div className='grow'>
              <div className='mb-[10px]'>
                <h1 className='text-[20px] font-semibold text-[#333]'>Wall painting</h1>
              </div>
              <div className='mb-[20px] text-[#4a4a4a] text-justify tracking-wider'>
                <p>Wall Art is essential for creating an aesthetically pleasing atmosphere in your home and office. Wall art is a form of self-expression and a way to put your personality in your space. Visit our website for more details. Call us today on +91 9999630404</p>
              </div>
            </div>
            <div className='w-[0px] md:w-[300px] lg:w-[600px] shrink-0 mb-[20px]'></div>
          </div>
          <div className='mb-[80px] flex flex-wrap '>
            <div className=' w-full md:w-[50%] '>
              <div className='w-full mb-[20px]'>
                <img src={port_wall} alt="" />
              </div>
            </div>
            <div className='w-full md:w-[50%]'>
              <div className='w-full mb-[20px]'>
                <img src={port_wall2} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className='space_section w-full h-[20px]'></div>
          <div className='main_heading_container flex'>
            <div className='grow'>
              <div className='mb-[10px]'>
                <h1 className='text-[20px] font-semibold text-[#333]'>Graffiti</h1>
              </div>
              <div className='mb-[20px] text-[#4a4a4a] text-justify tracking-wider'>
                <p>If you are planning to open up a grand bar, cafe,restaurant,hotel, etc. in Delhi NCR, Gurgaon, India and you need the best Graffiti services in India for that, then you are at the right place as the perfect place for you to get the services done from is ArtHerwa.</p>
              </div>
            </div>
            <div className='w-[0px] md:w-[300px] lg:w-[600px] shrink-0 mb-[20px]'></div>
          </div>
          <div className='mb-[80px] flex flex-wrap '>
            <div className=' w-full md:w-[50%] '>
              <div className='w-full mb-[20px]'>
                <img src={port_graffiti} alt="" />
              </div>
            </div>
            <div className='w-full md:w-[50%]'>
              <div className='w-full mb-[20px]'>
                <img src={port_graffiti_2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='space_section w-full h-[20px]'></div>
          <div className='main_heading_container flex'>
            <div className='grow'>
              <div className='mb-[10px]'>
                <h1 className='text-[20px] font-semibold text-[#333]'>Sculpture</h1>
              </div>
              <div className='mb-[20px] text-[#4a4a4a] text-justify tracking-wider'>
                <p>We are a group of Sculpture manufacturers. We can create fiber, metal, wood, stone, clay sculptures for you at affordable prices.</p>
              </div>
            </div>
            <div className='w-[0px] md:w-[300px] lg:w-[600px] shrink-0 mb-[20px]'></div>
          </div>
          <div className='mb-[80px] flex flex-wrap '>
            <div className=' w-full md:w-[50%] '>
              <div className='w-full mb-[20px]'>
                <img src={port_sculpture} alt="" />
              </div>

            </div>
            <div className='w-full md:w-[50%]'>
              <div className='w-full mb-[20px]'>
                <img src={port_sculpture_2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='space_section w-full h-[20px]'></div>
          <div className='main_heading_container flex'>
            <div className='grow'>
              <div className='mb-[10px]'>
                <h1 className='text-[20px] font-semibold text-[#333]'>Canvas Pringting</h1>
              </div>
              <div className='mb-[20px] text-[#4a4a4a] text-justify tracking-wider'>
                <p>Artherwa provides Professional Best Canvas Artist in Delhi NCR. Book with Artherwa for Canvas painting. Make your life easier.</p>
              </div>
            </div>
            <div className='w-[0px] md:w-[300px] lg:w-[600px] shrink-0 mb-[20px]'></div>
          </div>
          <div className='mb-[80px] flex flex-wrap '>
            <div className=' w-full md:w-[50%] '>
              <div className='w-full mb-[20px]'>
                <img src={Canvas_Painting} alt="" />
              </div>
            </div>
            <div className='w-full md:w-[50%]'>
              <div className='w-full mb-[20px]'>
                <img src={port_canvas_2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='space_section w-full h-[20px]'></div>
          <div className='main_heading_container flex'>
            <div className='grow'>
              <div className='mb-[10px]'>
                <h1 className='text-[20px] font-semibold text-[#333]'>Relief Art</h1>
              </div>
              <div className='mb-[20px] text-[#4a4a4a] text-justify tracking-wider'>
                <p>Artherwa provides Professional Best Relief Services in Delhi NCR. Book with Artherwa Relief Artists to make your wall decorative.</p>
              </div>
            </div>
            <div className='w-[0px] md:w-[300px] lg:w-[600px] shrink-0 mb-[20px]'></div>
          </div>
          <div className='mb-[80px] flex flex-wrap '>
            <div className=' w-full md:w-[50%] '>
              <div className='w-full mb-[20px]'>
                <img src={prot_relief} alt="" />
              </div>
            </div>
            <div className='w-full md:w-[50%]'>
              <div className='w-full mb-[20px]'>
                <img src={prot_relief_2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='space_section w-full h-[20px]'></div>
          <div className='main_heading_container flex'>
            <div className='grow'>
              <div className='mb-[10px]'>
                <h1 className='text-[20px] font-semibold text-[#333]'>Sketch</h1>
              </div>
              <div className='mb-[20px] text-[#4a4a4a] text-justify tracking-wider'>
                <p>Artherwa provides Professional Best Sketch Artists for hire in Delhi NCR. Book with Artherwa for Sketch Artists.</p>
              </div>
            </div>
            <div className='w-[0px] md:w-[300px] lg:w-[600px] shrink-0 mb-[20px]'></div>
          </div>
          <div className='mb-[80px] flex flex-wrap '>
            <div className=' w-full md:w-[50%] h-[411px] '>
              <div className='w-full mb-[20px] h-full'>
                <img src={sketch} alt="" className='h-full'/>
              </div>
            </div>
            <div className='w-full md:w-[50%] h-[411px]'>
              <div className='w-full mb-[20px] h-full flex justify-center'>
                <img src={port_sketch_2} alt=""  className='h-full bg-contain'/>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='space_section w-full h-[20px]'></div>
          <div className='main_heading_container flex'>
            <div className='grow'>
              <div className='mb-[10px]'>
                <h1 className='text-[20px] font-semibold text-[#333]'>Portrait</h1>
              </div>
              <div className='mb-[20px] text-[#4a4a4a] text-justify tracking-wider'>
                <p>Artherwa provides Professional Best Portrait Artist in Delhi NCR. Book with Artherwa for Portrait Artist. Artherwa is here to make your life easier.</p>
              </div>
            </div>
            <div className='w-[0px] md:w-[300px] lg:w-[600px] shrink-0 mb-[20px]'></div>
          </div>
          <div className='mb-[80px] flex flex-wrap '>
            <div className=' w-full md:w-[50%] '>
              <div className='w-full mb-[20px]'>
                <img src={prot_portrait} alt="" />
              </div>
            </div>
            <div className='w-full md:w-[50%]'>
              <div className='w-full mb-[20px]'>
                <img src={prot_portrait_2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='space_section w-full h-[20px]'></div>
          <div className='main_heading_container flex'>
            <div className='grow'>
              <div className='mb-[10px]'>
                <h1 className='text-[20px] font-semibold text-[#333]'>Doodle art</h1>
              </div>
              <div className='mb-[20px] text-[#4a4a4a] text-justify tracking-wider'>
                <p>If you want an amazing doodle artwork that stands out from the competition, work with a professional artist of ArtHerwa. Hire an Artist to make your vision come to life, or host a design contest and get ideas from designers around the world.</p>
              </div>
            </div>
            <div className='w-[0px] md:w-[300px] lg:w-[600px] shrink-0 mb-[20px]'></div>
          </div>
          <div className='mb-[80px] flex flex-wrap '>
            <div className=' w-full md:w-[50%] '>
              <div className='w-full mb-[20px]'>
                <img src={port_doodle} alt="" />
              </div>
            </div>
            <div className='w-full md:w-[50%]'>
              <div className='w-full mb-[20px]'>
                <img src={port_doodle_2} alt="" />
              </div>
            </div>
          </div>
        </div>

        
        <div>
          <div className='space_section w-full h-[20px]'></div>
          <div className='main_heading_container flex'>
            <div className='grow'>
              <div className='mb-[10px]'>
                <h1 className='text-[20px] font-semibold text-[#333]'>Installation</h1>
              </div>
              <div className='mb-[20px] text-[#4a4a4a] text-justify tracking-wider'>
                <p>Artherwa provides Professional Best Installation Artists for hire in Delhi NCR. Book with Artherwa Installation Artist in Delhi NCR.</p>
              </div>
            </div>
            <div className='w-[0px] md:w-[300px] lg:w-[600px] shrink-0 mb-[20px]'></div>
          </div>
          <div className='mb-[80px] flex flex-wrap '>
            <div className=' w-full md:w-[50%] '>
              <div className='w-full mb-[20px]'>
                <img src={port_installation} alt="" />
              </div>
            </div>
            <div className='w-full md:w-[50%]'>
              <div className='w-full mb-[20px]'>
                <img src={port_installation_2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='space_section w-full h-[20px]'></div>
          <div className='main_heading_container flex'>
            <div className='grow'>
              <div className='mb-[10px]'>
                <h1 className='text-[20px] font-semibold text-[#333]'>3D wall printing</h1>
              </div>
              <div className='mb-[20px] text-[#4a4a4a] text-justify tracking-wider'>
                <p>Artherwa provides Professional Best 3D Wall Artist in Delhi NCR. Book with Artherwa for 3D Wall painting. ArtHerwa is Make your life easier.</p>
              </div>
            </div>
            <div className='w-[0px] md:w-[300px] lg:w-[600px] shrink-0 mb-[20px]'></div>
          </div>
          <div className='mb-[80px] flex flex-wrap items-stretch'>
            <div className=' w-full md:w-[50%] flex justify-center'>
              <div className='grow  w-full mb-[20px] h-[500px] md:h-auto bg-contain bg-no-repeat bg-center' style={{backgroundImage: `url(${wall_panda})`}}>
                {/* <img src={wall_panda} alt="" className='bg-cover'/> */}
              </div>
            </div>
            <div className='w-full md:w-[50%] '>
              <div className='w-full mb-[20px] '>
                <img src={wall_hulk} alt=""  className=' '/>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ==========portfolio section end=========== */}



      <Footer />
    </div>
  );
}
export default Portfolio;