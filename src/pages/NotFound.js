import React from 'react'
import MyNavbar from '../components/Navbar'
import Footer from '../components/Footer'
import image404 from '../assets/404.svg'

const NotFound = () => {
  return (
    <div>
      <MyNavbar/>
      <div className="row m-0 pt-5" style={{height:"400px"}}>
        <div className="col-12 text-center align-self-center">
            
      <img src={image404} alt="" style={{height:"300px",textAlign:"center"}}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default NotFound
