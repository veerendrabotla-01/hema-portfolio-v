import React from 'react'
import { Link } from 'react-router';
import PortfolioPic from "../../assets/images/portfolioImg2.png"
// -----Animation Npm 
import { TypeAnimation } from 'react-type-animation';
import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Twitter: FaXTwitter,
  Github: FaGithub,
  Linkedin: FaLinkedinIn,
  LeetCode: SiLeetcode,
}

const Banner = () => {
  const { user, socials } = portfolioData;

  return (
    <>
      <section id="Banner" className='pt-8 lg:pt-16 overflow-hidden lg:pb-16 pb-0'>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-8%] md:top-20 top-0 h-72 w-72 rounded-full bg-[#BF4A1A]/10 blur-3xl" />
        </div>
        <div className="container">
          <div className='flex justify-between items-start md:flex-nowrap flex-wrap gap-10 lg:gap-0'>
            <div className="bannerText" >
              <p data-aos="fade-right" data-aos-duration="600" data-aos-delay="100" data-aos-easing="ease-out-cubic" className='font-medium text-sm tracking-[2px] lg:text-base lg:tracking-[3px] text-[#212428]'>WELCOME TO MY PORTFOLIO</p>
              <h1 data-aos="fade-right" data-aos-duration="600" data-aos-delay="0" data-aos-easing="ease-out-cubic" className='font-poppins text-Primary text-[38px] lg:text-[68px] font-medium lg:mt-2 mt-4'>Hi, i'm <span className='text-[#BF4A1A] uppercase'>{user.name}</span></h1>
              {/* -----animated Text------- */}
              <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="200" data-aos-easing="ease-out-cubic">
                <TypeAnimation
                  sequence={user.typeAnimationRoles}
                  className='text-[25px] lg:text-[38px] text-second'
                  wrapper="span"
                  speed={60}
                  repeat={Infinity}
                />
              </div>
              <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="300" data-aos-easing="ease-out-cubic" className='font-medium font-poppins text-[#2d2e30be] mt-6 lg:mt-4 text-[12px] lg:text-sm md:w-[435px] w-full'><BlurText text={user.bio} delay={350} animateBy="words" direction="top" /></div>
              {/* -----Text Button------- */}
              <div className='mt-6 flex items-center gap-3'>
                <Magnet padding={10} disabled={false} magnetStrength={5}>
                  <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="400" data-aos-easing="ease-out-cubic">
                    <Link to={'/contact'} className='ContactButton transition-trigger transition-link px-[24px] py-[8px] font-poppins font-medium lg:text-base text-sm text-Primary hover-this'>CONTACT</Link>
                  </div>
                </Magnet>
                <Magnet padding={10} disabled={false} magnetStrength={5}>
                  <Link data-aos="fade-right" data-aos-duration="700" data-aos-delay="450" data-aos-easing="ease-out-cubic" className='DownloadCv px-[24px] py-[8px] font-poppins font-medium  text-Primary text-sm lg:py-[8px] lg:text-base hover-this'>
                    <span>DOWNLOAD CV</span>
                  </Link>
                </Magnet>
              </div>
              {/* -----Social Media Button------- */}
              <div className='mt-10 flex items-center gap-7'>
                {socials.map((social, index) => {
                  const Icon = iconMap[social.name] || FaGithub;
                  return (
                    <Magnet key={index} padding={20} disabled={false} magnetStrength={2}>
                      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay={500 + (index * 60)} data-aos-easing="ease-out-cubic" data-aos-offset="30" >
                        <a target='_blank' rel='noreferrer' href={social.url} aria-label={`Visit my ${social.name} profile`}>
                          <Icon className='text-[18px] hover-brown' />
                        </a>
                      </div>
                    </Magnet>
                  );
                })}
              </div>
            </div>

            {/* ----------------------- Portfolio Image ---------------------- */}
            <div className='md:w-[650px] w-full' data-aos="fade-left" data-aos-duration="800" data-aos-delay="150" data-aos-easing="ease-out-cubic" id="bannerPhoto">
              <img src={user.image} alt={user.name} className="w-full h-auto object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner