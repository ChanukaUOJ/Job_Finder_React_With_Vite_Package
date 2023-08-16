// eslint-disable-next-line no-unused-vars
import React from 'react'

import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">

          {/* search field */}
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className='icon text-[25px]'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search your job here....'/>
              <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className='icon text-[25px]'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by company....'/>
              <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className='icon text-[25px]'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by location....'/>
              <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          <button className="bg-blueColor text-white p-5 px-10 rounded-[10px] cursor-pointer hover:bg-blue-300">Search</button>

        </div>
      </form>

      <div className="secondDiv flex items-center gap-10 justify-center">
        
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>

          <select name="" id="relevance" className='bg-white rounded-[3px] py-1 px-4'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className='text-[#808080] font-semibold'>Type :</label>

          <select name="" id="type" className='bg-white rounded-[3px] py-1 px-4'>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className='text-[#808080] font-semibold'>Level :</label>

          <select name="" id="level" className='bg-white rounded-[3px] py-1 px-4'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className='text-[#a1a1a1] hover:text-[#1a1a1a] cursor-pointer'>Clear All</span>

      </div>
    </div>
  )
}

export default Search
