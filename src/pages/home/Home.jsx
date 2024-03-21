import React from 'react'
import TopNavigation from '../../components/top-navigation/TopNavigation'
import Hero from '../../components/hero/Hero'
import Speakers from '../../components/speakers/Speakers'
import Goals from '../../components/goal/Goals'
import PrinSpeakers from '../../components/prinSpeakers/PrinSpeakers'

function Home() {
  return (
    <main>
      <Hero />
      <Goals/>
      <Speakers />
      <PrinSpeakers />
    </main>
  )
}

export default Home