import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Robot from './components/Robot'
import Expertise from './components/Expertise'
import Figma from './components/Figma'
import Works from './components/Works'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      {/* <Robot /> */}
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonial />
      <Faq />
      <Figma />   
      <Footer />
      {/* Uncomment the following lines to enable routing */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  )
}

export default App