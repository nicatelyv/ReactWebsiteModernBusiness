import React from 'react'
import HomeHeader from '../../components/HomeComponents/HomeHeader'
import TomAtoTexts from '../../components/HomeComponents/HomeTomAtoTexts'
import HomeWayToStartSection from '../../components/HomeComponents/HomeWayToStartSection'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import FromOurBlog from '../../components/HomeComponents/HomeFromOurBlog'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
    <Helmet>
      <title>Modern Business Home Page</title>
    </Helmet>
    <Navbar/>
    <HomeHeader/>
    <HomeWayToStartSection/>
    <TomAtoTexts/>
    <FromOurBlog/>
    <Footer/>
    </>
  )
}

export default Home