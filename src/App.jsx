import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Expertise from './components/Expertise'
import Works from './components/Works'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonial />
      <Faq />
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