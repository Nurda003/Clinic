import React from 'react'
import NavBar from '../comps/NavBar'
import HeroOne from '../comps/HeroOne'
import HeroTwo from '../comps/HeroTwo'
import Footer from '../comps/Footer'

function Home() {
  return (
    <div className='px-20 py-10'>
        <NavBar />
        <HeroOne />
        <HeroTwo />
        <Footer />
    </div>
  )
}

export default Home