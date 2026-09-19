import React from 'react'
import { portfolioData } from '../../data/portfolioData'
import ScrollFloat from '../effects/ScrollFloat'

const Experience = () => {
  const { experience } = portfolioData

  return (
    <section id="Experience" className="mt-28">
      <div className="container">
        <div className="mb-14">
          <h2 className="font-soldier text-Primary lg:text-7xl text-5xl uppercase">
            <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=50%" scrollEnd="bottom bottom-=40%" stagger={0.03}>
              Experience
            </ScrollFloat>
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {experience.map((item, index) => (
            <div key={index} className="border-l-2 border-coffee pl-8 relative" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="absolute w-4 h-4 bg-coffee rounded-full -left-[9px] top-0"></div>
              <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-poppins font-semibold text-Primary">{item.role}</h3>
                  <p className="text-lg font-poppins font-medium text-coffee">{item.company}</p>
                </div>
                <span className="px-4 py-1 bg-coffee/10 text-coffee rounded-full font-poppins text-sm font-semibold">
                  {item.duration}
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-second font-poppins text-lg leading-relaxed list-disc ml-4">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
