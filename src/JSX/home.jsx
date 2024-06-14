import React, { memo, useState } from "react";
import Navbar from './nav'
import Footer from './footer'
import '../App.css'
import { CiHeart } from "react-icons/ci";
import SaleImg from '../assets/images/jobs/1.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6"; 
import { GoClock } from "react-icons/go";
import ProductImg1 from '../assets/images/images/shop/1.jpg'
import ProductImg2 from '../assets/images/images/shop/2.jpg'
import ProductImg3 from '../assets/images/images/shop/3.jpg'
import ProductImg4 from '../assets/images/images/shop/4.jpg'
import ProductImg5 from '../assets/images/images/shop/5.jpg'
import { CiBookmark } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import ClientImg1 from '../assets/images/images/avatar/1.jpg'
import ClientImg2 from '../assets/images/images/avatar/2.jpg'
import ClientImg3 from '../assets/images/images/avatar/3.jpg'
import ClientImg4 from '../assets/images/images/avatar/4.jpg'
import ClientImg5 from '../assets/images/images/avatar/5.jpg'
function Home() {

    const [showScroller, setShowScroller] = useState(true)
    const [clientScroll,setclientScroll] = useState(0)
    window.addEventListener('scroll', function() {
       
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          setShowScroller(true)
        } else {
          setShowScroller(false)
        }
      })
    const products = [
        {
            'img' : ProductImg1,
            'cost' : '$3,200',
        },
        {
            'img' : ProductImg2,
            'cost' : '$7,200',
        },
        {
            'img' : ProductImg3,
            'cost' : '$2,200',
        },
        {
            'img' : ProductImg4,
            'cost' : '$9,200',
        },
        {
            'img' : ProductImg5,
            'cost' : '$1,400',
        },       

    ]
    const MapperProducts = products.map((items) => {
        return (
            <div className=" flex group  rounded-md m-auto max-w-[400px] w-fit min-h-fit h-fit bg-base-100 shadow-xl image-full">
                <figure><img className=" z-40 transition-all duration-300 rounded-md  cursor-pointer" src={items.img} alt="Shoes" /></figure>
                <div className=" h-fit  z-50 flex w-fit absolute  justify-end p-4  bg-opacity-90">
                    
                    <div data-tip={items.cost}  className="tooltip tooltip-primary tooltip-open tooltip-bottom w-fit flex  flex-col bg-slate-300 p-4 rounded-md jus justify-end">
                        <CiHeart className=" text-lg hover:text-red-600 cursor-pointer" />
                        <CiBookmark  className=" text-lg hover:text-xl hover:text-red-600 cursor-pointer" />
                    </div>

                </div>
                <span className=" group-hover:flex text-slate-100 font-semibold  hidden absolute ml-[10%] w-20 h-20 mt-10 text-center align-middle rounded-full bg-orange-500 cursor-pointer hover:bg-purple-700 transition-all duration-500 "><p className=" text-center m-auto ">More</p></span>

            </div>
        )
    })

    const clientData = [
        {
            'img' : ClientImg1,
            'description' : 'We were so impressed with Interiorplus\'s ability to listen to our ideas and translate them into a stunning design.  They completely transformed our outdated kitchen into a modern and functional space that perfectly suits our family\'s needs. We couldn\'t be happier pen_spark',
            'position' : 'Partner',
            'stars' : 3
        },
        {
            'img' : ClientImg2,
            'description' : 'Interiorplus is a dream to work with! They were incredibly patient with us throughout the entire design process, offering a variety of options that fit our style and budget. The end result is a home that feels both luxurious and incredibly comfortable - exactly what we were hoping for.pen_spark',
            'position' : 'Client',
            'stars' : 4
        },
        {
            'img' : ClientImg3,
            'description' : 'From the initial consultation to the final installation, [Company Name] was professional, efficient, and reliable. They kept us informed every step of the way and made sure the project stayed on schedule and within budget. We wouldn\'t hesitate to recommend them to anyone looking for a top-notch home design company.pen_spark',
            'position' : 'CEO',
            'stars' : 4
        },
        {
            'img' : ClientImg4,
            'description' : 'Interiorplus isn\'t afraid to push boundaries and create truly unique designs. They helped us turn our vision for a sustainable and eco-friendly home into a reality.  We love the innovative materials and space-saving solutions they incorporated - our home is not only beautiful but also incredibly functional.',
            'position' : 'Investor',
            'stars' : 2
        },
        {
            'img' : ClientImg5,
            'description' : 'We were initially overwhelmed by the thought of renovating our bathroom, but Interiorplus made the process stress-free. Their team is highly skilled and knowledgeable, and they were able to complete the project quickly and efficiently. The final result is a spa-like retreat that exceeds our expectations.',
            'position' : 'SalesMan',
            'stars' : 3
        }
        
    ]

    const ShowStars = (props) => {
        var num = Number(props)
        var str = []
        var x = 0
        for (x; x < num; x++) {
            str.push(<FaStar  key={x} />)
        }
        return str
    }

    const MapperClients = clientData.map((items,i) => {
        return (
            <div key={i} className=" w-full  min-w-full p-4 duration-700 ease-in-out" data-carousel-item="active" >
                <div className=" hover:shadow-lg transition-all duration-500 hover:shadow-slate-800 w-[80%] flex flex-col mx-auto ring-1 ring-sky-700 rounded-md p-3">
                    <blockquote className="lg:text-base font-semibold font-mono text-sm px-2 text-left">{items.description}</blockquote>
                    <div className=" flex flex-row justify-between sm:px-10 w-full p-4">
                        <img className=" rounded-full w-20 h-20 my-auto" src={items.img} alt="" />
                        <div className=" flex flex-col">
                            <big className=" my-auto" id="big">{items.position}</big>
                            <blockquote  className=" flex flex-row gap-2 align-middle w-fit my-auto text-yellow-400" >{ShowStars(items.stars)}</blockquote>                        </div>
                    </div>
                </div>
            </div>
        )
    })

    function MoveClient (props){
        if(props == 'left'){
            setclientScroll((e) => e  != 0 ? e -1 : clientData.length -1)
        }else if(props == 'right'){
            setclientScroll((e) => e  >= clientData.length - 1 ? 0 : e + 1)
        }
    }
    const MapperClientsCircles = clientData.map((items,y) => {
        return (
            <button onClick={() => setclientScroll(y)} key={y} type="button" class="w-3 h-3 hover:bg-orange-500 transition-all duration-500 bg-sky-700 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={y}></button>
        )
    })

    return (
        <>
            <div className=" w-full">
            
                <div className=' ' id='navSect'>
                    <Navbar />
                </div>
                {/* home section */}
                <div id="home" className={` z-50 flex flex-col lg:flex-row lg:align-middle justify-around gap-10 py-10 opacity-100 h-fit min-h-[500px] md:min-h-[600px] bg-cover bg-center  w-full`}>
                        <div className=" flex flex-col gap-2 lg:my-auto w-fit mx-auto ">
                            <span className=" italic mx-auto md:text-lg">Welcome to Interiorplus</span>
                            <big className=" text-3xl mx-auto text-center md:text-4xl" id='big'>Beautiful Decorate </big>
                            <big className=" text-3xl mx-auto text-center md:text-4xl" id='big'>interior for your space</big>
                        </div>
                        <div className=" flex max-w-[400px] lg:w-[500px] lg:my-auto mx-auto w-[300px]">
                            <form className=" shadow-xl shadow-slate-700 card-body gap-4">
                                <div className="form-control">
                                <input className=' lg:py-4 lg:min-h-[70px] bg-transparent lg:border-slate-600 placeholder:text-sm input input-bordered' type="email" placeholder="dining hall, living room..."  required />
                                </div>
                                <div className="form-control">
                                <input placeholder="$400 to $1000" className=" lg:py-4 lg:min-h-[70px] bg-transparent lg:border-slate-600 placeholder:text-sm input input-bordered" type="text"  required />
                                
                                </div>
                                <div className="form-control mt-6">
                                <button className="lg:min-h-[60px] w-[200px] mx-auto btn hover:bg-transparent hover:text-slate-950 hover:font-semibold hover:ring-1 hover:ring-blue-600 btn-primary">Search</button>
                                </div>
                            </form>
                        </div>
                        
                </div>
                {/* browse categories */}
                <div id="About" className=" bg-slate-50 justify-around flex flex-row flex-wrap w-full gap-3 md:gap-0 min-h-[500px]  mx-auto ">
                    <big id="big" className=" text-3xl md:text-5xl h-fit w-fit md:w-full justify-center  mx-auto text-center mt-4 flex flex-col  sm:flex-row gap-3 "><p className="">Introducing</p> <span id="big" className=" flex   flex-row gap-0 my-auto"><p className=" text-sky-600">Interior</p>plus</span></big>
                    <div className=" px-3 flex flex-col gap-3 lg:my-auto  w-full lg:w-[30%]">
                        <span className=" text-left font-semibold lg:text-xl text-gray-600">Since 1986, We handcraft beautiful and functional interior products that create better spaces.</span>
                        <p className=" font-mono text-gray-600 lg:text-lg" >For over 35 years, we've poured passion into creating innovative furniture and decor that transforms houses into functional and inspiring homes.</p>
                    </div>
                    <div className="  flex flex-col sm:flex-row gap-3  w-full lg:w-[50%]">
                        <div className=" w-52 h-52 lg:my-auto lg:w-64 lg:h-64 rounded-full bg-center bg-cover mx-auto" id="Aboutimg1" ></div>
                        <div className=" w-64 h-64 lg:my-auto lg:w-96 lg:h-96 rounded-full bg-center bg-cover mx-auto" id="Aboutimg2" ></div>

                    </div>

                </div>
                <div id="hrs" className=" bg-cover bg-right justify-around flex flex-row flex-wrap w-full gap-3 md:gap-0 min-h-[500px]  mx-auto  ">
                    <div className=" flex flex-col h-fit min-h-[200px] max-w-[400px] min-w-[300px] my-auto mr-auto ml-1 lg:ml-8 py-2 max-h-[300px] ">     
                        <span className=" w-full bg-orange-500 min-w-full min-h-6 rounded-t-lg"></span>                 
                        <div className=" w-full min-w-full h-[90%]  bg-transparent">
                            <h5 class="mb-2 text-2xl px-2 font-bold tracking-tight text-gray-900 dark:text-white">Opening Hours</h5>
                            <div className=" bg-slate-400 px-2 sm:bg-transparent bg-opacity-60 w-full py-4 flex flex-row gap-2">
                                <GoClock className=" text-2xl mb-auto" />
                                <div className=" flex flex-col gap-2 w-fit mx-auto">
                                    <span className=" flex flex-col sm:justify-around mx-auto w-full  sm:flex-row sm:gap-1"><p className=" font-semibold text-slate-700 text-lg">Mon - Friday ~</p> <p className=" font-bold text-xl">8:00 AM - 6:00 PM</p> </span>
                                    <span className=" flex flex-col sm:justify-around mx-auto w-full  sm:flex-row sm:gap-1"><p className=" font-semibold text-slate-700 text-lg">Saturday ~</p> <p className=" font-bold text-xl">10:00 AM - 10:00 PM</p> </span>
                                    <span className=" flex justify-between mx-auto w-full flex-row sm:gap-1"><p className=" font-semibold text-slate-700  text-lg">Sunday ~</p> <p className=" text-slate-600 text-xl">Closed</p> </span>
                                </div>
                            </div>
                        
                        </div>                             

                    </div>
                </div>
                <div id="Products" className=" py-4 bg-slate-200 mx-auto w-full h-fit">
                    <div className=" flex flex-col w-full justify-around gap-3">
                        <big id="big" className=" text-3xl md:text-5xl h-fit w-fit md:w-full justify-center  mx-auto text-center mt-4 flex flex-col  sm:flex-row gap-3 "><p className="">Products</p> <span id="big" className=" flex   flex-row gap-0 my-auto"><p className=" text-sky-600">Interior</p>plus</span></big>
                    </div>
                    <div className=" flex  py-4  flex-row flex-wrap gap-3 w-full h-fit" >
                        {MapperProducts}
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
                <div id="client" className=" min-h-[500px] py-4 bg-slate-200 mx-auto w-full h-fit">
                    <div className=" flex flex-col w-full justify-around gap-3">
                        <big id="big" className=" text-3xl md:text-5xl h-fit w-fit md:w-full justify-center  mx-auto text-center mt-4 flex flex-col  sm:flex-row gap-3 "><p className="">Review</p> <span id="big" className=" flex   flex-row gap-0 my-auto"><p className=" text-sky-600">Interior</p>plus</span></big>
                    </div>
                    <div id="indicators-carousel" className="relative max-w-[700px] h-fit mt-10 my-auto mx-auto w-full overflow-hidden" data-carousel="static">
                    {/* <!-- Carousel wrapper --> */}
                        <div style={{transform: `translateX(-${clientScroll * 100}%)`}} className={` relative h-fit min-h-fit transition-all duration-500  flex flex-row w-full  rounded-lg `}>
                            {MapperClients}
                        </div>
                        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            {MapperClientsCircles}
                        </div>
                        
                        {/* <!-- Slider controls --> */}
                        <button onClick={()=> MoveClient('left')} type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-sky-700 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-slate-800 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button onClick={()=> MoveClient('right')} type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-sky-700 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-slate-800 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                    
                </div>
                <div id="message" className=" min-h-[500px] py-4 bg-slate-200 mx-auto w-full h-fit">
                    <div className=" flex flex-col w-full justify-around gap-3">
                        <big id="big" className=" text-3xl md:text-5xl h-fit w-fit md:w-full justify-center  mx-auto text-center mt-4 flex flex-col  sm:flex-row gap-3 "><p className="">Message</p> <span id="big" className=" flex   flex-row gap-0 my-auto"><p className=" text-sky-600">Interior</p>plus</span></big>
                    </div>
                    <div className=" flex flex-col lg:min-h-[600px] justify-center py-4 lg:justify-around gap-3 lg:flex-row w-full h-fit">
                            <form className=" lg:my-auto rounded-sm bg-slate-300 p-4 flex flex-col mx-auto gap-3 w-fit min-w-[300px] max-w-[300px] sm:max-w-[400px]" action="">
                                <span className=" flex flex-row gap-3 ring-2 ring-gray-300  bg-slate-100 rounded-sm  py-2 w-full mx-auto px-1">
                                    <span className=" text-sm sm:text-base font-semibold my-auto">First Name</span>
                                    <input className=" text-ellipsis placeholder:text-gray-500 ring-0 bg-transparent border-none my-auto outline-none" placeholder="Name" type="text" />
                                </span>
                                <span className=" flex flex-row gap-3 ring-2 ring-gray-300  bg-slate-100 rounded-sm  py-2 w-full mx-auto px-1">
                                    <span className=" w-fit min-w-fit font-semibold my-auto text-sm sm:text-base">Last Name</span>
                                    <input className=" text-ellipsis placeholder:text-gray-500 ring-0 bg-transparent border-none my-auto outline-none" placeholder="Name" type="text" />
                                </span>
                                <span className=" flex flex-row gap-3 ring-2 ring-gray-300  bg-slate-100 rounded-sm  py-2 w-full mx-auto px-1">
                                    <span className=" font-semibold my-auto text-sm sm:text-base">Email Address</span>
                                    <input className=" text-ellipsis placeholder:text-gray-500 ring-0 bg-transparent border-none my-auto outline-none" placeholder="Email" type="email" />
                                </span>
                                <span className=" flex flex-row gap-3 ring-2 ring-gray-300  bg-slate-100 rounded-sm  py-2 w-full mx-auto px-1">
                                    <span className=" font-semibold mt-3 mb-auto text-sm sm:text-base">Message</span>
                                    <textarea className=" w-full min-h-[80px] max-h-[200px] placeholder:text-gray-500 ring-0 bg-transparent border-none my-auto outline-none" placeholder="Name" ></textarea>
                                </span>
                                <button type="button" className="lg:min-h-[60px] w-[150px] mx-auto btn hover:bg-transparent hover:text-slate-950 hover:font-semibold hover:ring-1 hover:ring-blue-600 btn-primary">Send</button>

                            </form>
                            <div className=" lg:my-auto flex flex-col mx-auto w-fit">
                                <div className=" flex flex-col mx-auto w-fit h-fit min-h-[200px] max-w-[600px] sm:min-w-[400px] min-w-[300px] my-10 max-h-[300px] ">     
                                    <span className=" w-full bg-orange-500 min-w-full min-h-6 rounded-t-lg"></span>                 
                                    <div className=" bg-yellow-300 rounded-b-md px-1 py-4 w-full min-w-full h-[90%] flex flex-col  bg-transparent">
                                        <h5 class="mb-2 text-2xl px-2 font-bold tracking-tight text-gray-900 underline underline-offset-4 dark:text-white">HeadQuoters</h5>
                                        <span className=" flex justify-start gap-4 mx-auto w-full flex-row ml-6  "><FaLocationDot className=" my-auto" /> <p className="font-semibold text-xl">Nairobi</p> </span>
                                        <div className=" flex flex-col gap-2 px-2 sm:px-4 w-full mx-auto">
                                            <h5 class="mb-2 text-2xl  font-bold tracking-tight text-gray-900 underline underline-offset-4 dark:text-white">Contact</h5>
                                            <span className=" ml-4 flex flex-col justify-between mx-auto w-full  sm:flex-row sm:gap-1"><FaPhoneAlt/> <p className=" font-semibold text-xl">25434343620099234</p> </span>
                                            <span className=" ml-4 flex flex-col justify-between mx-auto w-full  sm:flex-row sm:gap-1"><MdEmail/> <p className=" font-semibold text-xl">intiriorplus@gmail.com</p> </span>
                                        </div>                                  
                                    </div>                       

                                </div>
                            </div>

                    </div>
                    
                    
                </div>               

                <div id="details" className=" bottom-0 w-full">
                    <Footer />
                </div>
                <div className=" ml-0 left-[90%] lg:left-[95%] fixed bottom-10 z-[100%]">
                    <button className={` z-40 float-right right-2 ${showScroller ? ' sticky' : 'hidden'} absolute  bg-blue-600 text-slate-100 p-1 md:text-base text-sm `} ><a href="#navSect"><FaArrowRightLong className=' p-1 text-xl md:text-2xl xl:text-4xl rotate-[270deg]' /></a></button>

                </div>
            </div>
        </>
    )
}

export default memo(Home)
