import React from 'react'
import './Footer.css'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TbManFilled } from 'react-icons/tb'
const iconData=[
    <IoLogoTiktok />,
    <FaInstagram />,
    <FaLinkedin />,
    <FaFacebook />,
    <FaPinterest />,
    <FaXTwitter />
]
const Footer = () => {
    const footerData=[
       {
        heading:"Categories",
        data:[
             "Graphics & Design",
             "Digital Marketing",
             "Writing & Translation",
             "Video & Animation",
             "Music & Audio",
             "Fiverr Logo Maker",
             "Programming & Tech",
             "Data",
             "Business",
             "Lifestyle",
             "Photography",
             "End-to-End Projects",
        ]
       },
       {
        heading:"About",
        data:[
             "Careers",
             "Press & News",
             "Partnerships",
             "Privacy Policy",
             "Terms of Service",
             "Intellectual Property Claims",
             "Investor Relations"
        ]
       },
       {
        heading:"Support and Education",
        data:[
             "Help & Support",
             "Trust & Safety",
             "Selling on Fiverr",
             "Buying on Fiverr",
             "Fiverr Guides",
             "Learn",
             "Online Courses"
        ]
       },
       {
        heading:"Community",
        data:[
             "Customer Success Stories",
             "Community Hub",
             "orum",
             "Events",
             "Blog",
             "Creators",
             "Affiliates",
             "Podcast",
             "Invite a Friend",
             "Become a Seller",
             "Community Standards"
        ]
       },
       {
        heading:"Business Solutions",
        data:[
             "About Business Solutions",
             "Fiverr Pro",
             "Fiverr Certified",
             "Become an Agency",
             "Fiverr Enterprise",
             "ClearVoice",
             "Content Marketing",
             "Working Not Working",
             "Contact Sales"
        ]
       },
    ];
  return (
    
        <footer  className=' pt-5  mt-[100px]'>
            <div className='container pb-5'>
         <div className="row justify-between">
            {footerData.map((values,index)=>{
                return  <div key={index} className='col-12 col-md-2'>
                <h6 className='text-[#404145] text-[16px] a_700 my-3'>{values.heading}</h6>
                <ul>
                    {values.data.map((e,index)=>{
                        return <li key={index} className='text-[#74767e] a_400'>{e}</li>
                    })}
                </ul>
            </div>
            })}
           
         </div>
         </div>
         <div className='container a_footer py-4 '>
            <div className="row justify-between a_footer_res">
                <div className='col-12 col-md-3'>
                    <div className='flex gap-4 align-items-center'>
                        {/* <img  src="footer/" alt="" /> */}
                        <h2 style={{letterSpacing:"-2px"}} className='text-[#7A7D85] text-[27px] a_900'>fiverr</h2>
                        <h6 className='text-[14px] text-[#B5B6BA]'>© Fiverr International Ltd. 2024</h6>
                    </div>
                </div>
                <div className='col-12 col-md-6  '>
                    <div className='flex gap-5 a_footer_icons  justify-end'>
                        <ul className='flex a_footer_bottom  gap-2'>
                            {iconData.map((data,index)=>{
                                return <li key={index}>{data}</li>
                            })}
                        </ul>
                        <ul className='flex a_footer_box gap-3 align-items-center'>
                            <li><button>English</button>   </li>
                            <li><button>₹ INR</button></li>
                            <li className='a_icon'><TbManFilled size={20}  /></li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
         </footer>
  )
}

export default Footer