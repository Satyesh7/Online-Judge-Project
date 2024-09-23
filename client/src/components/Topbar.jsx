import React from 'react'
import { Link } from 'react-router-dom';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import { BsList } from 'react-icons/bs';

const Topbar = ({problemPage}) => {
  return (
    
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
        <Link to="/" className="h-[22px] flex-1">
          <img src="https://iximiuz.com/my-choice-of-programming-languages/kdpv-2000-opt.png" alt="Play With Codes!" className="h-[50px] w-[150px]" />
        </Link>

        {problemPage && (
      <div className='flex items-center gap-4 flex-1 justify-center'>
        <div className='flex items-center justify-center rounded bg-black  hover:bg-gray-500 h-8 w-8 cursor-pointer'>
          <FaChevronLeft />
        </div>

        <Link
          to='/'
          className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
        >
          <div>
            <BsList />
          </div>
          <p>Problem List</p>
        </Link>

        <div className='flex items-center justify-center rounded bg-black hover:bg-gray-500 h-8 w-8 cursor-pointer'>
          <FaChevronRight />
        </div>
      </div>
    )}

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href="https://www.linkedin.com/in/satyesh-das/"
              target="_blank"
              rel="noreferrer"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Topbar;
