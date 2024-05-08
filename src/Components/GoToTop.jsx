import React, { useEffect, useState } from 'react'
import { RiArrowUpDoubleLine } from 'react-icons/ri'

const GoToTop = ({ scrollBarActivePosition = 1000 }) => {

    const [show, setShow] = useState(null);
    
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const handleScroll = (event) => {
        const position = window.pageYOffset;
        if (position > scrollBarActivePosition) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div
            className={`w-14 h-14 
            bg-secondaryColor shadow-2xl 
            text-white rounded-full 
            fixed z-[999] bottom-5 right-5 
            justify-center items-center
            cursor-pointer
            hover:bg-opacity-75
            animate__animated 
            ${show ? "flex animate__slideInRight" : show !== null ? "flex animate__slideOutRight animate__fast" : "hidden"}`}
            onClick={goToBtn}
        >
            <RiArrowUpDoubleLine className='font-bold text-4xl w-fit h-fit ' />
        </div>
    )
}

export default GoToTop
