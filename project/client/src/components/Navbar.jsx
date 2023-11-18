import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { useEffect } from 'react';
import Avatar from './Avatar'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const API_URL = 'http://localhost:3001'
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };
  const logout = async () => {
    const url = `${API_URL}/auth/logout`
    const response = await fetch(url, { credentials: 'include' })
    await response.json()
    window.location.href = '/'
  }
  const [trips, setTrips] = useState([]);
  const [user, setUser] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${API_URL}/auth/login/success`, { credentials: 'include' } )
      const json = await response.json()
      setUser(json.user)
    }

    const fetchTrips = async () => {
      const response = await fetch(`${API_URL}/api/trips`)
      const data = await response.json()
      setTrips(data)
      
    }
  
    getUser()
    fetchTrips()
  }, []);
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>WonderHop.</h1>
      </div>
      <ul className='hidden md:flex'>
      <li>      <Link to="/trip/new"><button className="headerBtn">Create Trip </button></Link></li>
      <li>      <button onClick={logout} className='headerBtn'>Logout</button></li>
      <li><Avatar className='avatar' user={user} /></li>
      </ul>
      
      <div className='hidden md:flex'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
        {
        user && user.id ?
          <div className="header">
            <h1>WonderHop</h1>

            <Link to="/trip/new"><button className="headerBtn"> + Add Trip </button></Link>
            <button onClick={logout} className='headerBtn'>Logout</button>
            <Avatar className='avatar' user={user} />
          </div>
        : <></>
      }
          <h1>WonderHop.</h1>


            <Link to="/trip/new"><button className="headerBtn"> + Add Trip </button></Link>
            <button onClick={logout} className='headerBtn'>Logout</button>
            <Avatar className='avatar' user={user} />
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
