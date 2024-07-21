import React from 'react'
import './Business.css'
const Business = () => {
  return (
    <div className='container bg-[#003912] py-5 rounded-[12px] my-5 text-[#fff]'>
        <div className="row py-4 justify-around align-items-center">
            <div className='col-12 col-md-5'>
                <div className='a_business'>
                    {/* <img className='w-[139px] h-[34px] mb-3' src="" alt="" /> */}
                    <h5 className='mb-2 text-[34px] a_700'>fiverr pro.</h5>
                    <h1  className='text-[46px] a_400 py-4 '>New e-Commerce
                    project management service <span className='a_700'>made for your business</span></h1>
                    <p>An experienced e-Commerce project manager will plan, coordinate, and execute your project. Overseeing a team of e-Commerce experts, they'll handle everything from site building, design and content to optimization, marketing strategies, and UGC videos.</p>
                     
                     <div>
                        <h6 className='a_700 py-3'>To get started, you should have:</h6>
                        <ul className='pb-5 ms-4'>
                            <li>An e-Commerce project requiring expertise in various fields</li>
                            <li>A budget exceeding $1000</li>
                            <li>A desire to get things done, without the hassle</li>
                        </ul>
                     </div>
                     <button className='bg-[#fc832b] rounded-[4px] text-white  text-[16px] a_600 px-[26px] p-[10px]'>Get started</button>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className='a_busines_bottom'>
                    <img  src="X1.webp" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Business