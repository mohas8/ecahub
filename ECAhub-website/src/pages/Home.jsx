import React from 'react'
import Banner from '../components/Banner'
import Opportunities from '../components/Opportunities'

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="max-w-7xl mx-auto">
        <Opportunities/>
      </div>

    </div>
  )
}

export default Home