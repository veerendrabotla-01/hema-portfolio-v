import React from 'react'
import { SiExpress, SiMongodb, SiNodedotjs, SiRailway, SiRender, SiVercel } from 'react-icons/si'
import { BiLogoNetlify } from "react-icons/bi";
import { TbApi, TbBrandFramerMotion } from 'react-icons/tb'
import ScrollFloat from '../effects/ScrollFloat'
import GithubActivity from './GithubActivity'
import ReactImg from '../../assets/images/react.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import NextJsIcon from '../../assets/images/NextJsIcon.svg'
import TailwindCssIcon from '../../assets/images/TailwindCssIcon.svg'
import BootstrapIcon from '../../assets/images/BootStrapIcon.svg'
import GsapIcon from '../../assets/images/GsapIcon.png'
import CssIcon from '../../assets/images/CssIcon.svg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import FigmaIcon from '../../assets/images/FigmaIcon.svg'
import VsCodeIcon from '../../assets/images/VsCodeICon.svg'
import GithubIcon from '../../assets/images/GithubIcon.svg'
import ReduxIcon from '../../assets/images/ReduxIcon.svg'
import FirebaseIcon from '../../assets/images/FirebaseIcon.svg'
import AosIcon from '../../assets/images/AosIcon.png'

import { portfolioData } from '../../data/portfolioData'

const skillGroups = portfolioData.skills;

const SkillIcon = ({ skill }) => {
  if (skill.image) {
    return <img src={skill.image} alt="" />
  }

  const Icon = skill.icon
  return <Icon aria-hidden="true" />
}

export const Skills = () => {
  return (
    <section className="md:pt-20 pt-25">
      <div className="container">
        <div className="font-poppins text-Primary font-semibold lg:text-2xl text-lg text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=80%"
            scrollEnd="bottom bottom-=80%"
            stagger={0.03}
          >
            MY SKILLS
          </ScrollFloat>
        </div>
        <h2 className="font-soldier text-Primary font-medium lg:text-5xl text-[30px] uppercase text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=30%"
            scrollEnd="bottom bottom-=60%"
            stagger={0.03}
          >
            Technologies & expertise
          </ScrollFloat>
        </h2>

        <div className="md:mt-14 mt-8 grid items-stretch gap-6 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(340px,420px)]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article className="skill-group" data-aos="fade-up" key={group.title}>
                <div className="skill-group__header">
                  <span>{group.title}</span>
                  <p>{group.summary}</p>
                </div>

                <div className="skill-group__items">
                  {group.skills.map((skill) => (
                    <div className="skill-pill" key={`${group.title}-${skill.name}`}>
                      <span className="skill-pill__icon">
                        <SkillIcon skill={skill} />
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <GithubActivity />
        </div>
      </div>
    </section>
  )
}
