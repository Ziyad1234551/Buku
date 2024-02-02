// Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b py-3 text-white md:h-auto lg:h-[30vh] justify-center poppin  from-blue-500 to-blue-700">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center px-[50px] gap-8">
        <div className="footer-section">
          <h2 className='text-3xl mb-2 font-bold'>About Us</h2>
          <p className='font-light'>Your Book Store is dedicated to providing a wide selection of quality books for book enthusiasts.</p>
        </div>

        <div className="footer-section">
          <h2 className='text-3xl mb-2 font-bold'>Quick Links</h2>
          <ul className='flex flex-col gap-2 text-lg'>
            <li><a href="/">Home</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className='text-3xl mb-2 font-bold'>Quick Links</h2>
          <ul className='flex flex-col gap-2 text-lg'>
            <li><a href="/">Home</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className='text-3xl font-bold'>Follow Us</h2>
          <div className='flex flex-col my-3 text-2xl gap-2 font-bold'>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center my-6">
        <p>&copy; 2024 Your Book Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
