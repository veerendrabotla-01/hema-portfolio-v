import React from 'react';
import Logo from "./Logo";
import { Link } from 'react-router'
import { LuDot } from "react-icons/lu";
import Magnet from '../effects/Magnet';
import { FiArrowUpRight } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

export const Navbar = () => {
  const { navLinks } = portfolioData;

  return (
    <>
      <nav className='py-5 hidden lg:block'>
        <div className="container">
          <div id='NavRow' className='flex items-center justify-between'>
            {/* ----Logo---- */}
            <Magnet padding={40}>
              <Link to={'/'} className='hover-this transition-link' >
                <Logo className='w-[60px] h-[60px] transition-trigger' data-aos="fade-down" data-aos-duration="500" data-aos-delay="0" data-aos-easing="ease-out-cubic" />
              </Link>
            </Magnet>
            {/* ----NavLinks---- */}
            <div>
              <ul className='font-soldier flex items-center gap-6 text-2xl text-Primary'>
                {navLinks.map((link, index) => (
                  <li key={link.path} data-aos="fade-down" data-aos-duration="500" data-aos-delay={100 + index * 80} data-aos-easing="ease-out-cubic">
                    <Link aria-label={link.label} to={link.path} className={`flex items-center NavLinks hover-brown transition-trigger transition-link`}>
                      {link.label.toUpperCase()}<LuDot />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* ----Button---- */}
            <Magnet magnetStrength={2} padding={20}>
              <div className="magnetic-btn" data-aos="fade-down" data-aos-duration="500" data-aos-delay="420" data-aos-easing="ease-out-cubic">
                <Link aria-label="Contact Hema Nandam" to={'/contact'} className='group inline-flex min-h-12 items-center gap-3 rounded-full border border-Primary/15 px-5 font-poppins text-sm font-semibold uppercase text-Primary hover:text-brand transition-trigger transition-link duration-300 hover-this hover:border-coffee hover:bg-coffee'>
                  Contact
                  <span className='flex size-7 items-center justify-center rounded-full group-hover:bg-brand group-hover:text-Primary bg-Primary text-brand transition duration-300 group-hover:rotate-45'>
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </Magnet>
          </div>
        </div>
      </nav>
    </>
  )
}
