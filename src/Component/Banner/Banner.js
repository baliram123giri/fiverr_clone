import React from 'react'
import './Banner.css'
import { IoIosSearch } from 'react-icons/io'

const Banner = () => {
  const data = [
    "m-1.svg",
    "m-2.svg",
    "m-3.svg",
    "m-4.svg",
    "m-5.svg",
    "m-6.svg",
  ]
  const bannerData=[
    {
      imgpath:"b-1.svg",
      title:"Programming & Tech"
    },
    {
      imgpath:"b-2.svg",
      title:"Graphics & Design"
    },
    {
      imgpath:"b-3.svg",
      title:"Digital Marketing"
    },
    {
      imgpath:"b-4.svg",
      title:"Writing & Translation"
    },
    {
      imgpath:"b-5.svg",
      title:"Video & Animation"
    },
    {
      imgpath:"b-6.svg",
      title:"AI Services"
    },
    {
      imgpath:"b-7.svg",
      title:"Music & Audio"
    },
    {
      imgpath:"b-8.svg",
      title:"Business"
    },
    {
      imgpath:"b-9.svg",
      title:"Consulting"
    },
  ]
  return (
    <>
    <div className='container a_banner flex justify-center'>
      <div className='w-[55%] text-center flex align-items-center '>
        <div className=' mt-[80px]  '>
          <h1 className='text-[60px] text-white'>Find the right <span className='text-[#1dbf73]'>freelance</span> service, right away</h1>
          <div className='flex my-5 a_input_fild px-2'>
            <input type="text " placeholder='Search for any service...' />
            <div className='a_search text-white '><IoIosSearch size={25} /></div>
          </div>

          <div>
            <div className='flex flex-wrap a_banner_name justify-between align-items-center  mt-[10px] '>
              <span className='text-white  text-[12px]'> Trusted by:</span>
              {data.map((values) => {
                return <img className='h-[14px]   ' src={`banner/${values}`} alt="#" />
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container mt-[30px]'>
      <div className='row justify-between' >
          
            {bannerData.map(({imgpath,title},index)=>{
              return  <div key={index} className=' a_banner_box  '>
              <div className='p-3'>
                <img src={`banner/${imgpath}`} alt="" />
                <p className='text-[#222325] text-[14px] a_600 py-3'>{title}</p>
              </div>
          </div>
            })}
      </div>
    </div>
    </>
  )
}

export default Banner