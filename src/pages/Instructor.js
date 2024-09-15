import React, { useEffect } from 'react'
import MyNavbar from '../components/Navbar'
import { useLocation } from "react-router-dom";

const Instructor = () => {
    const location = useLocation();
    const facultyData = location.state?.data; 
  
useEffect(()=>{
    console.log(facultyData)
})

  return (
    <div>
      <MyNavbar/>
    </div>
  )
}

export default Instructor