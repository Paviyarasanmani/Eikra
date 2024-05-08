import React, { useEffect, useState } from 'react'
import lightLogo from '../Assets/images/brand/light-logo.png';
import darkLogo from '../Assets/images/brand/dark-logo.png';
import { BiSearch } from 'react-icons/bi';
import { HiHeart, HiMenuAlt1 } from 'react-icons/hi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { FaArrowRight, FaBook, FaBookmark, FaFacebook, FaFacebookF, FaFax, FaGoogle, FaGooglePlusG, FaGraduationCap, FaInstagram, FaLinkedin, FaLinkedinIn, FaLocationArrow, FaPhoneAlt, FaPinterest, FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt, FaTwitter, FaUser } from 'react-icons/fa';
import pythonImg from '../Assets/images/courses/python.jpg';
import { IoBookmarks } from 'react-icons/io5';
import { TopCourses, studentQuotes } from '../data/data';
import CourseCard from '../Components/CourseCard';
import visaImg from "../Assets/images/visa.png";
import mtImg from "../Assets/images/mt.png";
import paypalImg from "../Assets/images/paypal.png";
import vtrImg from "../Assets/images/vtr.png";
import { MdLocationOn, MdMail, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';
import expand1 from '../Assets/images/expand1.jpg';
import marketingImg from '../Assets/images/marketing.jpg';
import aiImg from '../Assets/images/ai.jpg';
import ccImg from '../Assets/images/cc.jpg';
import programingImg from '../Assets/images/programing.jpg';
import student1 from '../Assets/images/student1.png';
import student2 from '../Assets/images/student2.png';
import { PiQuotesFill } from 'react-icons/pi';
import GoToTop from '../Components/GoToTop';
import StudentQuotes from '../Components/StudentQuotes';

const scrollBarActivePosition = 70;

const Home = () => {

    const [menuActive, setMenuActive] = useState(null);
    const [isMenuScrolled, setIsMenuScrolled] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > scrollBarActivePosition) {
            setIsMenuScrolled(true);
        } else {
            setIsMenuScrolled(false);
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="page">
           <GoToTop/>
            <div className='w-full h-full relative overflow-hidden '>
                <section className={`top-0 w-full lg:bg-primaryColor z-[999] animate__animated ${isMenuScrolled ? "fixed  animate__fadeInDown" : "absolute transition-all delay-700"}`}>
                    <div className='lg:container-md lg:flex lg:flex-row lg:justify-between text-white'>
                        <div className='flex bg-white lg:bg-transparent justify-between w-full h-full lg:w-fit lg:h-fit my-auto mobile-menu-container max-lg:border-b-[2px] border-secondaryColor'>
                            <div className='w-fit h-fit'>
                                <img src={lightLogo} alt="brand-logo" className='hidden lg:block' />
                                <img src={darkLogo} alt="brand-logo" className='block lg:hidden' />
                            </div>
                            <div className={`flex lg:hidden`}>
                                <ul className='flex gap-2 text-primaryColor relative '>
                                    <li className='h-fit w-fit my-auto hover:text-secondaryColor cursor-pointer'>
                                        <BiSearch className='text-current text-2xl font-bold' />
                                    </li>
                                    <li className='h-fit w-fit my-auto group relative cursor-pointer'>
                                        <RiShoppingCart2Line className='text-current text-2xl font-bold group-hover:text-secondaryColor' />
                                        <div className=' group-hover:text-secondaryColor group-hover:bg-primaryColor text-primaryColor flex absolute -top-[10px] -right-2 w-[20px] h-[20px] rounded-[50%] bg-secondaryColor'>
                                            <span className='text-sm mx-auto my-auto font-semibold'>1</span>
                                        </div>
                                    </li>
                                    <li className='h-fit w-fit my-auto hover:text-secondaryColor ml-2 cursor-pointer' onClick={() => setMenuActive(!menuActive)}>
                                        <HiMenuAlt1 className='text-current text-2xl' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`navbar lg-navbar ${menuActive ? "block animate__animated animate__fadeInRight" : menuActive !== null ? "animate__animated animate__fadeOutRight" : "hidden"}`}>
                            <ul className='nav'>
                                <li className='nav-list group'>
                                    <FaArrowRight className='arrow-icon' />
                                    <a href="#" className='nav-link lg:animation-hoverline'>home</a>
                                </li>
                                <li className='nav-list group'>
                                    <FaArrowRight className='arrow-icon' />
                                    <a href="#" className='nav-link lg:animation-hoverline'>courses</a>
                                </li>
                                <li className='nav-list group'>
                                    <FaArrowRight className='arrow-icon' />
                                    <a href="#" className='nav-link lg:animation-hoverline'>instructors</a>
                                </li>
                                <li className='nav-list group'>
                                    <FaArrowRight className='arrow-icon' />
                                    <a href="#" className='nav-link lg:animation-hoverline'>latest posts</a>
                                </li>
                                <li className='nav-list group'>
                                    <FaArrowRight className='arrow-icon' />
                                    <a href="#" className='nav-link lg:animation-hoverline'>publications</a>
                                </li>
                                <li className='nav-list group'>
                                    <FaArrowRight className='arrow-icon' />
                                    <a href="#" className='nav-link lg:animation-hoverline'>contact</a>
                                </li>
                            </ul>
                            <div className='navbar-btn-group hidden lg:block '>
                                <a href="#" className='btn apply-now-btn'>Apply Now</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="h-full w-full relative">
                    <section className='w-full h-full'>
                        <div className="flex bg-landingBanner lg:bg-landingBanner1 bg-no-repeat bg-cover bg-center lg:min-h-screen min-h-full max-w-full overflow-hidden">
                            <div className="container-md min-h-full w-full flex">
                                <div className="flex flex-col gap-5 h-fit w-full my-auto pt-[140px] pb-[60px] text-white">
                                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5'>
                                        <div className='text-center sm:text-left col-span-1 sm:col-span-2 md:col-span-3'>
                                            <h2 className='text-3xl max-sm:font-bold md:text-left md:text-4xl lg:text-5xl font-[500] lg:leading-[55px]'>Best Education Learning Platform For 2024</h2>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5'>
                                        <div className='text-center sm:text-left col-span-1 sm:col-span-2 md:col-span-3'>
                                            <p className='text-base font-[500]'>Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Dolores culpa quae obcaecati ullam deleniti,
                                                ad rerum tempora dicta veritatis magni?
                                                Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis?
                                            </p>
                                        </div>
                                    </div>
                                    <button className='mx-auto sm:ml-0 uppercase hover:bg-opacity-90 bg-secondaryColor text-primaryColor font-semibold px-5 py-2.5 w-fit rounded'>start a course</button>
                                    <div className='mx-auto sm:ml-0 cursour-section flex gap-3 mt-[20px]'>
                                        <div className='w-[12px] h-[12px] rounded-[50%] bg-transparent border-[2.5px] border-white cursor-pointer'></div>
                                        <div className='w-[12px] h-[12px] rounded-[50%] border-[2.5px] border-secondaryColor bg-white cursor-pointercursor-pointer'></div>
                                        <div className='w-[12px] h-[12px] rounded-[50%] bg-transparent border-[2.5px] border-white cursor-pointer'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='container-md min-h-fit h-full'>
                        <div className='flex flex-col pt-[80px] pb-[60px] w-full h-full'>
                            <div className='w-full h-full'>
                                <div className='px-[0px] sm:px-[10px] md:px-[15px] text-center'>
                                    <h2 className='mb-[15px] h-fit font-[400]  text-primaryColor max-w-sm:text-[26px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]'>Welcome To Eikra</h2>
                                    <p className='text-center md:w-3/4 mx-auto text-secondaryTextColor text-[15px] leading-7 font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque voluptatibus, repellat eveniet laborum repudiandae reprehenderit suscipit error architecto quo.</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full'>
                                <div className='col-span-1 px-[20px] md:px-[10px] lg:px-[20px] flex flex-col pt-[60px]'>
                                    <div className='w-full h-full flex mb-[18px]'>
                                        <div className='px-[27px] py-[27px] bg-lightBackgroundColor rounded-[50%] w-fit h-fit my-auto mx-auto hover:bg-secondaryColor transition-all ease-linear delay-75'>
                                            <FaGraduationCap className='text-[36px] text-primaryColor' />
                                        </div>
                                    </div>
                                    <div className='w-full h-full text-center text-primaryColor'>
                                        <h3 className='mb-[10px] text-[22px] font-semibold'>ScholarShip Facility</h3>
                                        <p className='text-[15px] font-[400] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
                                            laborum! Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                                    </div>
                                    <div></div>
                                </div>
                                <div className='col-span-1 px-[20px] md:px-[10px] lg:px-[20px] flex flex-col pt-[60px]'>
                                    <div className='w-full h-full flex mb-[18px]'>
                                        <div className='px-[27px] py-[27px] bg-lightBackgroundColor rounded-[50%] w-fit h-fit my-auto mx-auto hover:bg-secondaryColor transition-all ease-linear delay-75'>
                                            <FaUser className='text-[36px] text-primaryColor' />
                                        </div>
                                    </div>
                                    <div className='w-full h-full text-center text-primaryColor'>
                                        <h3 className='mb-[10px] text-[22px] font-semibold'>Skilled Lecturers</h3>
                                        <p className='text-[15px] font-[400] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
                                            laborum! Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                                    </div>
                                    <div></div>
                                </div>
                                <div className='col-span-1 px-[20px] md:px-[10px] lg:px-[20px] flex flex-col pt-[60px]'>
                                    <div className='w-full h-full flex mb-[18px]'>
                                        <div className='px-[27px] py-[27px] bg-lightBackgroundColor rounded-[50%] w-fit h-fit my-auto mx-auto hover:bg-secondaryColor transition-all ease-linear delay-75'>
                                            <FaBook className='text-[36px] text-primaryColor' />
                                        </div>
                                    </div>
                                    <div className='w-full h-full text-center text-primaryColor'>
                                        <h3 className='mb-[10px] text-[22px] font-semibold'>Book Library & Store</h3>
                                        <p className='text-[15px] font-[400] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
                                            laborum! Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='min-h-fit h-full bg-lightGray'>
                        <div className='container-md'>
                            <div className='flex flex-col pt-[80px] pb-[60px] w-full h-full'>
                                <div className='w-full h-full'>
                                    <div className='px-[0px] sm:px-[10px] md:px-[15px] text-center'>
                                        <h2 className='mb-[15px] h-fit font-[400]  text-primaryColor max-w-sm:text-[26px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]'>Our Top Courses</h2>
                                        <p className='text-center md:w-3/4 mx-auto text-secondaryTextColor text-[15px] leading-7 font-[400]'>Bmply dummy text of the printing and typesetting indust Lorem Ipsum has been theitry's snce simply dummy text of the printing.Phasellus enim libero, blandit vel sapien vita their. Lorem ipsum dolor sit amet, consectetur adipiscino eiusmod tempor incididply dummy text of the printing.</p>
                                    </div>
                                </div>
                                <div className='w-full h-full pt-[40px]'>
                                    <div className='w-full h-full flex mb-[40px]'>
                                        <div className="w-full sm:w-fit grid grid-cols-4 gap-2 sm:gap-0 sm:grid-cols-3 h-fit mx-auto">
                                            <button className="col-span-2 rounded-3xl sm:rounded-none sm:col-span-1 px-[5px] sm:px-[22px] md:px-[26px] lg:px-[30px] py-[10px] sm:rounded-l-[40px] text-white font-[400] text-base border-[1.5px] border-primaryColor bg-primaryColor">New Courses</button>
                                            <button className="col-span-2 rounded-3xl sm:rounded-none sm:col-span-1 px-[5px] sm:px-[22px] md:px-[26px] lg:px-[30px] py-[10px] text-primaryColor font-[400] text-base border-[1.5px] sm:border-y-[1.5px] border-primaryColor ">Featured Courses</button>
                                            <button className="col-span-2 rounded-3xl col-start-2 sm:col-start-auto sm:rounded-none sm:col-span-1 px-[5px] sm:px-[22px] md:px-[26px] lg:px-[30px] py-[10px] sm:rounded-r-[40px] text-primaryColorbg-white font-[400] text-base border-[1.5px] border-primaryColor"> Populared Courses</button>
                                        </div>
                                    </div>
                                    <div className='w-full h-full flex'>
                                        <div className="grid grid-cols-1 gap-y-5  md:gap-y-7 xl:gap-x-5 sm:grid-cols-2 mx-auto md:w-full md:grid-cols-2 lg:grid-cols-3">
                                            {
                                                TopCourses.map((item) => (
                                                    <div className="col-span-1 px-[10px] w-full h-full">
                                                        <CourseCard item={item} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-fit pt-[60px] pb-[20px] flex'>
                                    <button className='hover:bg-opacity-80 px-6 py-2.5 font-bold rounded-3xl mx-auto border border-primaryColor hover:bg-primaryColor hover:text-white transition-all ease-linear'>View More Courses</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='min-h-fit h-full w-full'>
                        <div className='bg-studentswithcap w-full h-full bg-cover bg-bottom relative'>
                            <div className='bg-primaryColor absolute w-full h-full bg-opacity-80'></div>
                            <div className="container-md pt-[80px] pb-[120px] relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                                    <div className="col-span-1 w-full h-fit">
                                        <div className="flex w-full h-full ">
                                            <div className='pt-[35px] px-[15px] max-[460px]:w-fit max-[460px]:mx-auto'>
                                                <div className="flex max-md:flex-col">
                                                    <div className='max-[460px]:pr-[0px] pr-[15px] max-[460px]:pb-[15px]'>
                                                        <div className="pb-[15px] w-fit h-fit leading-[1] text-white border-b-[2px] border-secondaryColor max-[460px]:mx-auto">
                                                            <span className='font-[400] text-[72px]'>50</span>
                                                        </div>
                                                    </div>
                                                    <div className='w-fit h-fit text-white text-lg font-[400] leading-6 pt-[10px] max-[460px]:text-center'>
                                                        PROFESSIONAL INSTRUCTORS
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1 w-full h-fit">
                                        <div className="flex w-full h-full ">
                                            <div className='pt-[35px] px-[15px] max-[460px]:w-fit max-[460px]:mx-auto'>
                                                <div className="flex max-md:flex-col">
                                                    <div className='max-[460px]:pr-[0px] pr-[15px] max-[460px]:pb-[15px]'>
                                                        <div className="pb-[15px] w-fit h-fit leading-[1] text-white border-b-[2px] border-secondaryColor max-[460px]:mx-auto">
                                                            <span className='font-[400] text-[72px]'>25</span>
                                                        </div>
                                                    </div>
                                                    <div className='w-fit h-fit text-white text-lg font-[400] leading-6 pt-[10px] max-[460px]:text-center'>
                                                        NEW COURSES EVERY YEAR
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1 w-full h-fit">
                                        <div className="flex w-full h-full ">
                                            <div className='pt-[35px] px-[15px] max-[460px]:w-fit max-[460px]:mx-auto'>
                                                <div className="flex max-md:flex-col">
                                                    <div className='max-[460px]:pr-[0px] pr-[15px] max-[460px]:pb-[15px]'>
                                                        <div className="pb-[15px] w-fit h-fit leading-[1] text-white border-b-[2px] border-secondaryColor max-[460px]:mx-auto">
                                                            <span className='font-[400] text-[72px]'>119</span>
                                                        </div>
                                                    </div>
                                                    <div className='w-fit h-fit text-white text-lg font-[400] leading-6 pt-[10px] max-[460px]:text-center'>
                                                        LIVE SESSIONS EVERY MONTH
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1 w-full h-fit">
                                        <div className="flex w-full h-full ">
                                            <div className='pt-[35px] px-[15px] max-[460px]:w-fit max-[460px]:mx-auto'>
                                                <div className="flex max-md:flex-col">
                                                    <div className='max-[460px]:pr-[0px] pr-[15px] max-[460px]:pb-[15px]'>
                                                        <div className="pb-[15px] w-fit h-fit leading-[1] text-white border-b-[2px] border-secondaryColor max-[460px]:mx-auto">
                                                            <span className='font-[400] text-[72px]'>878</span>
                                                        </div>
                                                    </div>
                                                    <div className='w-fit h-fit text-white text-lg font-[400] leading-6 pt-[10px] max-[460px]:text-center'>
                                                        REGISTERED STUDENTS
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='min-h-fit h-full w-full bg-lightGray'>
                        <div className="container-md pt-[50px] pb-[100px]">
                            <div className='w-full h-full mb-[50px]'>
                                <div className='px-[0px] sm:px-[10px] md:px-[15px] text-center'>
                                    <h2 className='mb-[15px] h-fit font-[400]  text-primaryColor max-w-sm:text-[26px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]'>Expand Your Knowledge</h2>
                                    <p className='text-center md:w-3/4 mx-auto text-secondaryTextColor text-[15px] leading-7 font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque voluptatibus</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-2.5'>
                                <div className="col-span-1 grid grid-cols-1 gap-2.5">
                                    <div className='w-full h-[150px] md:[90px] lg:[150px] relative'>
                                        <img src={expand1} alt="webdevelopment_img" className='w-full h-full rounded-xl bg-cover' />
                                        <div className='absolute flex w-full h-full top-0 bg-primaryColor bg-opacity-55 rounded-xl'>
                                            <div className='w-full h-fit my-auto'>
                                                <div className='text-[22px] font-semibold leading-6 text-white text-center'>Web Development</div>
                                                <div className='text-[15px] font-[400] leading-7 text-white text-center mt-1'>Over 1,234 Courses</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full h-[150px] md:[90px] lg:[150px] relative'>
                                        <img src={marketingImg} alt="webdevelopment_img" className='w-full h-full rounded-xl' />
                                        <div className='absolute flex w-full h-full top-0 bg-primaryColor bg-opacity-45 rounded-xl'>
                                            <div className='w-full h-fit my-auto'>
                                                <div className='text-[22px] font-semibold leading-6 text-white text-center'>Marketing</div>
                                                <div className='text-[15px] font-[400] leading-7 text-white text-center mt-1'>Over 1,234 Courses</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 w-full h-auto sm:h-[310px] md:h-[70%] lg:h-[90%] bg-slate-500 rounded-xl relative">
                                    <img src={aiImg} alt="webdevelopment_img" className='w-full h-full rounded-xl' />
                                    <div className='absolute flex w-full h-full top-0 bg-primaryColor bg-opacity-45 rounded-xl'>
                                        <div className='w-full h-fit my-auto'>
                                            <div className='text-[22px] font-semibold leading-6 text-white text-center'>Machine Learning</div>
                                            <div className='text-[15px] font-[400] leading-7 text-white text-center mt-1'>Over 1,234 Courses</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 grid grid-cols-1 gap-2.5">
                                    <div className='w-full h-[150px] md:[90px] lg:[150px] relative'>
                                        <img src={ccImg} alt="webdevelopment_img" className='w-full h-full rounded-xl' />
                                        <div className='absolute flex w-full h-full top-0 bg-primaryColor bg-opacity-45 rounded-xl'>
                                            <div className='w-full h-fit my-auto'>
                                                <div className='text-[22px] font-semibold leading-6 text-white text-center'>Cloud Computing</div>
                                                <div className='text-[15px] font-[400] leading-7 text-white text-center mt-1'>Over 898 Courses</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full h-[150px] md:[90px] lg:[150px] relative'>
                                        <img src={programingImg} alt="webdevelopment_img" className='w-full h-full rounded-xl' />
                                        <div className='absolute flex w-full h-full top-0 bg-primaryColor bg-opacity-45 rounded-xl'>
                                            <div className='w-full h-fit my-auto'>
                                                <div className='text-[22px] font-semibold leading-6 text-white text-center'>Programming</div>
                                                <div className='text-[15px] font-[400] leading-7 text-white text-center mt-1'>Over 2,234 Courses</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='container-md min-h-fit h-full'>
                        <div className='flex flex-col pt-[80px] pb-[60px] w-full h-full'>
                            <div className='w-full h-full'>
                                <div className='px-[0px] sm:px-[10px] md:px-[15px] text-center'>
                                    <h2 className='mb-[15px] h-fit font-[400]  text-primaryColor max-w-sm:text-[26px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]'>What Our Students Say</h2>
                                    {/* <p className='text-center md:w-3/4 mx-auto text-secondaryTextColor text-[15px] leading-7 font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque voluptatibus, repellat eveniet laborum repudiandae reprehenderit suscipit error architecto quo.</p> */}
                                </div>
                            </div>
                            <div className='w-full h-full mt-[70px] mb-[100px]'>
                                <StudentQuotes item={studentQuotes}/>
                            </div>
                        </div>
                    </section>
                    <footer className='w-full min-h-fit h-full'>
                        <div className='bg-primaryColor w-full h-full'>
                            <div className="container-md pt-[80px] pb-[50px]">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                    <div className='col-span-1 px-[15px]'>
                                        <div className='w-full h-full flex flex-col mb-[45px] lg:mb-[22px]'>
                                            <h3 className='mb-4'>
                                                <img src={lightLogo} alt="brand-logo" className='' />
                                            </h3>
                                            <p className='mb-[30px] text-white text-[15px] leading-7'>
                                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint atque officia libero labore vero mollitia vitae perspiciatis consequuntur veniam!
                                            </p>
                                            <ul className='flex gap-1.5'>
                                                <li className='mb-[5px]'>
                                                    <a href="#" className=''>
                                                        <FaFacebookF className='text-[#bdc4cd] hover:bg-secondaryColor hover:text-primaryColor transition-all ease-linear rounded-sm shadow-xl font-[13px] border border-gray-400 p-2 w-[30px] h-[30px]' />
                                                    </a>
                                                </li>
                                                <li className='mb-[5px]'>
                                                    <a href="#">
                                                        <FaTwitter className='text-[#bdc4cd] hover:bg-secondaryColor hover:text-primaryColor transition-all ease-linear rounded-sm shadow-xl font-[13px] border border-gray-400 p-2 w-[30px] h-[30px]' />
                                                    </a>
                                                </li>
                                                <li className='mb-[5px]'>
                                                    <a href="#">
                                                        <FaGoogle className='text-[#bdc4cd] hover:bg-secondaryColor hover:text-primaryColor transition-all ease-linear rounded-sm shadow-xl font-[13px] border border-gray-400 p-2 w-[30px] h-[30px]' />
                                                    </a>
                                                </li>
                                                <li className='mb-[5px]'>
                                                    <a href="#">
                                                        <FaLinkedinIn className='text-[#bdc4cd] hover:bg-secondaryColor hover:text-primaryColor transition-all ease-linear rounded-sm  shadow-xl font-[13px] border border-gray-400 p-2 w-[30px] h-[30px]' />
                                                    </a>
                                                </li>
                                                <li className='mb-[5px]'>
                                                    <a href="#">
                                                        <FaPinterest className='text-[#bdc4cd] hover:bg-secondaryColor hover:text-primaryColor transition-all ease-linear rounded-sm shadow-xl font-[13px] border border-gray-400 p-2 w-[30px] h-[30px]' />
                                                    </a>
                                                </li>
                                                <li className='mb-[5px]'>
                                                    <a href="#">
                                                        <FaInstagram className='text-[#bdc4cd] hover:bg-secondaryColor hover:text-primaryColor transition-all ease-linear rounded-sm shadow-xl font-[13px] border border-gray-400 p-2 w-[30px] h-[30px]' />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-span-1 px-[15px]'>
                                        <div className='w-full h-full flex flex-col mb-[45px] lg:mb-[22px]'>
                                            <h3 className='text-white mb-[30px] font-[400] text-[20px] leading-7'>Featured Links</h3>
                                            <div className='w-full h-full'>
                                                <ul className='grid grid-cols-2 gap-y-2'>
                                                    <li className='col-span-1 pb-[5px] mb-[5px] text-white hover:text-secondaryColor transition-all ease-linear'>
                                                        <a href="#" className='flex text-[15px]'>
                                                            <MdOutlineKeyboardArrowRight className='text-secondaryColor mr-[2px] h-fit w-fit my-auto text-xl' />
                                                            Graduation
                                                        </a>
                                                    </li>
                                                    <li className='col-span-1 pb-[5px] mb-[5px] text-white hover:text-secondaryColor transition-all ease-linear'>
                                                        <a href="#" className='flex text-[15px]'>
                                                            <MdOutlineKeyboardArrowRight className='text-secondaryColor mr-[2px] h-fit w-fit my-auto text-xl' />
                                                            Courses
                                                        </a>
                                                    </li>
                                                    <li className='col-span-1 pb-[5px] mb-[5px] text-white hover:text-secondaryColor transition-all ease-linear'>
                                                        <a href="#" className='flex text-[15px]'>
                                                            <MdOutlineKeyboardArrowRight className='text-secondaryColor mr-[2px] h-fit w-fit my-auto text-xl' />
                                                            Admissions
                                                        </a>
                                                    </li>
                                                    <li className='col-span-1 pb-[5px] mb-[5px] text-white hover:text-secondaryColor transition-all ease-linear'>
                                                        <a href="#" className='flex text-[15px]'>
                                                            <MdOutlineKeyboardArrowRight className='text-secondaryColor mr-[2px] h-fit w-fit my-auto text-xl' />
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li className='col-span-1 pb-[5px] mb-[5px] text-white hover:text-secondaryColor transition-all ease-linear'>
                                                        <a href="#" className='flex text-[15px]'>
                                                            <MdOutlineKeyboardArrowRight className='text-secondaryColor mr-[2px] h-fit w-fit my-auto text-xl' />
                                                            International
                                                        </a>
                                                    </li>
                                                    <li className='col-span-1 pb-[5px] mb-[5px] text-white hover:text-secondaryColor transition-all ease-linear'>
                                                        <a href="#" className='flex text-[15px]'>
                                                            <MdOutlineKeyboardArrowRight className='text-secondaryColor mr-[2px] h-fit w-fit my-auto text-xl' />
                                                            Book Store
                                                        </a>
                                                    </li>
                                                    <li className='col-span-1 pb-[5px] mb-[5px] text-white hover:text-secondaryColor transition-all ease-linear'>
                                                        <a href="#" className='flex text-[15px]'>
                                                            <MdOutlineKeyboardArrowRight className='text-secondaryColor mr-[2px] h-fit w-fit my-auto text-xl' />
                                                            FAQs
                                                        </a>
                                                    </li>
                                                    <li className='col-span-1 pb-[5px] mb-[5px] text-white hover:text-secondaryColor transition-all ease-linear'>
                                                        <a href="#" className='flex text-[15px]'>
                                                            <MdOutlineKeyboardArrowRight className='text-secondaryColor mr-[2px] h-fit w-fit my-auto text-xl' />
                                                            Alumni
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-1 px-[15px]'>
                                        <div className='w-full h-full flex flex-col mb-[45px] lg:mb-[22px]'>
                                            <h3 className='text-white mb-[30px] font-[400] text-[20px] leading-7'>Information</h3>
                                            <div className='w-full h-full'>
                                                <ul className='flex flex-col gap-y-5'>
                                                    <li>
                                                        <a href="#" className='flex text-[16px] text-white'>
                                                            <TiLocation className='text-secondaryColor mr-[10px] h-fit w-fit text-lg mt-1' />
                                                            57 New Design Street, Chennai, India
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className='flex text-[16px] text-white'>
                                                            <FaPhoneAlt className='text-secondaryColor mr-[10px] h-fit w-fit text-lg mt-1' />
                                                            +91 8610740090
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className='flex text-[16px] text-white'>
                                                            <MdMail className='text-secondaryColor mr-[10px] h-fit w-fit text-lg mt-1' />
                                                            paviyarasantech@gmail.com
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className='flex text-[16px] text-white'>
                                                            <FaFax className='text-secondaryColor mr-[10px] h-fit w-fit text-lg mt-1' />
                                                            (123) 8989898329
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-1 px-[15px]'>
                                        <div className='w-full h-full flex flex-col mb-[45px] lg:mb-[22px]'>
                                            <h3 className='text-white mb-[30px] font-[400] text-[20px] leading-7'>Newsletter</h3>
                                            <div className='w-full h-full'>
                                                <h2 className='text-[15px] text-white leading-7 mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, culpa.</h2>
                                                <form action="">
                                                    <div className='flex flex-col gap-5'>
                                                        <input type="text" className='w-full h-full outline-none border border-[#354c66] px-4 rounded-md bg-transparent text-base min-h-[50px] focus:border-secondaryColor text-white' placeholder='Email Address' />
                                                        <button type='submit' className='bg-secondaryColor text-primaryColor font-bold w-fit h-fit rounded-sm text-base transition-all ease-linear hover:bg-opacity-70 py-3 px-10'>Subscribe Now</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#001A39] py-[20px] text-[15px]'>
                            <div className="container-md px-[15px]">
                                <div className="flex flex-col md:flex-row justify-between max-md:text-center">
                                    <h3 className='text-[#909da4] h-fit my-auto'>© Copyright Eikra 2020. Designed and Developed by <a href='#' className='text-white ml-1 hover:text-secondaryColor'>EikraTheme</a></h3>
                                    <div className='flex gap-2 max-md:mt-[10px] w-fit h-fit max-md:ml-auto max-md:mr-auto'>
                                        <img src={visaImg} className='w-[34px] h-[21px]' alt="" />
                                        <img src={mtImg} className='w-[34px] h-[21px]' alt="" />
                                        <img src={paypalImg} className='w-[34px] h-[21px]' alt="" />
                                        <img src={vtrImg} className='w-[34px] h-[21px]' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
        </div >
    )
}

export default Home
