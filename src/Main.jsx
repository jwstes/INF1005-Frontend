import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './General/Header.jsx'
import Footer from './General/Footer.jsx'

import Jumbotron from './LandingPage/Jumbotron.jsx'
import FeaturedProducts from './LandingPage/FeaturedProducts.jsx'
import ContactUsSection from './LandingPage/ContactUsSection.jsx'

import './Main.css'

const HomePage = () => (
  <>
    <Header />
    <Jumbotron />
    <FeaturedProducts />
    <ContactUsSection />
    <Footer />
  </>
);

const RegisterPage = () => (
  <>
    
  </>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);


ReactDOM.createRoot(document.getElementById('renderBody')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
