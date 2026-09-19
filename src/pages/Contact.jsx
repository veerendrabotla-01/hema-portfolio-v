import React from 'react'
import PageBanner from '../components/common/PageBanner'
import ContactMe from '../components/home/ContactMe'
import ExploreMyWork from '../components/common/ExploreMyWork'
import { portfolioData } from '../data/portfolioData'

const Contact = () => {
  const { contact } = portfolioData.pages;

  return (
    <>
      <PageBanner
        id='ContactBanner'
        kicker={contact.kicker}
        kickerMobile={contact.kickerMobile}
        title={contact.title}
        description={contact.description}
        scrollTarget='#Contact-Section'
        className='py-20'
      />
      <div id='Contact-Section'>
        <ContactMe />
      </div>
      <div className='pb-[130px]'>
        <ExploreMyWork />
      </div>
    </>
  )
}

export default Contact