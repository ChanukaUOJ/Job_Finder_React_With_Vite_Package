// eslint-disable-next-line no-unused-vars
import React from 'react'

import logo from '../../assets/logo.png'

const value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The Value that holds us true and to account</h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[100px] w-[100px] flex items-center justify-center">
              <img src={logo} alt="company logo" className='w-[100%]'/>
            </div>

            <span className="font-semibold text-textColor text-[18px]">
            amazing
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>Things brief made beautiful simple are at the heart of everything we do.</p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[100px] w-[100px] flex items-center justify-center">
              <img src={logo} alt="company logo" className='w-[100%]'/>
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Wonderful
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>Things brief made beautiful simple are at the heart of everything we do.</p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[100px] w-[100px] flex items-center justify-center">
              <img src={logo} alt="company logo" className='w-[100%]'/>
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Miraculous
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>Things brief made beautiful simple are at the heart of everything we do.</p>
        </div>
      </div>

     <div className="card bg-greyIrish">
        <div className="card mt-[2rem] flex justify-between  p-[5rem] rounded-[10px]">

          <div>
            <h1 className='text-blueColor text-[30px] font-bold'>
              Ready to switch a career
            </h1>
          </div>

            <h2 className='text-textColor text-[25px] font-bold'>Let s get Started!</h2>
            <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
              Get Started
            </button>


          </div>
        </div>

    </div>
  )
}

export default value
