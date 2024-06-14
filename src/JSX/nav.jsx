import React, { Component, useEffect, useState } from "react";
import '../App.css'
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md"; 
import medicatorsIcon from '../assets/images/logo.jpeg'
import { GiHamburgerMenu } from "react-icons/gi"; 
import { IoCloseSharp } from "react-icons/io5";
export default function Navbar() {
    const [current, setcurrent] = useState(1)
    const [showNav, setShowNav] = useState(false)

    function Show(props) {
        if(props == 'show'){
          setcurrent(current == 0 ? 1 : 0)
    
        }else if(props == 'comp'){
          setcurrent(0)
        }else if(props == 'func') {
          setShowNav((e) => !e)
          var nav = document.getElementById('botton-nav-content-div')
          // nav.style.display = showNav ? 'flex' : 'none'
        }
      }
    
      window.addEventListener('resize', function() {
        if(this.screen.width >= 780) {
          setcurrent(0)
        }else {
          setcurrent(1)
        }
      })
    
      window.addEventListener('loadeddata', function () {
        if(screen.width >= 780) {
          setcurrent(0)
          
        }else {
          setcurrent(1)
        }
      })
      useEffect(  () => {
        if(screen.width >= 780) {
          setcurrent(0)
        }else {
          setcurrent(1)
        }
      },[])

      const navStyler = {
        // display : current == 0 ? 'flex' : 'none',
        height : window.innerWidth >= 1024 ? 'fit-content' : showNav ? '300px' : '0px',
        
      }


      window.onscroll = function () {
        var navbar = document.getElementById('botton-nav-div')
        var sticky = navbar.offsetTop;
        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.style.position = 'sticky'
          } else {
            navbar.style.position = 'relative'
          }
        }


        myFunction()
      }
      
      

    return (
        <>

        <div className=" w-full h-fit bg-slate-100">

            <div className=" h-fit sm:justify-around transition-all duration-500 flex  w-full" >
                <div className=" border-b-[1x] w-full border-b-gray-700 flex flex-col lg:justify-around lg:flex-row" >
                    <div className=" w-fit flex flex-row my-auto" id="">
                      <img className=" bg-transparent rounded-full p-4 w-20 h-20 md:p-2" src={medicatorsIcon} alt="" />
                      <span id="big" className=" flex text-2xl md:text-4xl flex-row gap-0 my-auto"><p className=" text-sky-600">Interior</p>plus</span>
                    </div>
                
                  <div id="botton-nav-content-div" style={navStyler} className={` mb-4  lg:my-auto  sm:min-w-[50%] ${showNav ? ' translate-x-0' : ' z-0 -translate-x-72 lg:translate-x-0  '} transition-all duration-500 `}>
                    <ul className=" lg:text-lg lg:justify-around text-center flex flex-col gap-2 lg:flex-row">
                        <li className=" ml-3 lg:ml-0  hover:bg-amber-500 lg:p-3 w-[100px] lg:hover:text-slate-100 font-semibold  p-4 cursor-pointer transition-all duration-300">
                            <a href="#universal-navbar-div">Home</a>
                        </li>
                        <li className=" hover:bg-amber-500 ml-3 lg:ml-0  lg:hover:text-slate-100 lg:p-3  w-[100px] font-semibold  p-4 cursor-pointer transition-all duration-300"> <a href="#About">About</a></li>
                        <div className="dropdown w-fit  dropdown-right lg:dropdown-bottom ">
                          <div tabIndex={0} role="button" className=" hover:bg-amber-500 ml-3 lg:ml-0  lg:hover:text-slate-100 lg:p-3  w-[100px] font-semibold min-w-fit  p-4 cursor-pointer transition-all duration-300">Shop</div>
                          <ul tabIndex={0} className="dropdown-content z-[1] border-[1px] border-slate-600  menu p-2 shadow bg-base-100 rounded-md w-52">
                            <li><a href="#Products" >Listing</a></li>
                            <li><a href="#details" >Details</a></li>
                          </ul>
                        </div>
                        
                        <li className="  hover:bg-amber-500 ml-3 lg:ml-0  lg:hover:text-slate-100 lg:p-3  w-[100px] font-semibold  p-4 cursor-pointer transition-all duration-300">
                            <a href="#client">Reviews</a>
                        </li>
                        <li className=" hover:bg-amber-500 ml-3 lg:ml-0  lg:hover:text-slate-100 lg:p-3  w-[100px] font-semibold  p-4 cursor-pointer transition-all duration-300">
                            <a href="#message">Contact</a>
                        </li>
                    </ul>
                  </div>
                
                </div>
                
                <label className="btn mr-3 mt-5 mb-auto lg:hidden btn-circle swap swap-rotate">
  
                  {/* this hidden checkbox controls the state */}
                  <input className=" hidden" type="checkbox" />                  
                  {/* hamburger icon */}
                  <GiHamburgerMenu onClick={() => Show('func')} className= {`swap-on fill-current mx-auto  ${current == 0 ? '' : ''} text-sky-600 font-semibold cursor-pointer text-2xl `} />
                  
                  {/* close icon */}
                  <IoCloseSharp  onClick={() => Show('func')} className= {` swap-off  fill-current  ${current == 1 ? '' : ''} text-sky-600 font-semibold cursor-pointer text-2xl `} />
                  
                </label>
            </div>

        </div>
        
        </>
    )
}