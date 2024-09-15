import React from 'react'
import Navbar from '../components/Navbar'
import MyNavbar from '../components/Navbar'
import { LANDING_IMAGE_COMPONENT } from '../components/HomePageComponents'
import PopularFaculty from '../components/PopularFaculty'

const Home = () => {
  return (
    <div>
      <MyNavbar/>
      <LANDING_IMAGE_COMPONENT/>
      <PopularFaculty/>
    </div>
  )
}

export default Home
