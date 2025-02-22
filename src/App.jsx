import React from 'react'

// import components
import { UpdateFollower } from 'react-mouse-follower'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services  from './components/Services'
import { Banner } from './components/Banner'
import { BannerText } from './components/BannerText'


function App() {
  return (
      <main className='overflow-x-hidden'>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <Navbar />
          <Hero />
        </UpdateFollower>

        <UpdateFollower
          mouseOptions={{
            backgroundColor: "black",
            zIndex: 9,
            followSpeed: 1.5,
          }}>
          <Services />
          <Banner/>
          <BannerText/>
        </UpdateFollower>
      </main>
  )
}

export default App
