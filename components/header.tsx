import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Header = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-extrabold text-xl tracking-tight">Driving Test</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="border-l h-6 mr-6 border-gray-400"></div>
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-secondary mr-4">
            Main
          </a>
          <a href="#how-it-works" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-secondary mr-4">
            How it works
          </a>
        </div>
        <div className='flex items-center '>
          <div className='flex items-center text-base px-4 py-3 mr-2 leading-none rounded-lg text-black hover:bg-primary-light hover:bg-primary mt-4 lg:mt-0'>
            <a href="#login">Log in</a>
            <HiArrowNarrowRight className="ml-2" />
          </div>
          <a href="#signup" className="inline-block text-base px-4 py-3 leading-none border rounded-lg text-white bg-secondary hover:bg-primary hover:text-secondary mt-4 lg:mt-0">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
  