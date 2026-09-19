import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import ProjectsIcon from '../../assets/images/CounterProjectIcon.png'
import TeamIcon from '../../assets/images/CounterTeamIcon.png'
import ReviewIcon from '../../assets/images/CounterReviewIcon.png'
import CompleteIcon from '../../assets/images/ReviewCompleteICon.png'

import { portfolioData } from '../../data/portfolioData'

const iconMap = {
  'Projects delivered': ProjectsIcon,
  'Client reviews': ReviewIcon,
  'Team members': TeamIcon,
  'Completed work': CompleteIcon,
  'Completed builds': ProjectsIcon,
  'Problems Solved': ReviewIcon,
  'AWS Internships': TeamIcon,
  'Coding Practice': CompleteIcon,
}

const Counter = () => {
  const expandRef = useRef(null)
  const speed = 6
  const counterItems = portfolioData.stats;

  useEffect(() => {
    let animationFrameId = null

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        const scrollAndSpeed = window.pageYOffset / speed
        const newWidth = Math.min(Math.max(scrollAndSpeed, 72), 100)

        if (expandRef.current) {
          expandRef.current.style.width = `${newWidth}%`
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="Counter" className="counter-wrap">
      <section id="CounterBG" className="counter-panel" ref={expandRef}>
        <div className="counter-panel__intro">
          <span>Impact snapshot</span>
          <p>Recent project outcomes and delivery numbers</p>
        </div>

        <div id="counterDiv" className="counter-grid">
          {counterItems.map((item) => (
            <div className="counter-card" key={item.label}>
              <span className="counter-card__icon">
                <img src={iconMap[item.label]} alt="" />
              </span>
              <span className="counter-card__value">
                <CountUp enableScrollSpy end={item.value} duration={4} />
                {item.suffix}
              </span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Counter
