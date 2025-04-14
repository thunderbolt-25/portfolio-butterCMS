import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-gray-300 shadow-lg'>
      <div>
        <h1 className='font-thin text-2xl italic font-serif text-white'>My Portfolio</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='hover:text-white transition duration-300'>
            <Link to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-900 to-purple-900 flex flex-col justify-center items-center'
        }
      >
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='py-6 text-4xl text-white'>
            <Link onClick={handleClick} to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {[
            { href: 'https://www.linkedin.com/in/anurag25/', icon: <FaLinkedin size={30} />, bg: 'bg-blue-600', label: 'Linkedin' },
            { href: 'https://github.com/thunderbolt-25', icon: <FaGithub size={30} />, bg: 'bg-[#333333]', label: 'Github' },
            { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=anuragsingh.developers@gmail.com', icon: <HiOutlineMail size={30} />, bg: 'bg-[#6fc2b0]', label: 'Email' },
            { href: 'https://drive.google.com/file/d/15DvnNGvIVLbFUazrKxJIk9a9RCE12TuJ/view?usp=sharing', icon: <BsFillPersonLinesFill size={30} />, bg: 'bg-[#565f69]', label: 'Resume' },
          ].map(({ href, icon, bg, label }) => (
            <li key={label} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bg}`}>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href={href}
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
