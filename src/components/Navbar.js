import logo from './images/logo.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar(){
    const [ link1, setLink1 ] = useState("");
    const [ link2, setLink2 ] = useState("");
    const [ link3, setLink3 ] = useState("");
    const [ link4, setLink4 ] = useState("");
    const [ link5, setLink5 ] = useState("");

    const [ button, setButton ] = useState("");

    const [ mobileMenu, setMobileMenu ] = useState(false);

    function setNavTrue1(){
        setLink1(true);
    }
    function setNavFalse1(){
        setLink1(false);
    }

    function setNavTrue2(){
        setLink2(true);
    }
    function setNavFalse2(){
        setLink2(false);
    }

    function setNavTrue3(){
        setLink3(true);
    }
    function setNavFalse3(){
        setLink3(false);
    }

    function setNavTrue4(){
        setLink4(true);
    }
    function setNavFalse4(){
        setLink4(false);
    }

    function setNavTrue5(){
        setLink5(true);
    }
    function setNavFalse5(){
        setLink5(false);
    }

    function setButtonTrue(){
        setButton(true);
    }
    function setButtonFalse(){
        setButton(false);
    }

    function setMobileMenuTrue(){
        setMobileMenu(true);
    }
    function setMobileMenuFalse(){
        setMobileMenu(false);
    }
    return (
            <nav>
                <div className="bg-[#001430] w-full text-white px-4 flex justify-center">
                    <div className="max-w-[1220px] w-full m-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between h-[95px] sm:h-[54px] ">
                        <div className="flex items-center">
                            <div className="flex items-center mr-3 cursor-pointer"> 
                                <div className="mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-telephone-fill fill-white" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </div>
                                <div className="text-[12px] tracking-[2px]">+91 9999 630404</div>
                            </div>
                            <div className="flex items-center cursor-pointer"> 
                                <div className="mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-envelope-fill fill-white" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                    </svg>
                                </div>
                                <div className="text-[13px] tracking-[1.3px]">artherwa@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="border border-[#001430] p-2 active:border-[#0066bf]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter fill-white hover:fill-[#0066BF] hover:scale-95 hover:transition-all cursor-pointer " viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </div>
                            <div className="border border-[#001430] p-2 active:border-[#0066bf]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook fill-white hover:fill-[#0066BF] hover:scale-95 hover:transition-all cursor-pointer" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> 
                                </svg>
                            </div>
                            <div className="border border-[#001430] p-2 active:border-[#0066bf]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest fill-white hover:fill-[#0066BF] hover:scale-95 hover:transition-all cursor-pointer" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                                </svg>
                            </div>
                            <div className="border border-[#001430] p-2 active:border-[#0066bf]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram fill-white hover:fill-[#0066BF] hover:scale-95 hover:transition-all cursor-pointer" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                            </div>
                            <div className="border border-[#001430] p-2 active:border-[#0066bf]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin fill-white hover:fill-[#0066BF] hover:scale-95 hover:transition-all cursor-pointer" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                </svg>
                            </div>
                            <div className="border border-[#001430] p-2 active:border-[#0066bf]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube fill-white hover:fill-[#0066BF] hover:scale-95 hover:transition-all cursor-pointer" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="max-w-[1220px] m-auto flex items-center justify-between h-[83px] py-1">
                        <div className='h-[55px] cursor-pointer'>
                            <img src={logo} alt="" className='h-full'/>
                        </div>
                        <div className='lg:flex items-center hidden'>
                            <ul className='flex items-center text-[20px] '>
                                <li className='px-[12px] cursor-pointer hover:text-[#FE5008] hover:transition-all border border-white p-2 active:border-[#FE5008]' onMouseOver={setNavTrue1} onMouseOut={setNavFalse1}>
                                    <div className='mb-2 h-[2px] w-full '></div>
                                    <Link to="/" className=''>Home</Link>
                                    <div className={ link1 === "" ? "mt-2 h-[2px]" : link1 ? 'mt-2 h-[2px] animate-w_full bg-[#f25800]' : 'mt-2 h-[2px] w-[0px] bg-[#f25800] animate-w_zero' }></div>
                                </li>
                                <li className='px-[12px] cursor-pointer hover:text-[#FE5008] hover:transition-all border border-white p-2 active:border-[#FE5008]' onMouseOver={setNavTrue2} onMouseOut={setNavFalse2}>
                                    <div className='mb-2 h-[2px] w-full'></div>
                                    <Link to="/about" className=''>About</Link>
                                    <div className={ link2 === "" ? "mt-2 h-[2px]" : link2 ? 'mt-2 h-[2px] animate-w_full bg-[#f25800]' : 'mt-2 h-[2px] w-[0px] bg-[#f25800] animate-w_zero' }></div>
                                </li>
                                <li className='px-[12px] cursor-pointer hover:text-[#FE5008] hover:transition-all border border-white p-2 active:border-[#FE5008]' onMouseOver={setNavTrue3} onMouseOut={setNavFalse3}>
                                    <div className='mb-2 h-[2px] w-full'></div>
                                    <Link to="/services" className=''>Services</Link>
                                    <div className={link3 === "" ? "mt-2 h-[2px]" :  link3 ? 'mt-2 h-[2px] animate-w_full bg-[#f25800]' : 'mt-2 h-[2px] w-[0px] bg-[#f25800] animate-w_zero' }></div>
                                </li>
                                <li className='px-[12px] cursor-pointer hover:text-[#FE5008] hover:transition-all border border-white p-2 active:border-[#FE5008]' onMouseOver={setNavTrue4} onMouseOut={setNavFalse4}>
                                    <div className='mb-2 h-[2px] w-full'></div>
                                    <Link to="/portfolio" className=''>Portfolio</Link>
                                    <div className={link4 === "" ? "mt-2 h-[2px]" :  link4 ? 'mt-2 h-[2px] animate-w_full bg-[#f25800]' : 'mt-2 h-[2px] w-[0px] bg-[#f25800] animate-w_zero' }></div>
                                </li>
                                <li className='px-[12px] cursor-pointer hover:text-[#FE5008] hover:transition-all border border-white p-2 active:border-[#FE5008]' onMouseOver={setNavTrue5} onMouseOut={setNavFalse5}>
                                    <div className='mb-2 h-[2px] w-full'></div>
                                    <Link to="/contact" className=''>Contact Us</Link>
                                    <div className={ link5 === "" ? "mt-2 h-[2px]" : link5 ? 'mt-2 h-[2px]  animate-w_full bg-[#f25800]' : 'mt-2 h-[2px]  w-[0px] bg-[#f25800] animate-w_zero' }></div>
                                </li>
                            </ul>
                            <div className='bg-[#FE5008] h-[60px] w-[180px] rounded-sm ml-2 text-[20px] leading-[60px] text-center flex flex-col justify-center hover:bg-black hover:text-[#f25800] hover:transition-all' onMouseOver={setButtonTrue} onMouseOut={setButtonFalse}>
                                    <div className='mb-2 h-[2px] w-full'></div>
                                    <Link to="/contact" className=''>Get a Free Quote</Link>
                                    <div className={ button === "" ? "mt-2 h-[2px]" : button ? 'mt-2 h-[2px]  animate-w_full bg-[#f25800]' : 'mt-2 h-[2px]  w-[0px] bg-[#f25800] animate-w_zero' }></div>
                            </div> 
                        </div>
                        <div className='lg:hidden cursor-pointer border border-white active:border-[#f25800] h-full flex items-center ' onClick={setMobileMenuTrue}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list hover:fill-[#f25800]" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={ mobileMenu ? 'w-full min-h-[100vh] fixed bg-black/90 top-0 z-10' : 'hidden'}>
                    <div className='absolute h-[40px] w-[40px]  right-[20px] top-[20px] flex items-center justify-center active:border border-[#FE5008] rounded-sm cursor-pointer' onClick={setMobileMenuFalse}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-lg fill-white hover:fill-white/60 hover:transition-all" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </div>
                    <div className='min-w-full min-h-[100vh] flex items-center '>
                        <ul className='text-[18px] text-white p-12 text-center w-full'>
                            <li className='my-4 hover:text-white/30 hover:transition-all'>
                                <Link to="/">HOME</Link>
                            </li>
                            <li className='my-4 hover:text-white/30 hover:transition-all'>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li className='my-4 hover:text-white/30 hover:transition-all'>
                                <Link to="/services">SERVICES</Link>
                            </li>
                            <li className='my-4 hover:text-white/30 hover:transition-all'>
                                <Link to="/portfolio">PORTFOLIO</Link>
                            </li>
                            <li className='my-4 hover:text-white/30 hover:transition-all'>
                                <Link to="/contact">CONTACT US</Link>
                            </li>
                            <li className='my-4 hover:text-white/30 hover:transition-all'>
                                <button className='leading-[45px] bg-[#FE5008] hover:bg-[#000] rounded-sm w-full hover:transition-all'><Link to="/contact">GET A FREE QUOTE</Link></button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
    )
}
export default Navbar;