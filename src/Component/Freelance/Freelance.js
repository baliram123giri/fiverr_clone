import React from 'react'

const Freelance = () => {
    const freeaData=[
        {
            imgpath:"f-1.svg",
            heading:"Over 700 categories",
            disc:"Get results from skilled freelancers from all over the world, for every task, at any price point."
        },
        {
            imgpath:"f-2.svg",
            heading:"Clear, upfront pricing",
            disc:"No hourly rates, just project-based pricing. Payments only get released when you approve."
        },
        {
            imgpath:"f-3.svg",
            heading:"Quality work done faster",
            disc:"Filter to find the right freelancers quickly and get great work delivered in no time, every time."
        },
        {
            imgpath:"f-4.svg",
            heading:"24/7 award-winning support",
            disc:"Chat with our team to get your questions answered or resolve any issues with your orders."
        },
    ]
  return (
    <div className='container mb-5'>
        <h1 className='text-[#404145] text-[48px] a_400 py-5'>A whole world of freelance <br /> talent at your fingertips</h1>
        <div className="row">
            {freeaData.map(({imgpath,disc,heading},index)=>{
                return  <div key={index} className='col-12 col-md-3 mt-3'>
                <img src={`freelance/${imgpath}`} alt="" />
                <h5 className='py-4 text-[#222325] text-[24px] a_400'>{heading}</h5>
                <p className='text-[#62646a] text-[16px] mt-[30px]'>{disc}</p>
            </div>
            })}
           
        </div>
    </div>
  )
}

export default Freelance