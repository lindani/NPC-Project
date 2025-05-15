import React from 'react'
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Objectives from './components/Objectives'
import About from './components/About'
import Footer from './components/Footer'
import Testimonial from './components/Testimonials'

const App = () => {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />

      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <Testimonial />
      <Footer />
    </div>

  )
}

export default App