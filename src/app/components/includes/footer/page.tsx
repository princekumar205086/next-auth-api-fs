"use client"

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Contact Us Section */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Contact Us</p>
          <p className="text-sm">123 Example St.</p>
          <p className="text-sm">City, Country</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +1 123-456-7890</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <p className="text-lg font-semibold">Quick Links</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/home" className="hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="text-center md:text-right">
          <p className="text-lg font-semibold">Follow Us</p>
          <div className="flex justify-center space-x-4 md:justify-end mt-4">
            <a href="#" className="text-2xl text-blue-400 hover:text-blue-200">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-2xl text-blue-400 hover:text-blue-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-2xl text-blue-400 hover:text-blue-200">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

