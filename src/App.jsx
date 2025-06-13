import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Expertise from './components/Expertise'
import Works from './components/Works'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Expertise />
      <Works />
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