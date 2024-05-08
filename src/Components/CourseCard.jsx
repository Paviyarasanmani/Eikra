import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt, FaUser } from 'react-icons/fa'

const CourseCard = ({ item }) => {
    return (
        <div className='w-full h-full bg-white shadow-lg rounded-md group overflow-hidden group'>
            <div className="h-[220px] relative group">
                <img src={item?.image} className='bg-left-top bg-cover w-full h-full rounded-t-md' alt="course-img" />
                <div className='animate__animated group-hover:animate__fadeInLeft animate__fadeOutRight absolute w-full h-full bg-black top-0 bg-opacity-60 z-[3] flex justify-center items-center'>
                    <button className='px-5 py-2.5 text-primaryColor bg-secondaryColor rounded-md font-bold hover:opacity-90'>Book Now</button>
                </div>
                <div className='absolute flex right-2 top-2 z-[1]'>
                    <FaStar className={`bg-white px-2 py-2 top-2 right-2 w-fit h-fit rounded-[50%] shadow-lg ${item.isFavourite ? "text-red-500" : "text-gray-500"} text-xl`} />
                </div>
                <div className='flex absolute z-[1] bottom-2 right-2 w-fit h-fit bg-secondaryColor rounded-md'>
                    <span className='text-primaryColor text-base font-bold px-3 py-1'>$ {item?.price}</span>
                </div>
            </div>
            <div className='w-full h-full flex flex-col'>
                <div className='px-[20px] py-[15px]'>
                    <a href='#' className='mb-[8px] text-[18px] text-primaryColor font-semibold line-clamp-1'>
                        {item.name}
                    </a>
                    <p className='text-secondaryTextColor text-[15px] line-clamp-2 mt-[10px]'>{item?.text}</p>
                </div>
                <div className='w-full flex justify-between h-fit border-t-[1px] px-[20px] py-[15px] '>
                    <div className="flex w-fit h-fit my-auto gap-2">
                        <FaUser className='text-white p-2 text-3xl bg-primaryColor rounded-[50%]' />
                        <span className='line-clamp-1 w-fit h-fit my-auto font-semibold'>{item.author}</span>
                    </div>
                    <div className='w-fit h-fit my-auto flex gap-1'>
                        <FaStar className='text-secondaryColor' />
                        <FaStar className='text-secondaryColor' />
                        <FaStar className='text-secondaryColor' />
                        <FaStarHalfAlt className='text-secondaryColor' />
                        <FaRegStar className='text-gray-500' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
