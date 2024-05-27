"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TextTransition, { presets } from 'react-text-transition';

export default function Home() {
  const messages = ["Welcome", "It is time", "to relax and play", "Some LOFI music", "Keep powering through", "You got this"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => (index + 1) % messages.length);
    }, 3000); // Change text every 3000 milliseconds (3 seconds)
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative min-h-screen">
      <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
        <source src="/asset/homebg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <Navbar />
        <div className="mt-20">
          <h1 className="text-white text-3xl text-center">
            <TextTransition springConfig={presets.wobbly}>
              {messages[index]}
            </TextTransition>
          </h1>
          <div className="flex space-x-4 mt-4">
            {["/img/button-bg1.jpg", "/img/button-bg2.jpg", "/img/button-bg3.jpg"].map((imgSrc, idx) => (
              <div className="relative">
                <img src={imgSrc} alt={`Background ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <button className="relative z-10 bg-transparent border border-white text-white py-2 px-4 rounded animate-pulse">
                  Button {idx + 1}
                </button>
              </div>
            ))}
          </div>
          {/* Additional content here */}
        </div>
      </div>
    </div>
  );
}

