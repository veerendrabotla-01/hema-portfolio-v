import React from 'react'
import { portfolioData } from '../../data/portfolioData'
import ScrollFloat from '../effects/ScrollFloat'

const Education = () => {
  const { education } = portfolioData

  return (
    <section id="Education" className="mt-28">
      <div className="container">
        <div className="mb-14">
          <h2 className="font-soldier text-Primary lg:text-7xl text-5xl uppercase">
            <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=50%" scrollEnd="bottom bottom-=40%" stagger={0.03}>
              Education
            </ScrollFloat>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <div key={index} className="bg-white/5 border border-Primary/10 p-8 rounded-2xl hover:border-coffee/30 transition-colors duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
              <span className="text-coffee font-poppins font-semibold text-sm block mb-2">{item.duration}</span>
              <h3 className="text-xl font-poppins font-bold text-Primary mb-3 leading-tight">{item.degree}</h3>
              <p className="text-second font-poppins font-medium mb-4">{item.institution}</p>
              <div className="pt-4 border-t border-Primary/5 flex justify-between items-center">
                <span className="text-second/60 font-poppins text-sm uppercase tracking-wider">Grade</span>
                <span className="text-coffee font-poppins font-bold text-lg">{item.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
