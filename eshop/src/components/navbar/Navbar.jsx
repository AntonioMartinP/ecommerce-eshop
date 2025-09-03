import React from 'react'
import { IoMdSearch } from "react-icons/io";

const MenuLinks = [
  {
    id:1,
    name:"Home",
    link:"/#",
  },
  {
    id:2,
    name:"Shop",
    link:"/#shop",
  },
  {
    id:3,
    name:"About",
    link:"/#about",
  },
  {
    id:4,
    name:"Blog",
    link:"/#blog",
  },
  {
    id:5,
    name:"Contact",
    link:"/#contact",
  }
];
const Navbar = () => {
  return (
    <div className="bg-white shadow-md dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4">
            <div className="container flex justify-between items-center">
                
                {/*Logo and links section*/}
                <div className="flex items-center gap-4">
                    <a 
                    href="#" className="text-primary font-semibold 
                    tracking-widest text-2xl uppercase 
                    sm:text-3xl"
                    >
                      Eshop
                    </a>
                
                {/*Menu items */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-6 lg:gap-8 mt-[15px]">
                        {
                          MenuLinks.map((data,index)=>(
                            <li key={index}>
                              <a href={data.link}
                              className="inline-block px-4 font-semibold
                               text-gray-300 hover:text-black dark:hover:text-white duration-200"
                              >{data.name}</a>
                              </li>
                          ))
                        }
                    </ul>
                </div>
                </div>
                {/*Navbar right section*/}
                <div className="flex justify-between items-center gap-4">
                  {/*Search Bar section*/}
                  <div className="relative group hidden sm:block">
                    <input type="text" placeholder="Search..." className="search-bar" />
                    <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400' />
                  </div>
                  {/*Dark Mode Toggsection*/}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar