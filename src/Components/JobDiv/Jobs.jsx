// eslint-disable-next-line no-unused-vars
import React from 'react'

//icons from react
import {BiTimeFive} from 'react-icons/bi'

//import images
import logo from '../../assets/logo.png'

//for all the jobs, we are going to use high order array method called map..
//in this case we shall list all the jobs into an array called data..

const Data = [
  {
    id:1,
    image: logo,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  },
  {
    id:2,
    image: logo,
    title: "Software Engineer",
    time: "14hrs",
    location: "USA",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  }
  ,{
    id:3,
    image: logo,
    title: "UI | UX Designer",
    time: "15hrs",
    location: "Sri Lanka",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  },
  {
    id:4,
    image: logo,
    title: "Executive Manager",
    time: "16hrs",
    location: "UK",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  },
  {
    id:5,
    image: logo,
    title: "Graphic Designer",
    time: "19hrs",
    location: "Sri Lanka",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  },
  {
    id:6,
    image: logo,
    title: "Manager",
    time: "21hrs",
    location: "Sri Lanka",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  },
  {
    id:7,
    image: logo,
    title: "Web Developer",
    time: "23hrs",
    location: "Canada",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  },
  {
    id:8,
    image: logo,
    title: "Software Engineer",
    time: "24hrs",
    location: "USA",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  }
  ,{
    id:9,
    image: logo,
    title: "UI | UX Designer",
    time: "1d 2hrs",
    location: "Sri Lanka",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  },
  {
    id:10,
    image: logo,
    title: "Executive Officer",
    time: "1d 12hrs",
    location: "UK",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  },
  {
    id:11,
    image: logo,
    title: "Graphic Designer",
    time: "2d",
    location: "Sri Lanka",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  },
  {
    id:12,
    image: logo,
    title: "Executive Manager",
    time: "2d 10hrs",
    location: "Sri Lanka",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  },
  {
    id:13,
    image: logo,
    title: "Manager",
    time: "3d",
    location: "Sri Lanka",
    desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque autem molestiae, provident dicta dolorum fuga reprehenderit dolorem animi quia eligendi.",
    company: "ECM Developers Co."
  }
]

const jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return (
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          
                <span className="flex justify-center items-center gap-4">
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive/> {time}
                  </span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

                <div className="company flex item-center gap-3 mt-[10px] mb-[10px]">
                  <img src={image} alt="company logo" className='w-[25%] h-fit'/>
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold hover:bg-white group-hover/item:text-textColor group-hover:text-white' >
                  Apply Now
                </button>

            </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default jobs
