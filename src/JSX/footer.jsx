import React from "react";
import medicatorsIcon from '../assets/images/logo.jpeg'
import { TbNetwork } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

export default function Footer () {
    var date = new Date()
    var year  = date.getFullYear()


    return (

        <>
        <footer className=" flex flex-col pt-3 gap-0 w-full">
            <div  className=" min-h-[400px] py-4 justify-around flex flex-col md:flex-row md:flex-wrap gap-3 px-4">
                <div className=" h-fit my-auto text-center flex flex-col gap-4">
                    <div className=" w-fit mx-auto md:mx-0 flex flex-row gap-2" >
                        <img className=" w-16" src={medicatorsIcon} alt="" />
                        <span id="big" className=" flex text-2xl md:text-4xl flex-row gap-0 my-auto"><p className=" text-sky-600">Interior</p>plus</span>
                        </div>
                    <span className="mx-auto md:mx-0 hover:text-amber-600 cursor-pointer flex flex-row gap-1 align-middle my-auto"><TbNetwork className=" my-auto text-xl font-semibold" />intiriorplus.netlify.app</span>
                    <span className="mx-auto md:mx-0 hover:text-amber-600 cursor-pointer flex flex-row gap-1 align-middle my-auto"><FaPhoneVolume  className=" my-auto text-xl font-semibold" />25434343620099234</span>
                    <span className="mx-auto md:mx-0 hover:text-amber-600 cursor-pointer flex flex-row gap-1 align-middle my-auto"><MdOutlineMailOutline className=" my-auto text-xl font-semibold" />intiriorplus@gmail.com</span>
                </div>
                <div className=" my-auto flex flex-col text-center md:text-center gap-2">
                    <span className=" text-lg font-bold" id="big" >Mission</span>
                    <blockquote className=" w-fit mx-auto max-w-[400px] " id="sentense">Our mission is to transform houses into homes, crafting spaces that are as unique and functional as the families who live in them. We believe in the power of design to elevate everyday life, and we strive to create beautiful, comfortable, and sustainable environments that reflect our clients' dreams and aspirations.</blockquote>

                </div>
                <div className=" flex flex-col my-auto h-fit gap-2">
                    <big className=" text-center font-semibold" id="big">Notify me on jobs Feutures</big>
                    <span className=" flex flex-row gap-3  bg-slate-100 rounded-xl  py-2 w-fit mx-auto px-1">
                        <CgProfile className=" text-slate-800 text-3xl my-auto" />
                        <input className=" placeholder:text-gray-500 bg-transparent outline-none" placeholder="email" type="email" />
                        <IoIosSend  className=" border-l-[1px] border-l-slate-800 cursor-pointer text-4xl h-fit  rounded-full text-slate-800 my-auto" />
                    </span>
                </div>
            </div>
            <div className=" min-h-[100px] text-slate-100 font-semibold text-center align-middle  bg-sky-700 flex flex-col gap-3">
                <div className=" flex flex-row gap-3 flex-wrap w-full max-w-[500px] justify-around">

                </div>
                <span className=" flex sm:text-lg  flex-row gap-2 justify-center  flex-wrap my-auto w-full h-fit text-center ">All Rights Reserved | Copyright &#169; {year}. Art by <a className=" underline-offset-4 underline hover:text-amber-500 text-slate-800 align-middle" href="https://briannjuguna.netlify.app/">Brian Njuguna</a> </span>
            </div>
        </footer>
        </>
    )
}




