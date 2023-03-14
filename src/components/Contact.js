import Footer from "./Footer";
import Google_maps from "./Google_maps";
import Navbar from "./Navbar";
import contact_bg from './images/contact_bg.jpg';
import { Link } from "react-router-dom";
//icons
import { BsEnvelope } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi"
import { FaSearchLocation } from "react-icons/fa"
import Sahil_gmap from "./Sahil_gmap";

function Contact() {
    return (
        <div>
            <Navbar />
            {/* =====upper part start===== */}
            <div className="bg-center bg-cover" style={{ backgroundImage: `url(${contact_bg})` }}>
                <div className="bg-[#010C1D] h-[218px] opacity-90 px-4">
                    <div className="max-w-[1200px] m-auto flex flex-col justify-center h-full">
                        <p className="text-[20px] font-semibold text-white">Contact Us</p>
                        <div className="w-[100px] h-[4px] bg-[#ff3a02] my-5"></div>
                        <Link className="text-white active:border-white border-[#010C1D] border  text-[14px]" to="/">Get in touch</Link>
                    </div>
                </div>
            </div>
            {/* =====upper part end===== */}


            {/* ======MIDDLE PART START======== */}
            <section className='px-[30px]'>
                <div className='space-section w-full h-[40px]'> </div>
                <div className='flex flex-wrap md:flex-nowrap  mb-[20px]'>
                    <div className='w-full   lg:w-[46%]'>
                        <div className='mb-[20px]'>
                            <h1 className='text-[20px] text-[#E64306] font-medium font-sans'>Contact Info</h1>
                        </div>
                        <div className='text-[#033957] text-[33px] font-bold mb-[20px]'>
                            <h1>LETS GET IN TOUCH</h1>
                        </div>
                        <div className="mb-[30px]">
                            <h1 className="text-[#5F5D5D] font-medium tracking-wider text-[19px]">If you have any questions simply use the following contact details.</h1>
                        </div>
                        <div className="mb-[30px]">
                            <div className="flex mb-[20px]">
                                <div className="icon_div flex items-center "><BsEnvelope size={28} className="text-[#E64306] mr-[10px]" /></div>
                                <div className="details_div">
                                    <h1 className="text-[24px] text-[#737272] font-semibold">Email Address</h1>
                                    <h1 className="text-[#1F1E1E] text-[14px]">neeeraj@gmail.com</h1>
                                </div>
                            </div>
                            <div className="w-[87%] h-[1px] bg-[#908C8C]"></div>
                        </div>

                        <div className="mb-[30px]">
                            <div className="flex mb-[20px]">
                                <div className="icon_div flex items-center "><BiPhoneCall size={28} className="text-[#E64306] mr-[10px]" /></div>
                                <div className="details_div">
                                    <h1 className="text-[24px] text-[#737272] font-semibold">Phone Number</h1>
                                    <h1 className="text-[#1F1E1E] text-[14px]">+91 5478845744</h1>
                                </div>
                            </div>
                            <div className="w-[87%] h-[1px] bg-[#908C8C]"></div>
                        </div>

                        <div className="mb-[30px]">
                            <div className="flex mb-[20px]">
                                <div className="icon_div flex items-center "><FaSearchLocation size={28} className="text-[#E64306] mr-[10px]" /></div>
                                <div className="details_div">
                                    <h1 className="text-[24px] text-[#737272] font-semibold">Office Address</h1>
                                    <h1 className="text-[#1F1E1E] text-[14px]">156B, Mehrauli-Gurgaon Rd, Sukhrali, Sector 17, Gurugram, Haryana 122001</h1>
                                </div>
                            </div>
                            <div className="w-[87%] h-[1px] bg-[#908C8C]"></div>
                        </div>

                    </div>
                    <div className='w-full  lg:w-[54%] mr-[20px]'>
                        <div className='px-[40px] py-[30px] w-full flex  flex-col'>
                            <div className='w-full  my-[20px] '>
                                <input type="text" placeholder='Name' className='w-full h-[30px] p-[20px] bg-[#EDEDED] border-solid border outline-none' />
                            </div>
                            <div className='w-full  my-[20px]'>
                                <input type="text" placeholder='Email Address' className='w-full h-[30px] p-[20px] bg-[#EDEDED] border-solid border outline-none' />
                            </div>
                            <div className='w-full  my-[20px]'>
                                <input type="text" placeholder='Phone number' className='w-full h-[30px] p-[20px] bg-[#EDEDED] border-solid border outline-none' />
                            </div>
                            <div className='w-full   my-[20px]'>
                                <textarea rows="4" cols="50" type="text" placeholder='Enter message' className='w-full  p-[20px] bg-[#EDEDED] border-solid border outline-none resize-none' />
                            </div>
                            <div className=''>
                                <button className='bg-[#EC2C05] text-white py-2 px-4 text-[14px] font-medium'> Request Quotes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ======MIDDLE PART END======== */}


            {/* <div className="bg-center bg-cover" style={{backgroundImage: `url(${contact_bg})`}}>
        <div className="bg-[#010C1D] h-[218px] opacity-90 px-4">
            <div className="max-w-[1200px] m-auto flex flex-col justify-center h-full">
                <p className="text-[20px] font-semibold text-white">Contact Us</p>
                <div className="w-[100px] h-[4px] bg-[#ff3a02] my-5"></div>
                <Link className="text-white active:border-white border-[#010C1D] border w-[85px] text-[14px]" to="/">Get in Touch</Link>
            </div>
        </div>
      </div>
      <div className="py-[100px]">
        <div className="max-w-[1200px] m-auto md:flex">
            <div className="md:w-1/2 md:pr-5 p-5">
                <p className="text-[#ff4215] font-medium text-[16px]">CONTACT INFO</p>
                <p className="text-[#042f52] text-[33px] font-semibold my-8">Lets Get In Touch</p>
                <p className="text-[#5f5d5d] font-medium text-[19px] mb-5">If you have any questions simply use the following contact details.</p>
                <div className="md:flex my-5">
                    <div className="mr-[10px] p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope-paper fill-[#ff4215] m-auto" viewBox="0 0 16 16">
                            <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
                        </svg>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-[#737272] font-semibold text-[24px]">Email Address</p>
                        <p className="text-[14px] text-[#1f1e1e] tracking-[1px]">artherwa@gmail.com</p>
                    </div>
                </div>
                <div className="h-[1px] bg-black/80 w-full"></div>
                <div className="md:flex my-5">
                    <div className="mr-[10px] p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-outbound fill-[#ff4215] m-auto" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-[#737272] font-semibold text-[24px]">Phone Number</p>
                        <p className="text-[14px] text-[#1f1e1e] tracking-[1px]">+91 9999630404</p>
                    </div>
                </div>
                <div className="h-[1px] bg-black/80 w-full"></div>
                <div className="md:flex my-5">
                    <div className="mr-[10px] p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search fill-[#ff4215] m-auto" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-[#737272] font-semibold text-[24px]">Office Address</p>
                        <p className="text-[14px] text-[#1f1e1e] tracking-[1px]">156B, Mehrauli-Gurgaon Rd, Sukhrali, Sector 17, Gurugram, Haryana 122001</p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 flex p-5 flex-col justify-center">
                <div className="w-full border border-[#777771] hover:border-[#17A8E3] rounded-sm">
                    <input type="text" className="w-full h-[40px] rounded-sm outline-none px-3 placeholder:text-[16px] bg-[#EDEDED]" placeholder="Name"/>
                </div>
                <p className="text-[#E04562] bg-[#F9E4E8] text-[14px] leading-[28px] px-2 my-1 hidden">This field is required. Please input your name.</p>

                <div className="w-full border border-[#777771] hover:border-[#17A8E3] rounded-sm mt-6">
                    <input type="email" className="w-full h-[40px] rounded-sm outline-none px-3 placeholder:text-[16px] bg-[#EDEDED]" placeholder="Email Address"/>
                </div>
                <p className="text-[#E04562] bg-[#F9E4E8] text-[14px] leading-[28px] px-2 my-1 hidden">This field is required. Please input a valid email.</p>

                <div className="w-full border border-[#777771] hover:border-[#17A8E3] rounded-sm mt-6">
                    <input type="text" className="w-full h-[40px] rounded-sm outline-none px-3 placeholder:text-[16px] bg-[#EDEDED]" placeholder="Phone Number"/>
                </div>
                <p className="text-[#E04562] bg-[#F9E4E8] text-[14px] leading-[28px] px-2 my-1 hidden">This field is required. Please input a phone number.</p>

                <div className="w-full  rounded-sm mt-6 pb-0">
                    <textarea type="text" className="w-full rounded-sm h-[100px] outline-none px-3 placeholder:text-[16px] bg-[#EDEDED] border border-[#777771] hover:border-[#17A8E3]" placeholder="Enter your message..."></textarea>
                </div>

                <button className="h-[40px] sm:w-[140px]  text-white mt-5 px-3 leading-[40px] rounded-sm bg-[#FF2E00] hover:bg-[#008FCA] text-[14px] ">Request Quotes</button>
            </div>
        </div>
      </div>
      <div className='w-full h-[100vh]'>
        <Google_maps/>
      </div> */}

            <Sahil_gmap />
            <Footer />
        </div>
    );
}
export default Contact;