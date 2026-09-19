import React from 'react'
import AllProjects from '../components/Projects/AllProjects'
import PageBanner from '../components/common/PageBanner'
import { portfolioData } from '../data/portfolioData'

const Projects = () => {
  const { projects: projectsPage } = portfolioData.pages;

  return (
    <>
      <PageBanner
        id='ProjectsBanner'
        kicker={projectsPage.kicker}
        title={projectsPage.title}
        description={projectsPage.description}
        descriptionWidth='lg:w-[500px]'
        scrollTarget='#AllProjects-Section'
        className='py-20'
      />
      <AllProjects />
    </>
  )
}

export default Projects