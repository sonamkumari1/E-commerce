import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import About from './About'
import AppSection from './AppSection'
import Sponser from './Sponser'

function Home() {
  return (
    <div>
      <Banner/>
      <HomeCategory />
      <CategoryShowCase/>
      <Register/>
      <LocationSprade/>
      <About/>
      <AppSection/>
      <Sponser/>
    </div>
  )
}

export default Home


