import React from 'react'
import PageBanner from '../components/common/PageBanner'
import AboutText from '../components/About Me/AboutText'
import Services from '../components/About Me/Services'
import Review from '../components/About Me/Review'
import Experience from '../components/About Me/Experience'
import Education from '../components/About Me/Education'
import ExploreMyWork from '../components/common/ExploreMyWork'
import { portfolioData } from '../data/portfolioData'

const About = () => {
  const { about } = portfolioData.pages;

  return (
    <>
      <section className='my-20'>
        <PageBanner
          id='AboutBanner'
          kicker={about.kicker}
          kickerMobile={about.kickerMobile}
          title={about.title}
          description={about.description}
          scrollTarget='#AboutMeText'
        />
        <AboutText />
        <Experience />
        <Education />
        <Services />
        <Review />
        <div className='pt-[130px]'>
          <ExploreMyWork />
        </div>
      </section>
    </>
  )
}

export default About
