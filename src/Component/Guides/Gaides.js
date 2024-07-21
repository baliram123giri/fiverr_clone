import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
const Gaides = () => {
    const gaidensData=[
        {
            imgurl:"g-1.webp",
            title:"Start a side business"
        },
        {
            imgurl:"g-2.webp",
            title:"Ecommerce business Ideas"
        },
        {
            imgurl:"g-3.webp",
            title:"Start an online business and work from home"
        },
        {
            imgurl:"g-4.webp",
            title:"Build a website from scratch"
        },
        {
            imgurl:"g-5.webp",
            title:"Grow your business with AI"
        },
        {
            imgurl:"g-6.webp",
            title:"Create a logo for your business"
        },
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
  return (
    <div className='container pb-4'>
        <h1 className='text-[#404145] text-[48px] a_400 py-5'>Guides to help you grow</h1>
        <div className="row">
        <Carousel responsive={responsive} showStatus={false}>
            {gaidensData.map(({imgurl,title},index)=>{
                return <div key={index} className='  '>
                <div className=''>
                   <img  style={{width:"96%",minHeight:"300px"}}   className='rounded-[4px]' src={`gaides/${imgurl}`} alt="" />
                   <h6 className='text-[#404145] pt-[20px] text-[18px] a_700'>{title}</h6>
                </div>
            </div>
            })}
              </Carousel>
        </div>
    </div>
  )
}

export default Gaides