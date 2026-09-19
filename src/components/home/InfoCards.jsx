import React, { useEffect } from 'react'
/* global aat */
import { Link } from 'react-router'
import { AiOutlineApi } from 'react-icons/ai'
import { SlGlobe } from 'react-icons/sl'
import { FaFigma } from 'react-icons/fa'
import { MdManageHistory } from 'react-icons/md'
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi'
import Magnet from '../effects/Magnet'

import { portfolioData } from '../../data/portfolioData'

const iconMap = {
  Globe: SlGlobe,
  Api: AiOutlineApi,
  Figma: FaFigma,
  Care: MdManageHistory,
}

const InfoCards = () => {
  const services = portfolioData.homeServices;
  useEffect(() => {
    if (typeof aat === 'undefined') return

    const { ScrollObserver, valueAtPercentage } = aat
    const cardsContainer = document.querySelector('#ScrollCards .cards')
    const cards = document.querySelectorAll('#ScrollCards .card')

    if (!cardsContainer || cards.length === 0) return

    cardsContainer.style.setProperty('--cards-count', cards.length)
    cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`)

    Array.from(cards).forEach((card, index) => {
      const offsetTop = 15 + index * 15
      card.style.paddingTop = `${offsetTop}px`

      if (index === cards.length - 1) return

      const toScale = 1 - (cards.length - 1 - index) * 0.1
      const nextCard = cards[index + 1]
      const cardInner = card.querySelector('.card__inner')

      ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - card.clientHeight,
      }).onScroll(({ percentageY }) => {
        cardInner.style.scale = valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY,
        })
        cardInner.style.filter = `brightness(${valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY,
        })})`
      })
    })
  }, [])

  return (
    <section id="ScrollCards">
      <div className="cards">
        {services.map((service, index) => {
          const Icon = iconMap[service.iconName] || SlGlobe
          const isDark = service.theme === 'dark'

          return (
            <div className="card" data-index={index} key={service.number}>
              <div
                className={`card__inner info-card info-card--${service.theme}`}
                id={isDark ? 'ServicesBG' : undefined}
              >
                <div className="card__content info-card__content">
                  <div className="info-card__top">
                    <span className="info-card__label">{service.label}</span>
                    <span className="info-card__number">{service.number}</span>
                  </div>

                  <div className="info-card__heading">
                    <span className="info-card__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3 className="card__title info-card__title font-soldier uppercase">
                      {service.title}
                    </h3>
                  </div>

                  <p className="card__description info-card__description">
                    {service.description}
                  </p>

                  <div className="info-card__footer">
                    <ul className="info-card__points">
                      {service.points.map((point) => (
                        <li key={point}>
                          <FiCheckCircle aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Magnet magnetStrength={4} padding={20}>
                      <div className="magnetic-btn">
                        <Link
                          to="/about"
                          className="info-card__link transition-trigger font-poppins font-semibold hover-this"
                          aria-label={`View projects for ${service.title}`}
                        >
                          <span>View projects</span>
                          <FiArrowUpRight aria-hidden="true" />
                        </Link>
                      </div>
                    </Magnet>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default InfoCards
