import React, { useRef, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './About.css'
import { Carousel } from 'react-responsive-carousel'

const aboutDta=[
    {
        name:"Company logo",
        comp:"Caitlin Tormey, Chief Commercial Officer",
        disc:"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
        imgurl:"v.webp"
    },
    {
        name:"rooted",
        comp:"Kay Kim, Co-Founder",
        disc:"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
        imgurl:"v-3.webp"
    },
    {
        name:"HERFEST",
        comp:"Tim and Dan Joo, Co-Founders",
        disc:"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
        imgurl:"v-4.webp"
    },
]
const About = () => {
    const [play, setPlay] = useState(false)
    const player = useRef(false)

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlay(false)
        }
    }
    return (
        <div className='container'>
            <h1 className='text-[#404145] text-[48px] a_400 py-3'>What they're saying about Fiverr</h1>
            <Carousel  showStatus={false}>
                {aboutDta.map(({name,disc,comp,imgurl},index)=>{
                    return  <div key={index} className="row py-4 gap-5 align-items-center">
                    <div className='col-12 col-md-5'>
                        <div className='a_about'>
                            <img className='rounded-[5px]' src={`about/${imgurl}`} alt="" />
                            <img onClick={() => { setPlay(true) }} className='a_about_img ' src="about/play.png" alt="" />
                        </div>
                        <div className={` a_video   ${play ? "" : "hide"}  `} ref={player} onClick={closePlayer}>
                            <video src="vi-2.mp4" autoFocus muted controls></video>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='a_about_bottom'>
                            <h5 className='flex gap-3 py-4 text-[#74767e] a_400 text-[20px]'>{comp} <span style={{borderLeft:"1px solid black"}} className='ps-3 text-[black]'>{name}</span></h5>
    
                            <p className='text-start'>{disc}</p>
                        </div>
                    </div>
                </div>
                })}
           
            </Carousel>
            
        </div>
    )
}

export default About