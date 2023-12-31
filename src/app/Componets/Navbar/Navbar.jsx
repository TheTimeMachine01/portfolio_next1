import React from 'react'
import Image from 'next/image'

import prof_image from "./img/profile.png"

export default function Navbar() {
  return (
    <>

      {/* <div className="navbar bg-base-100"> */}
      <div className="m-10">
        <div className="navbar bg-primary text-primary-content rounded-[36px] px-5">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Parent</a></li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl rounded-[36px]">Ashish</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a  className='rounded-[36px]'>Home</a></li>
              <li><a  className='rounded-[36px]'>About</a></li>
              <li><a  className='rounded-[36px]'>Contact</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">

              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={prof_image}
                    alt='Picture'
                  />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-circle w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

