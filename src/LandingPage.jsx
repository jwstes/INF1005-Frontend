import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './General/Header.jsx'
import Footer from './General/Footer.jsx'

import Jumbotron from './LandingPage/Jumbotron.jsx'
import FeaturedProducts from './LandingPage/FeaturedProducts.jsx'
import ContactUsSection from './LandingPage/ContactUsSection.jsx'

import './LandingPage.css'

ReactDOM.createRoot(document.getElementById('renderBody')).render(
  <React.StrictMode>
    <Header />
    <Jumbotron />
    <FeaturedProducts />
    <ContactUsSection />
    <Footer />

  </React.StrictMode>,
)
