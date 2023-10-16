"use client"
import React from 'react';

function Hero() {
  return (
    <div className="bg-blue-900 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="/path/to/your-image.jpg"
            alt="Hero Background Image"
          />
        </div>
        <div className="container mx-auto relative z-10 p-6 md:p-12 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Welcome to Your Website
          </h1>
          <p className="text-lg md:text-2xl">
            Your catchphrase or a brief description of your website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
