"use client";
import React from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="https://res.cloudinary.com/dacrmefxl/video/upload/q_auto,f_auto/background_dckcrd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* 🔹 Content */}
      <div className="relative z-10 h-full w-full">
        <Navbar />

        {/* 🔹 Text Content */}
        <div
          className="
            absolute bottom-20 left-6 md:static 
            md:pt-40 md:px-20
            text-white px-6 space-y-4
            text-left
          "
        >
          <h1 className="text-4xl md:text-7xl font-semibold">NightMare</h1>
          <h2 className="text-lg md:text-2xl max-w-[90%] md:max-w-none">
            Hi, I&apos;m NightMare — a Video Editor who can edit your videos
          </h2>
          <div className="flex flex-wrap justify-start gap-3">
            <a href="/pricing">
                <Button className="cursor-pointer bg-white text-black hover:bg-gray-200">
                    Join Us
                </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;