import React from 'react'

// import components
import { UpdateFollower } from 'react-mouse-follower'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App() {


  return (
    <>
    <main className='overflow-x-hidden'>
      <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 999,
        followSpeed: 1.5,
      }}
      >
        <Navbar/>
        <Hero/>
      </UpdateFollower>
    </main>
    </>
  )
}

export default App
