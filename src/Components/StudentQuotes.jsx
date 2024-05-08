import React from 'react'
import { PiQuotesFill } from 'react-icons/pi'

const StudentQuotes = ({ item = [] }) => {
    return (
        <>
            {/*  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[50px] gap-y-[50px]'>
                {
                    item.map((student) => {
                        return (
                            <div className='min-h-[170px] w-full flex relative' key={student.id}>
                                <div className='min-w-[92px] min-h-[92px] '>
                                    <img src={student.image} alt="student-img" className='rounded-[50%]' />
                                </div>
                                <div className='pl-[30px]'>
                                    <h2 className='mb-[2px] text-[22px] text-primaryColor font-[500]'>{student.name}</h2>
                                    <p className='text-textColor font-[500]'>{student.role}</p>
                                    <p className='mt-2.5 text-[15px] text-secondaryTextColor leading-7 font-[500]'>
                                        {student.quote}
                                    </p>
                                </div>
                                <div className='absolute w-fit h-fit z-10 max-sm:right-0 right-10 md:right-0 lg:right-10'>
                                    <PiQuotesFill className='text-gray-300 text-5xl ' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full h-full mt-[40px]'>
                <div className='w-fit h-fit mx-auto flex gap-2'>
                    <div className='w-[20px] h-[8px] rounded-3xl bg-primaryColor cursor-pointer'></div>
                    <div className='w-[20px] h-[8px] rounded-3xl bg-gray-400 cursor-pointer'></div>
                </div>
            </div>
        </>
    )
}

const QuoteCard = () => {
    return (
        <>

        </>
    )
}

export default StudentQuotes
