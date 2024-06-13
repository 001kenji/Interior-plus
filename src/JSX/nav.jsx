import React, { Component, useEffect, useState } from "react";
import '../App.css'
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md"; 
import medicatorsIcon from '../assets/images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi"; 

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
        height : window.innerWidth >= 768 ? 'fit-content' : showNav ? '150px' : '0px',
        
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

        <div id='universal-navbar-div'>

            <div className=" sm:justify-around transition-all duration-500" id="botton-nav-div">
                <div id="botton-container-div">
                      <div className=" w-fit flex py-4 flex-row my-auto" id="">
                        <img className=" w-20 h-20 p-2" src={medicatorsIcon} alt="" />
                        <span id="big" className=" flex text-4xl flex-row gap-0 my-auto"><p className=" text-sky-600">Job</p>plus</span>
                        </div>
                
                <div id="botton-nav-content-div" style={navStyler} className={` sm:min-w-[50%] ${showNav ? ' translate-x-0' : ' z-0 -translate-x-72 md:translate-x-0  '} transition-all duration-500 `}>
                    <ul id="nav-botton-list">
                        <li className=" hover:text-amber-500 cursor-pointer transition-all duration-300">
                            <a href="#universal-navbar-div">Home</a>
                        </li>
                        <li className=" hover:text-amber-500 cursor-pointer transition-all duration-300"> <a href="#Categories">Categories</a></li>
                        <li className=" hover:text-amber-500 cursor-pointer transition-all duration-300"><a href="#Featured">Featured Jobs</a></li>
                        <li className=" hover:text-amber-500 cursor-pointer transition-all duration-300">
                            <a href="#Recent">Recent Jobs</a>
                        </li>
                    </ul>
                </div>
                
                </div>
                
                <div className=" mt-10 md:hidden">
                    <GiHamburgerMenu onClick={() => Show('func')} className=" text-sky-600 font-semibold cursor-pointer text-2xl" />
                </div>
            </div>

        </div>
        
        </>
    )
}