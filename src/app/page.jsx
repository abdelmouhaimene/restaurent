import React from 'react'
import { useTranslations } from 'next-intl'
import Header from './sections/Header';
import About from './sections/About';
import Chef from './sections/Chef';
import Intro from './sections/Intro';
import Gallery from './sections/Gallery';
import FindUs from './sections/FindUs'
const Home = () => {
  return (
    <main className='   mt-10 '>
      <Header />
      <About />
      <Chef />
      <Intro />
      <Gallery />
      <FindUs />
    </main>

  )
}

export default Home
