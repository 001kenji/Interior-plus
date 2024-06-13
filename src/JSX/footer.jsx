import React from "react";
import medicatorsIcon from '../assets/images/logo.png'
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
                <div className=" h-fit my-auto flex flex-col gap-4">
                    <div className=" w-fit flex flex-row gap-2" >
                        <img className=" w-16" src={medicatorsIcon} alt="" />
                        <span className=" flex flex-row gap-0 my-auto font-bold text-lg md:text-3xl"><p className=" text-sky-600">Job</p>plus</span>
                    </div>
                    <span className=" hover:text-amber-600 cursor-pointer flex flex-row gap-1 align-middle my-auto"><TbNetwork className=" my-auto text-xl font-semibold" />www.onlinejobs_b-itnel.com</span>
                    <span className=" hover:text-amber-600 cursor-pointer flex flex-row gap-1 align-middle my-auto"><FaPhoneVolume  className=" my-auto text-xl font-semibold" />2540000987655</span>
                    <span className=" hover:text-amber-600 cursor-pointer flex flex-row gap-1 align-middle my-auto"><MdOutlineMailOutline className=" my-auto text-xl font-semibold" />onlinejobs_b-itnel@gmail.com</span>
                </div>
                <div className=" my-auto flex flex-col text-left md:text-center gap-2">
                    <span className=" font-semibold">Company</span>
                    <span className=" hover:text-amber-500 cursor-pointer">About</span>
                    <span className=" hover:text-amber-500 cursor-pointer">Blog</span>
                    <span className=" hover:text-amber-500 cursor-pointer">Jobs</span>
                    <span className=" hover:text-amber-500 cursor-pointer">Contact</span>
                </div>
                <div className=" flex flex-col my-auto h-fit gap-2">
                    <big>Notify me on jobs news</big>
                    <span className=" flex flex-row gap-3  bg-slate-100 rounded-xl  py-2 w-fit mx-auto px-1">
                        <CgProfile className=" text-slate-800 text-3xl my-auto" />
                        <input className=" placeholder:text-gray-500 bg-transparent outline-none" placeholder="Job Title" type="text" />
                        <IoIosSend  className=" border-l-[1px] border-l-slate-800 cursor-pointer text-4xl h-fit  rounded-full text-slate-800 my-auto" />
                    </span>
                </div>
            </div>
            <div className=" min-h-[100px] text-slate-100 font-semibold text-center align-middle  bg-purple-700 flex flex-col gap-3">
                <div className=" flex flex-row gap-3 flex-wrap w-full max-w-[500px] justify-around">

                </div>
                <span className=" flex sm:text-lg  flex-row gap-2 justify-center  flex-wrap my-auto w-full h-fit text-center ">All Rights Reserved | Copyright &#169; {year}. Art by <a className=" underline-offset-4 underline hover:text-amber-500 text-slate-800 align-middle" href="https://briannjuguna.netlify.app/">Brian Njuguna</a> </span>
            </div>
        </footer>
        </>
    )
}




