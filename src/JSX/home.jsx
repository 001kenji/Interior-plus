import React, { memo, useState } from "react";
import Navbar from './nav'
import Footer from './footer'
import '../App.css'
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { MdWeb } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { TbNetwork } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { SiApple } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { MdDeveloperMode } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { VscSaveAll } from "react-icons/vsc";
import SaleImg from '../assets/images/jobs/1.jpg'
import MarketingImg from '../assets/images/jobs/4.jpg'
import ProgrammerImg from '../assets/images/jobs/3.jpg'
import { FaArrowRightLong } from "react-icons/fa6"; 
function Home() {

    const [showScroller, setShowScroller] = useState(true)
    
    window.addEventListener('scroll', function() {
        console.log('scrolled')
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          setShowScroller(true)
        } else {
          setShowScroller(false)
        }
      })
    const Jobist = [
        {
            'img' : <FcGoogle /> ,
            'title' : 'Technical Lead',
            'location' : 'Kuala, Canada',
            'cost' : '$20k',
            'time' : ' 10 hours ago',
            'experties' : 'internship',
            'position' : 'freelance'
        },
        {
            'img' : <SiApple /> ,
            'title' : 'Business Director',
            'location' : ' California, Jamaica',
            'cost' : '$50k',
            'time' : '  3 day ago',
            'experties' : 'senior',
            'position' : 'Full Time'
        },
        {
            'img' : <FaMeta /> ,
            'title' : 'HR Manager',
            'location' : ' Tower, Paris',
            'cost' : '$30k',
            'time' : '22 hours ago',
            'experties' : 'junior',
            'position' : 'Contract'
        },
        {
            'img' : <MdDeveloperMode />,
            'title' : 'Dev Ops',
            'location' : 'Tokyo, Thailand',
            'cost' : '$60k-80k',
            'time' : ' 10 hours ago',
            'experties' : 'senior',
            'position' : 'Part Time'
        }

    ]
    const MapperJobsFeatured = Jobist.map((items) => {
        return (
            <div className=" lg:w-[40%] hover:shadow-lg cursor-pointer hover:shadow-purple-600 transition-all duration-500 flex flex-col w-[90%] mx-auto bg-slate-100 rounded-md py-4 px-2">
                    <div className=" flex flex-row gap-2">
                        <div className=" flex text-2xl sm:text-5xl text-center align-middle mb-auto rounded-full bg-slate-100 shadow-lg p-2 shadow-slate-700">{items.img }</div>
                        <div className=" flex flex-col gap-2 w-[80%]">
                            <big id="big" className=" text-center text-xl">{items.title}</big>
                            <div className=" flex flex-row w-full align-middle gap-3 flex-wrap sm:flex-nowrap justify-around">
                                <span className=' text-sm flex-row flex gap-1 my-auto sm:text-lg'><CiLocationOn className=" my-auto text-2xl" /> {items.location}</span>
                                <span className=" text-sm flex flex-row gap-1 align-middle my-auto"><CiClock1 className=" my-auto text-xl" /> {items.time}</span>
                            </div>
                            <div className=" flex flex-row w-full align-middle gap-3 flex-wrap sm:flex-nowrap justify-around">
                                <span className=' text-sm flex-row flex gap-1 my-auto sm:text-lg'><FaMoneyCheckDollar  className=" my-auto text-2xl text-sky-500" /> {items.cost}</span>
                                <span className=" rounded-full px-2 py-1 text-slate-100 font-semibold bg-purple-800 text-sm my-auto ">{items.experties}</span>
                                <span className=" rounded-full px-2 py-1 text-slate-100 font-semibold bg-purple-800 text-sm my-auto ">{items.position}</span>
                            </div>
                            <div className=" flex flex-row w-full justify-end">
                                <button className=" min-w-[100px] rounded-lg py-2 px-3 w-fit bg-orange-600 text-slate-100 font-semibold hover:bg-sky-600  ">Apply</button>

                            </div>
                        </div>
                    </div>

            </div>
        )
    })

    const RecentJobData = [
        {
            'img' : SaleImg,
            'title' : 'Technical Lead',
            'logoname' : 'Salesforce',  
            'logoImg' : 'data:image/png;base64,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',
            'location' : 'Malaysia',
            'time' : '6 hrs ago',
            'cost' : '$50k'
        },
        {
            'img' : MarketingImg,
            'title' : 'Marketing Assistant',
            'logoname' : 'Spotify',  
            'logoImg' : 'data:image/png;base64,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',
            'location' : 'California, USA',
            'time' : '2 hrs ago',
            'cost' : '$20k'
        },
        {
            'img' : ProgrammerImg,
            'title' : 'Programmer',
            'logoname' : 'Twiter',  
            'logoImg' : 'data:image/png;base64,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',
            'location' : 'London, USA',
            'time' : '21 hrs ago',
            'cost' : '$60k'
        }
    ]
    const MapperRecentJobs = RecentJobData.map((items) => {
        return (
            <div className=" mx-auto card card-compact w-96 bg-base-100 shadow-xl">
                
                <figure ><img src={items.img} alt="Shoes" /></figure>

                <div className="card-body">
                    <h2 className="card-title">{items.title}</h2>
                    <div className=" flex flex-row justify-between py-3">
                        <div className=" flex flex-row gap-2">
                            <img className=" my-auto rounded-full min-w-fit  w-12 h-12" src={items.logoImg} alt="" />
                            <span className=" my-auto">{items.logoname}</span>
                        </div>
                        <div className=" flex flex-row gap-1 my-auto text-2xl">
                            <CiHeart className=" text-slate-800 bg-transparent hover:text-red-600" />
                            <VscSaveAll className=" text-slate-800 bg-transparent hover:text-orange-600" />
                        </div>
                    </div>
                    <div className=" flex-row flex justify-start gap-4 py-3 border-b-[1px] border-b-gray-400">
                        <span className=' text-sm flex-row flex gap-1 my-auto sm:text-lg'><CiLocationOn className=" my-auto text-2xl" /> {items.location}</span>
                        <span className=" text-sm flex flex-row gap-1 align-middle my-auto"><CiClock1 className=" my-auto text-xl" /> {items.time}</span>
                    </div>
                    <div className="card-actions justify-between">
                    <span className=' text-sm flex-row flex gap-1 my-auto sm:text-lg'><FaMoneyCheckDollar  className=" my-auto text-2xl text-sky-500" /> {items.cost}</span>

                    <button className="btn btn-primary">Apply</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className=" w-full">
            
                <div className=' ' id='navSect'>
                    <Navbar />
                </div>
                {/* home section */}
                <div id="home" className={` z-50 opacity-100 h-[500px] md:min-h-[700px] bg-cover bg-center flex w-full`}>
                    <div className=" px-2 bg-purple-600 bg-opacity-70 h-full md:mx-auto  min-h-full w-full flex justify-around flex-col md:flex-row p-4 md:justify-around gap-2">
                        <div className=" md:mx-auto text-slate-100 flex flex-col gap-2 w-fit max-w-[300px] md:max-w-fit md:my-auto text-left">
                            <small className=" font-semibold text-slate-100 md:text-2xl">Are you looking for your dream job?</small>
                            <big id="big" className=" font-bold text-2xl md:text-4xl">Online Job Platform.</big>
                            <big id="big"  className=" font-bold text-2xl md:text-4xl">Job portal</big>
                            <button className=" w-fit px-2 py-1 ring-2 ring-sky-500 rounded-xl text-base font-semibold text-blue-400  hover:text-slate-100 hover:bg-sky-500 transition-all duration-500">Browse Section</button>
                        </div>
                        <div className=" mb-4 flex flex-col w-fit min-w-[250px] justify-around py-2 md:my-auto sm:min-w-[350px]  rounded-md mx-auto min-h-[300px] bg-purple-500">
                                <span className=" flex flex-row gap-3  bg-slate-100 rounded-xl  py-2 w-[90%] mx-auto px-1">
                                    <CgProfile className=" text-slate-800 my-auto" />
                                    <input className=" placeholder:text-gray-500 bg-transparent outline-none" placeholder="Job Title" type="text" />
                                </span>
                                <span className=" flex flex-row gap-3  bg-slate-100 rounded-xl  py-2 w-[90%] mx-auto px-1">
                                    <CiLocationOn  className=" text-slate-800 my-auto" />
                                    <input className=" placeholder:text-gray-500 bg-transparent outline-none" placeholder="Location" type="text" />
                                </span>
                                <button className=" w-[70%] mx-auto px-2 py-1 rounded-xl bg-purple-800 font-semibold text-center ">Find Job</button>
                                <div className=" mx-auto flex flex-col gap-1 w-[90%] text-slate-100">
                                    <span className=" font-semibold">Latest keywords:</span>
                                    <div className=" flex flex-row gap-2 justify-around flex-wrap sm:flex-nowrap mx-auto w-full">
                                        <div className="badge badge-outline py-2">Web design</div>
                                        <div className="badge badge-outline py-2">Marketing</div>
                                        <div className="badge badge-outline py-2">Trading</div>

                                    
                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
                {/* browse categories */}
                <div id="Categories" className=" justify-around flex flex-row flex-wrap w-full gap-3 min-h-[500px] md:max-w-[80%] mx-auto ">
                    <big id="big" className=" text-3xl md:text-5xl h-fit w-full text-center mt-4">Browse by Categories</big>
                    <div className=" indicator m-auto rounded-full bg-purple-600 hover:bg-slate-200 transition-all cursor-pointer duration-500 p-2 w-32 h-32">
                        <span className="indicator-item bg-sky-600  indicator-center badge badge-primary">325+</span>
                        <div className=" flex  flex-col gap-1 w-full h-full justify-center text-center mx-auto rounded-full bg-purple-700">
                            <MdWeb className=" text-slate-200 text-3xl flex mx-auto w-fist" />
                            <span className=" text-slate-200 text-sm">Web design</span>
                        </div>
                    </div>
                    <div className=" indicator m-auto rounded-full bg-purple-600 hover:bg-slate-200 transition-all cursor-pointer duration-500 p-2 w-32 h-32">
                        <span className="indicator-item bg-sky-600  indicator-center badge badge-primary">200+</span>
                        <div className=" flex  flex-col gap-1 w-full h-full justify-center text-center mx-auto rounded-full bg-purple-700">
                            <SiCoinmarketcap  className=" text-slate-200 text-3xl flex mx-auto w-fist" />
                            <span className=" text-slate-200 text-sm">Marketing</span>
                        </div>
                    </div>
                    <div className=" indicator m-auto rounded-full bg-purple-600 hover:bg-slate-200 transition-all cursor-pointer duration-500 p-2 w-32 h-32">
                        <span className="indicator-item bg-sky-600  indicator-center badge badge-primary">10k+</span>
                        <div className=" flex  flex-col gap-1 w-full h-full justify-center text-center mx-auto rounded-full bg-purple-700">
                            <FaYoutube  className=" text-slate-200 text-3xl flex mx-auto w-fist" />
                            <span className=" text-slate-200 text-sm">Videos</span>
                        </div>
                    </div>
                    <div className=" indicator m-auto rounded-full bg-purple-600 hover:bg-slate-200 transition-all cursor-pointer duration-500 p-2 w-32 h-32">
                        <span className="indicator-item bg-sky-600  indicator-center badge badge-primary">405+</span>
                        <div className=" flex  flex-col gap-1 w-full h-full justify-center text-center mx-auto rounded-full bg-purple-700">
                            <TbNetwork  className=" text-slate-200 text-3xl flex mx-auto w-fist" />
                            <span className=" text-slate-200 text-sm">Websites</span>
                        </div>
                    </div>
                    <div className=" indicator m-auto rounded-full bg-purple-600 hover:bg-slate-200 transition-all cursor-pointer duration-500 p-2 w-32 h-32">
                        <span className="indicator-item bg-sky-600 ring-0 indicator-center badge badge-primary">104</span>
                        <div className=" flex  flex-col gap-1 w-full h-full justify-center text-center mx-auto rounded-full bg-purple-700">
                            <MdSupportAgent  className=" text-slate-200 text-3xl flex mx-auto w-fist" />
                            <span className=" text-slate-200 text-sm">Support Center</span>
                        </div>
                    </div>

                </div>
                <div className=" mb-3 flex flex-col  lg:flex-row gap-0 md:gap-2 w-[80%]   mx-auto h-fit">
                    <div id="Investor" className={`md:min-h-[500px] md:min-w-[350px] my-auto py-4 bg-top bg-cover flex relative min-h-[300px] m w-full rounded-t-lg`}>
                        <div className=" bg-sky-500 rounded-lg flex  left-full mt-auto ml-auto mr-3  min-h-[100px]">
                            <div className=" text-left h-[90%] rounded-b-lg px-2 mt-auto w-full bg-purple-700 text-slate-100">
                                <big>Julia Ward</big>
                                <p>Investor</p>
                            </div>
                        </div>
                    </div>
                    <div className=" md:min-h-[500px] my-auto flex md:min-w-[400px] flex-col py-4 h-fit justify-around pl-3 gap-3 w-full mx-auto min-h-fit bg-sky-500 text-slate-100">
                        <big id="big" className=" text-2xl">Introduction Online Job</big>
                        <blockquote className=" text-left sm:text-lg flex py-2 font-mono">
                            The online job world offers a vast landscape of opportunities, allowing you to work remotely using the internet. From freelance gigs to full-time positions, it provides flexibility and a chance to find work that suits your skills and interests. But keep in mind, success often depends on self-motivation and the ability to manage your time effectively.
                        </blockquote>
                        <div className=" flex flex-row w-full justify-start gap-4 my-auto">
                            <button className=" w-fit px-2 py-1 ring-2 ring-sky-500 rounded-xl text-base font-semibold text-blue-700  hover:text-slate-100 hover:bg-sky-500 transition-all duration-500">Get to know Us</button>
                            <button className=" font-semibold bg-transparent text-slate-100 hover:underline-offset-2 transition-all duration-500 hover:text-pink-700 ">Explore Jobs</button>
                        </div>
                    </div>
                    <div id="divimage" className={` md:min-h-[500px] md:min-w-[350px] my-auto rounded-b-xl py-4 bg-top bg-cover flex relative min-h-[300px] m w-full rounded-t-lg`}>
                            <span className=" bg-orange-600 text-slate-100 flex flex-row gap-1 h-fit my-auto mx-auto px-3 py-2 rounded-md">                                    
                                <CiInstagram className=" my-auto text-xl" />
                                <p>@Jobs</p>
                            </span>
                    </div>
                </div>
                <div id="Featured" className=" py-4 bg-slate-200 mx-auto w-full h-fit">
                    <div className=" flex flex-col w-full justify-around gap-3">
                        <big className=" text-center text-2xl md:text-4xl" id="big">Featured Jobs</big>
                        <blockquote className=" text-center md:text-lg">success often depends on self-motivation and the ability to manage your time effectively</blockquote>
                    </div>
                    <div className=" flex flex-col py-4 md:max-w-full md:w-full md:flex-wrap md:gap-4 md:flex-row gap-5 w-[80%]  mx-auto max-w-[700px] h-fit" >
                        {MapperJobsFeatured}
                    </div>
                    <div className=" flex justify-center">
                        <div className="join">
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        </div>
                    </div>
                </div>
                <div className=" my-3 lg:my-10 flex flex-col lg:flex-row gap-0 md:gap-2 w-[80%]  max-w-[800px] mx-auto h-fit">
                    <div  className={` lg:min-w-[450px] pl-2 bg-purple-700 flex-col justify-around md:min-h-[400px] gap-3 py-4 bg-top bg-cover flex relative min-h-[300px] m w-full rounded-t-lg`}>
                        <big className=" text-left text-slate-100 text-2xl" id="big">We helps you an easier way to get new job</big>
                        <blockquote className=" text-left font-mono text-slate-100">Streamlines your job search by matching skills to opportunities, provides guidance on applications and interviews, and saves you time finding the perfect fit.</blockquote>
                        <div className=" flex flex-row w-full justify-start gap-5">
                            <div className=" flex flex-col gap-2 text-slate-100">
                                <big className=" text-2xl">5M</big>
                                <span className=" text-sky-200">Daily visits</span>
                            </div>
                            <div className=" flex flex-col gap-2 text-slate-100">
                                <big className=" text-2xl">532K+</big>
                                <span className=" text-sky-200">Available Jobs</span>
                            </div>
                        </div>

                    
                    </div>
                    <div id="divimage" className={` lg:min-w-[450px]  rounded-b-xl py-4 bg-top bg-cover md:min-h-[400px] flex relative min-h-[300px] m w-full rounded-t-lg`}>
                            <span className=" bg-red-600 text-slate-100 flex flex-row  relative z-40 opacity-100  h-20 w-20 my-auto mx-auto  rounded-full">                                    
                                <TbBrandYoutubeFilled  className=" text-slate-100  my-auto text-4xl m-auto z-50" />
                                <div className=" w-20 h-20 bg-slate-200 rounded-full p-4 absolute z-30 transition-all opacity-90 duration-500 mx-auto animate-ping" ></div>
                            </span>
                    </div>
                </div>
                <div id="Recent" className=" py-4 bg-slate-200">
                    <div className=" flex flex-col w-full justify-around gap-3">
                        <big className=" text-center text-2xl md:text-4xl" id="big">Recent Jobs</big>
                        <blockquote className=" text-center md:text-lg">success often depends on self-motivation and the ability to manage your time effectively</blockquote>
                    </div>
                    <div className="  flex flex-col md:flex-row my-4 md:flex-wrap justify-center align-middle w-full gap-3">
                        {MapperRecentJobs}
                    </div>
                </div>
                <div id="moreData" className={` z-50 opacity-100 h-[500px] bg-cover bg-center flex w-full`}>
                    <div className=" px-2 bg-red-600 bg-opacity-70 h-full min-h-full w-full flex justify-center align-middle">
                        <div className=" text-slate-100 my-auto flex flex-col gap-2 w-fit  text-center">
                            <big id="big" className=" font-bold text-2xl   md:text-3xl">Over 10k opening jobs</big>
                            <big id="big"  className=" font-bold text-2xl  md:text-3xl">Job portal</big>
                            <button className=" w-fit px-2 py-1 ring-2 ring-sky-500 rounded-xl text-base font-semibold text-slate-900  hover:text-slate-100 hover:bg-sky-500 transition-all duration-500">Create Acount</button>
                            <button className=" w-fit px-2 py-1  text-base font-semibold text-slate-900  hover:text-slate-100 hover:bg-sky-500 transition-all duration-500">Browse Section</button>
                        </div>
                    </div>
                </div>
                <button className={` top-[90%] float-right right-2 ${showScroller ? 'sticky' : 'hidden'} bottom-0 bg-blue-600 text-slate-100 p-1 md:text-base text-sm `} ><a href="#navSect"><FaArrowRightLong className=' p-1 text-xl md:text-2xl xl:text-4xl rotate-[270deg]' /></a></button>

                <div className=" bottom-0 w-full">
                    <Footer />
                </div>
            
            </div>
        </>
    )
}

export default memo(Home)
