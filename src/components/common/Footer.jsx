import React from 'react'
import Logo from './Logo';
import { Link } from 'react-router'
// ---------Icons 
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Magnet from '../effects/Magnet';


import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  const { socials, user } = portfolioData;

  return (
    <>
      <footer className='pt-[50px] hidden md:block border-[#21212157] border-t-2 lg:pb-[32px] pb-[32px]'>
        <div className="container">
          <div id="Footer_Row" className='grid grid-cols-1 lg:place-items-start place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-10 py-8 lg:py-[65px]'>
            <div id="Row_1">
              <Magnet data-aos="fade-up" padding={20} disabled={false} magnetStrength={2}>
                <Link to={'/'} className='transition-link'><Logo className='w-24 h-24 m-0 m-auto' /></Link>
              </Magnet>
              <p data-aos="fade-up" className='text-sm text-second font-poppins font-light md:w-[130px] w-[120px] text-center md:mt-6 mt-3'>©2025 Portfolio By {user.name}.</p>
            </div>
            <div id="Row_2">
              <h2 data-aos="fade-up" className='font-soldier lg:text-6xl md:text-start text-center text-5xl text-Primary mb-6'>LINKS</h2>
              <ul id='FooterLinks' className='flex flex-col md:items-start items-center gap-4 text-[#3f3f3f] font-poppins text-sm'>
                <li data-aos="fade-up"><Link to={'/'}>SUPPORT</Link></li>
                <li data-aos="fade-up"><Link to={'/'}>LICENSES</Link></li>
                <li data-aos="fade-up"><Link to={'/'}>TERMS OF USE</Link></li>
                <li data-aos="fade-up"><Link to={'/'}>PRIVACY POLICY</Link></li>
              </ul>
            </div>
            <div id="Row_3">
              <h2 data-aos="fade-up" className='font-soldier md:text-start text-center lg:text-6xl text-5xl text-Primary mb-6'>PAGES</h2>
              <ul id='FooterLinks' className='flex md:items-start items-center flex-col gap-4 text-[#3f3f3f] font-poppins text-sm'>
                <li data-aos="fade-up"><Link className='transition-trigger transition-link' to={'/about'}>ABOUT ME</Link></li>
                <li data-aos="fade-up"><Link className='transition-trigger transition-link' to={'/projects'}>MY WORK</Link></li>
                <li data-aos="fade-up"><Link className='transition-trigger transition-link' to={'/'}>DOWNLOAD CV</Link></li>
                <li data-aos="fade-up"><Link className='transition-trigger transition-link' to={'/contact'}>CONTACT</Link></li>
              </ul>
            </div>
            <div id="Row_4">
              <h2 data-aos="fade-up" className='font-soldier md:text-start text-center lg:text-6xl text-5xl text-Primary mb-4'>CONTACT</h2>
              <div id='FooterLinks' className='flex md:items-start items-center flex-col gap-3 text-[#3f3f3f] font-poppins font-medium'>
                <div data-aos="fade-up"><Link to={'/'}>{user.location.toUpperCase()}</Link></div>
                <div data-aos="fade-up"><Link to={'/'}>{user.email}</Link></div>

                <div className='mt-3 flex items-center gap-7'>
                  {socials.map((social, index) => (
                    <Magnet key={index} padding={20} disabled={false} magnetStrength={2}>
                      <a target='_blank' href={social.url} aria-label={`Visit my ${social.name} profile`}>
                        {social.name === "Facebook" && <FaFacebookF className='text-[18px] hover-brown' />}
                        {social.name === "Instagram" && <FaInstagram className='text-[18px] hover-brown' />}
                        {social.name === "Twitter" && <FaXTwitter className='text-[18px] hover-brown' />}
                        {social.name === "Github" && <FaGithub className='text-[18px] hover-brown' />}
                        {social.name === "Linkedin" && <FaLinkedinIn className='text-[18px] hover-brown' />}
                        {social.name === "LeetCode" && <SiLeetcode className='text-[18px] hover-brown' />}
                      </a>
                    </Magnet>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------Bottom Copyright------------------ */}
        <div className='border-t border-[#21212157] mt-10 pt-8 text-center'>
          <p className='text-sm text-second font-poppins font-light'>©2025 By {user.name} | All rights reserved.</p>
        </div>
      </footer>


      {/* ---------------- Mobile Device --------------- */}
      <footer className='pt-[40px] pb-[24px] border-[#21212157] border-t-2 bg-background md:hidden'>
        <div className="container text-center">

          {/* Branding Header Section */}
          <div className="flex flex-col items-center mb-8">
            <Magnet data-aos="fade-up" padding={15} disabled={false} magnetStrength={1.5}>
              <Link to={'/'} className='transition-link inline-block'>
                <Logo className='w-20 h-20' />
              </Link>
            </Magnet>
            <p data-aos="fade-up" className='text-xs text-second font-poppins font-light mt-2 max-w-[150px] mx-auto opacity-80'>
              ©2026 Portfolio By {user.name}.
            </p>
          </div>

          {/* Links Micro-Grid (2 Columns to save screen space) */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-8 pb-8 border-b border-[#2121211f]">
            <div className="flex flex-col items-center">
              <h2 data-aos="fade-up" className='font-soldier text-4xl text-Primary mb-4 tracking-wide'>LINKS</h2>
              <ul className='flex flex-col gap-3 text-[#3f3f3f] font-poppins text-xs font-medium'>
                <li data-aos="fade-up"><Link to={'/'}>SUPPORT</Link></li>
                <li data-aos="fade-up"><Link to={'/'}>LICENSES</Link></li>
                <li data-aos="fade-up"><Link to={'/'}>TERMS OF USE</Link></li>
                <li data-aos="fade-up"><Link to={'/'}>PRIVACY POLICY</Link></li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h2 data-aos="fade-up" className='font-soldier text-4xl text-Primary mb-4 tracking-wide'>PAGES</h2>
              <ul className='flex flex-col gap-3 text-[#3f3f3f] font-poppins text-xs font-medium'>
                <li data-aos="fade-up"><Link className='transition-trigger transition-link' to={'/about'}>ABOUT ME</Link></li>
                <li data-aos="fade-up"><Link className='transition-trigger transition-link' to={'/projects'}>MY WORK</Link></li>
                <li data-aos="fade-up"><Link className='transition-trigger transition-link' to={'/'}>DOWNLOAD CV</Link></li>
                <li data-aos="fade-up"><Link className='transition-trigger transition-link' to={'/contact'}>CONTACT</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact & Social Info Container */}
          <div className="flex flex-col items-center gap-4">
            <h2 data-aos="fade-up" className='font-soldier text-4xl text-Primary tracking-wide'>CONTACT</h2>
            <div className='flex flex-col gap-2 text-[#3f3f3f] font-poppins text-xs font-semibold tracking-tight'>
              <div data-aos="fade-up"><Link to={'/'}>{user.location.toUpperCase()}</Link></div>
              <div data-aos="fade-up"><Link to={'/'}>{user.email}</Link></div>
            </div>

            {/* Social Icons Strip */}
            <div className='mt-4 flex items-center justify-center gap-6 flex-wrap'>
              {socials.map((social, index) => (
                <Magnet key={index} padding={15} disabled={false} magnetStrength={1.5}>
                  <a target='_blank' href={social.url} aria-label={`Visit my ${social.name} profile`}>
                    {social.name === "Facebook" && <FaFacebookF className='text-[16px] hover-brown' />}
                    {social.name === "Instagram" && <FaInstagram className='text-[16px] hover-brown' />}
                    {social.name === "Twitter" && <FaXTwitter className='text-[16px] hover-brown' />}
                    {social.name === "Github" && <FaGithub className='text-[16px] hover-brown' />}
                    {social.name === "Linkedin" && <FaLinkedinIn className='text-[16px] hover-brown' />}
                    {social.name === "LeetCode" && <SiLeetcode className='text-[16px] hover-brown' />}
                  </a>
                </Magnet>
              ))}
            </div>
          </div>

          {/* Footer Bottom Copyright */}
          <div className='border-t border-[#21212124] mt-8 pt-6'>
            <p className='text-[11px] text-second font-poppins font-light tracking-wide'>©2026 By {user.name} | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer