import React from 'react'
import "react-multi-carousel/lib/styles.css";
import './Services.css'
import Carousel from 'react-multi-carousel';

const serviceData=[
    {
        title:"Website Development",
        imgurl:"s-1.webp",
        background:"#00732e"
    },
    {
        title:"Logo Design",
        imgurl:"s-2.webp",
        background:"#ff7640"
    },
    {
        title:"SEO",
        imgurl:"s-3.webp",
        background:"#003912"
    },
    {
        title:"Architecture & Interior Design",
        imgurl:"s-4.webp",
        background:"#4d1727"
    },
    {
        title:"Social Media Marketing",
        imgurl:"s-5.webp",
        background:"#687200"
    },
    {
        title:"Voice Over",
        imgurl:"s-6.webp",
        background:"#421300"
    },
    {
        title:"Software Development",
        imgurl:"s-7.webp",
        background:"#254200"
    },
    {
        title:"Data Science & ML",
        imgurl:"s-8.webp",
        background:"#8f2900"
    },
    {
        title:"Product Photography",
        imgurl:"s-9.webp",
        background:"#687200"
    },
    {
        title:"E-Commerce Marketing",
        imgurl:"s-10.webp",
        background:"#00732e"
    },
    {
        title:"Video Editing",
        imgurl:"s-11.webp",
        background:"#be5272"
    },
    
]
const Services = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
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
        <div className='container my-5'>
            <h1 className='text-[#404145] text-[48px] a_400 py-5'>Popular services</h1>
            <div className="row">
                <Carousel responsive={responsive}>
                    {serviceData.map(({imgurl,title,background},index)=>{
                        return <div key={index} className='col-12 col-md-2  '>
                        <div style={{background:background}}  className=' w-[188px] rounded-[16px]  p-[6px] a_services   '>
                            <h5 className='text-[18px] a_700 text-[#fff] px-2  pt-4 pb-3'>{title}</h5>
                            <img className='rounded-[12px]' src={`service/${imgurl}`} alt="" />
                        </div>
                    </div>
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Services