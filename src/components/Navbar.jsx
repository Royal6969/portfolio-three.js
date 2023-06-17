import { useState } from 'react'
import { Link } from 'react-router-dom'
import { tailwind_styles } from '../utils/tailwind_styles'
import { navLinks } from '../utils/constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [toggleNav, setToggleNav] = useState(false);


  return (
    <nav className={`${tailwind_styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          className='flex items-center gap-2'
          to='/'
          onClick={() => {
            setActiveLink('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
          <p className='text-white text-[14px] font-bold cursor-pointer flex'>Sergio&nbsp;<span className='sm:block hidden'>|&nbsp;Frontend Developer</span></p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${activeLink === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActiveLink(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggleNav ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={() => setToggleNav(!toggleNav)}
          />
        </div>

        <div className={`${!toggleNav ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li 
                key={link.id} 
                className={`${activeLink === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggleNav(!toggleNav);
                  setActiveLink(link.title);
                }}
              >
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar