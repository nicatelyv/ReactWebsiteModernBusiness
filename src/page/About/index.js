import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import OurMission from '../../components/AboutComponents/OurMissionSection'
import OurFounding from '../../components/AboutComponents/OurFoundingSection'
import GrowthBeyond from '../../components/AboutComponents/GrowthBeyondSection'
import AboutOurTeam from '../../components/AboutComponents/OurTeamSection'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <>
    <Helmet>
      <title>Modern Business About Page</title>
    </Helmet>
    <Navbar/>
    <OurMission/>
    <OurFounding/>
    <GrowthBeyond/>
    <AboutOurTeam/>
    <Footer/>
    </>
  )
}

export default About