import React from 'react'
const Market = () => {
  return (
    <div className='container bg-[#FFF6F2] py-5 rounded-[12px] mb-5'>
        <div className="row pb-4 justify-around align-items-center">
            <div className='col-12 col-md-5'>
                <h4 className='text-[33px]  pb-5'><span className='a_900'>fiverr</span> logo maker.</h4>
                <h1 className='text-[48px] a_400 text-[#404145]'>Make an incredible <br />
                logo <span className='text-[#fc832b]'>in seconds</span></h1>
                <h6 className='text-[#62646a] text-[20px] my-5'>Pre-designed by top talent. Just add your touch.</h6>
                <button className='bg-[#222325] text-[16px] py-[8px] px-[15px] a_600 rounded-[8px] text-[#fff] hover:bg-[#222325d8] '>Try Fiverr Logo Maker</button>
            </div>
            <div className='col-12 col-md-5'>
              <img src="logo-maker-lohp.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Market