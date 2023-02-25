import React, {useState} from 'react';
import Link from "next/link";
import { HiArrowNarrowRight } from 'react-icons/hi';
import {IoMdClose} from 'react-icons/io'
import {HiMenu} from 'react-icons/hi'

type Props = {
  links?: { label: string; link: string }[];
  showButtons?: boolean;
};

const Header: React.FC<Props> = ({ links=[], showButtons=false }) => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-center flex-shrink-0 text-black ">
          <Link href="/" > <div className="font-extrabold text-xl tracking-tight">Driving Test</div> </Link> 
          { links && links.length > 0 && (<div className=" hidden sm:block border-l h-6 mr-6 border-gray-400 ml-5"></div>) }
        </div>
        <div className="w-full hidden sm:flex flex-grow items-center justify-between lg:items-center lg:w-auto">
          <div className="text-sm py-auto flex justify-center items-center">
            { links && links.length > 0 && (
              links.map((link, index) => (
                <a key={index} href={link.link} className="block lg:inline-block lg:text-lg text-black hover:text-secondary mr-4">
                  {link.label}
                </a>
              ))
              )
            }
          </div>
          {
            showButtons && (
              <div className='flex items-center '>
                <Link href="/login">
                  <div className='flex items-center text-base px-4 py-3 mr-2 leading-none rounded-lg text-black hover:bg-primary-light hover:bg-primary  lg:mt-0'>
                    <div>Log in</div>
                    <HiArrowNarrowRight className="ml-2" />
                  </div>
                </Link>
                <Link href="/signup">
                  <div className="inline-block text-base px-4 py-3 leading-none border rounded-lg text-white bg-secondary hover:bg-primary hover:text-secondary  lg:mt-0">Sign up</div>
                </Link>
              </div>
            )
          }
        </div>

          {/* Mobile menu */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? <IoMdClose size={20}/> : <HiMenu size={20}/>}
          </div>
        </div>

        <div className={ nav ? "sm:hidden absolute flex justify-center w-full text-center bg-primary ease-in duration-300" : "sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen text-center bg-primary ease-in duration-300"}>
          <ul>
          {links && links.length > 0 && (
            links.map((link, index) => (
            <a key={index} href={link.link} onClick={handleNav} ><li className="p-4 text-2xl hover:text-secondary">{link.label}</li></a>
          )))}
            <Link href="/login"> <li className="p-4 text-2xl hover:text-secondary" onClick={handleNav} >Login</li> </Link>
            <Link href="/signup"> <li className="p-4 text-2xl hover:text-secondary" onClick={handleNav} >Sign up</li> </Link>
          </ul>
        </div>

    </div>

  );
};

export default Header;
  