import React from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
        <source src="/asset/homebg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <Navbar />
        {/* Additional content here */}
      </div>
    </div>
  );
}