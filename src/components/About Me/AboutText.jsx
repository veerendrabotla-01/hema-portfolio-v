import React from 'react'
import { Link } from 'react-router'
import Magnet from '../effects/Magnet'
import ScrollReveal from '../effects/ScrollReveal'

import { portfolioData } from '../../data/portfolioData';

const AboutText = () => {
  const { user } = portfolioData;

  return (
    <>
    <div id='AboutMeText' className='overflow-hidden mt-[112px]'>
        <div className="container">
            <div id="AboutTextRow" className="flex flex-col lg:flex-row items-center gap-16">
                <div data-aos="fade-right" className="lg:w-1/2 w-full">
                    <img src={user.image} alt={user.name} className="w-full h-auto rounded-[40px] shadow-2xl object-cover transition duration-500 hover:scale-[1.02]" />
                </div>
                <div id='Text' className='lg:w-1/2 flex flex-col gap-7'>
                    <h2 data-aos="fade-left" className='lg:text-6xl text-5xl text-Primary font-soldier uppercase'>Hello!</h2>
                        {user.detailedBio.map((paragraph, index) => (
                            <ScrollReveal key={index} containerClassName='lg:text-[22px] text-second font-poppins font-normal leading-[150%]'>
                                {paragraph}
                            </ScrollReveal>
                        ))}
                    {/* -----------Explore Work----------- */}
                    <div data-aos="fade-up">
                        <Magnet padding={5} magnetStrength={30}>
                            <Link to={'/projects'} className='hover-brown transition-trigger relative w-[180px] h-[180px] rounded-full border-1 border-coffee mt-10 flex items-center justify-center rotate-[-15deg] cursor-pointer hover:rotate-0 hover:bg-coffee duration-[.3s] group'>
                                <span className='absolute top-[-10px] left-0 w-full h-[180px] rotate-[-75deg] group-hover:rotate-0 group-hover:top-0 duration-[.3s] rounded-full border-1 border-coffee'></span>
                                <p className='text-3xl text-second text-center font-soldier group-hover:text-brand duration-[.3s] uppercase'>Explore <br /> my Work</p>
                            </Link>
                        </Magnet>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutText