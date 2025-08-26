'use client';

import React from 'react'
import MyNavbar from '@/components/Generic/Navbar'
import Footer from '@/components/Generic/Footer'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div>
      <MyNavbar/>
      <div className="row m-0 pt-5" style={{height:"400px"}}>
        <div className="col-12 text-center align-self-center">
          <Image src="/404.svg" alt="404" width={300} height={300} style={{textAlign:"center"}}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}