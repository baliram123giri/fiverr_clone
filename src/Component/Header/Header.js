import React, { useState } from 'react'
import './Header.css'
import { IoIosArrowDown } from 'react-icons/io'
import { IoClose, IoMenu } from 'react-icons/io5';
import clsx from 'clsx';
const Header = () => {
    const [MenuBar, setMenuBar] = useState(false);
    return (
        <div className='a_header py-3' >
            <div className='container'>
                <div className="row justify-between a_header_part_res">
                    <div className='col-12 col-md-2'>
                        <img className='h-[47px] w-[89px]' src="Fiverr-Logo.png" alt="" />
                    </div>
                    <div className='col-12 col-md-7 a_colums  justify-end flex align-items-center gap-4  '>
                        <nav>
                            <IoMenu size={40} className='lg:hidden' onClick={() => { setMenuBar(true) }} />
                            <ul className='flex align-items-center gap-4  text-[16px] a_500 text-[#62646a] '>
                                <li className='hidden lg:block'><button className='a_header_buttons'>Fiverr Pro <IoIosArrowDown /></button></li>
                                <li className='hidden lg:block'><button className='a_header_buttons'>Explore <IoIosArrowDown /></button></li>
                                <li className='a_english hidden lg:block'>English</li>
                                <li className='a_english hidden lg:block'>Become a Seller</li>
                                <li className='a_english hidden lg:block'>Sign in</li>
                            </ul>
                        </nav>
                        <button style={{ borderColor: "#1dbf73" }} className='a_header_btn text-[16px] a_600 text-[#1DBF73]   px-3  rounded-2  py-1  hover:text-[white] hover:font-bold hover:bg-[#1dbf73] '>Join</button>
                    </div>
                    <div className={clsx('fixed h-full w-screen  bg-black/50 lg:hidden backdrop-blur-sm top-0 right-0 -translate-x-full',
                        MenuBar && "translate-x-0"
                    )}>
                        <div className=' bg-[#fff] flex--cc  absolute left-0 top-0 h-screen  p-8 gap-9 z-50  w-50 '>
                            <IoClose onClick={() => { setMenuBar(false) }} className='absolute top-0 right-0  text-[30px]  ' />
                            <ul className=' a_header_res  lg:hidden mt-3    text-[16px] a_500 text-[#62646a] '>
                                <li><button className='a_header_buttons'>Fiverr Pro <IoIosArrowDown /></button></li>
                                <li><button className='a_header_buttons'>Explore <IoIosArrowDown /></button></li>
                                <li className='a_english pt-1'>English</li>
                                <li className='a_english'>Become a Seller</li>
                                <li className='a_english'>Sign in</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header