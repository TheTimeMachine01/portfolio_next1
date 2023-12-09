"use client"

import React, {/* useState */ } from 'react'
import Link from 'next/link'



function Navbar() {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleSidebarToggle = () => {
  //   setIsChecked(!isChecked);
  // }

  // const checkbox = document.getElementById("my-drawer");

  // const handleButtonClick = () => {

  //   if (checkbox) {
  //     checkbox.checked = !checkbox.checked;
  //   }
  // };


  return (
    <>
      {/* this is navbar  */}
      <div className="navbar gradient-animation bg-gradient-to-r from-violet-800 to-fuchsia-700 animate-gradient z-10 h-16 relative w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

              {/* <label htmlFor="my-drawer" className="btn btn-circle swap swap-rotate"> */}

              {/* this hidden checkbox controls the state */}
              {/* <input type="checkbox" /> */}

              {/* hamburger icon */}
              {/* <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg> */}

              {/* close icon */}
              {/* <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg> */}

            </label>



            {/* </label> */}

          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>


      {/* This is side bar  */}
      <div className="drawer z-0">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-16">
            {/* Sidebar content here */}
            <li>
              <Link href="/Panel">
                Create a new Note
              </Link>
            </li>
            <li>
              <Link href="/Panel/ViewNotes">
                View All Notes
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </>


  )
}

export default Navbar


