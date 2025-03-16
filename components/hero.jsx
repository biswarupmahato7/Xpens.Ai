"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
    const imageRef = useRef()

    useEffect(()=>{
        const imageElement = imageRef.current
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100

            if(scrollPosition > scrollThreshold){
                imageElement.classList.add("scrolled")
            }else{
                imageElement.classList.remove("scrolled")

            }
        }
        window.addEventListener('scroll',handleScroll)

        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])


  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finance With <br /> <span className="gradient-title2 font-bold">Intelligence</span>
        </h1>
        <p className=" text-xl mb-8 max-w-2xl mx-auto text-slate-200 ">
          An <b className="text-orange-300">AI-powered</b> finance management platform that helps you track,
          analyze and optimize your spending with real-time insights
        </p>

        <div className="flex justify-center space-x-4">
          <Link href='/dashboard'>
            <Button size='lg' className='cursor-pointer px-8 bg-gradient-to-r from-blue-300 to-violet-500 hover:from-green-200 hover:to-green-500 text-black border-none'>Get Started</Button>
          </Link>

          <Link href=''>
            <Button size='lg' variant='outline'  className='cursor-pointer px-8 bg-gradient-to-r from-green-300 to-green-600 hover:from-blue-300 hover:to-violet-500 text-black border-none'>Get Demo</Button>
          </Link>
        </div>

        <div className="hero-image-wrapper md:mt-0">
            <div ref={imageRef} className="hero-image">
                <Image
                 src={"/banner.jpeg"}
                 width={1280}
                 height={720}
                 alt="Dashboard"
                 className="rounded-lg shadow-2xl border mx-auto"
                 priority
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
