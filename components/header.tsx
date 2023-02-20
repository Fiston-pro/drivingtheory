import React, {useState} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {IoMdClose} from 'react-icons/io'
import {HiMenu} from 'react-icons/hi'

const Header = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-center flex-shrink-0 text-black ">
          <div className="font-extrabold text-xl tracking-tight">Driving Test</div>
          <div className=" hidden sm:block border-l h-6 mr-6 border-gray-400 ml-5"></div>
        </div>
        <div className="w-full hidden sm:flex flex-grow items-center justify-between lg:items-center lg:w-auto">
          <div className="text-sm py-auto flex justify-center items-center">
            <a href="#" className="block lg:inline-block lg:text-lg text-black hover:text-secondary mr-4">
              Main
            </a>
            <a href="#how-it-works" className="block lg:inline-block lg:text-lg text-black hover:text-secondary mr-4">
              How it works
            </a>
          </div>
          <div className='flex items-center '>
            <div className='flex items-center text-base px-4 py-3 mr-2 leading-none rounded-lg text-black hover:bg-primary-light hover:bg-primary  lg:mt-0'>
              <a href="#login">Log in</a>
              <HiArrowNarrowRight className="ml-2" />
            </div>
            <a href="#signup" className="inline-block text-base px-4 py-3 leading-none border rounded-lg text-white bg-secondary hover:bg-primary hover:text-secondary  lg:mt-0">Sign up</a>
          </div>
        </div>

          {/* Mobile menu */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? <IoMdClose size={20}/> : <HiMenu size={20}/>}
          </div>
        </div>

        <div className={ nav ? "sm:hidden absolute flex justify-center w-full text-center bg-primary ease-in duration-300" : "sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen text-center bg-primary ease-in duration-300"}>
          <ul>
            <li className="p-4 text-2xl hover:text-secondary">Main</li>
            <li className="p-4 text-2xl hover:text-secondary">How it works</li>
            <li className="p-4 text-2xl hover:text-secondary">Login</li>
            <li className="p-4 text-2xl hover:text-secondary">Sign up</li>
          </ul>
        </div>

    </div>

  );
};

export default Header;
  