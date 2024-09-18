import React from 'react'
import { Link } from 'react-router-dom';


const Topbar = () => {
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div className="flex w-full items-center justify-between max-w-[1200px] mx-auto">
        <Link to="/" className="h-[22px] flex-1">
          <img src="https://iximiuz.com/my-choice-of-programming-languages/kdpv-2000-opt.png" alt="Logo" className="h-[50px] w-[150px]" />
        </Link>

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
