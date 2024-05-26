import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaFacebook, FaTelegram, FaYoutube, FaBars, FaXmark } from "react-icons/fa6";
//react icons

const Navbar = () => {
  // NavItems
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State variable declared
  const [isModalOpen, setIsModalOpen] = useState(false);  // State variable declared
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Function to toggle the state variable

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/competitions", link: "Competitions" },
    { path: "/grants", link: "Grants" },
    { path: "/conferences", link: "Conferences" },
    { path: "/scholarships", link: "Scholarships" },
    { path: "/fellowships", link: "Fellowships" },
    { path: "/jobs", link: "Jobs" },

  ]

  //modal details
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className="text-xl font-bold text-white">ECA<span className='text-orange-500'>hub</span> </a>

        {/*navitems for large screens*/}
        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map(({ path, link }) => <li className='text-white' key={path}>

              <NavLink className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              } to={path}>{link}</NavLink>
            </li>)
          }
        </ul>

        {/*menu icons*/}
        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
          <a href="/" className='hover:text-orange-500'><FaTelegram /></a>
          <a href="/" className='hover:text-orange-500'><FaYoutube /></a>

          <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Login</button>

        </div>

 

        {/*mobile menu*/}
        <div className='md:hidden'>
          {/* mobile menu button, display on mobile screen */}
          <button onClick={toggleMenu} className='cursor-pointer'>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
            }
          </button>
        </div>


      </nav>

      {/*mobile menu items*/}
      <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
        {
          navItems.map(({ path, link }) => <li className='text-black' key={path}>
            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
          </li>)
        }
      </ul>



    </header >
  )
}

export default Navbar