import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './General/Header.jsx'
import Footer from './General/Footer.jsx'

import BannerSale from './Promotion/BannerSale.jsx';

import Jumbotron from './LandingPage/Jumbotron.jsx'
import FeaturedProducts from './LandingPage/FeaturedProducts.jsx'
import Feedback from './LandingPage/Feedback.jsx'
import AboutUs from './LandingPage/AboutUs.jsx'


import RegisterForm from './Authentication/RegisterForm.jsx';
import LoginForm from './Authentication/LoginForm.jsx';

import ViewProduct from './Product/ViewProduct.jsx';

import './Main.css'

const HomePage = () => (
  <>
    <Header />
    <Jumbotron />

    <FeaturedProducts />


    <Footer />
  </>
);

const FeedbackPage = () => (
  <>
    <Header />
    <Feedback />

    <Footer />
  </>
);

const AboutUsPage = () => (
  <>
    <Header />
    <AboutUs/>

    <Footer />
  </>
);

const RegisterPage = () => (
  <>
    <Header />
    <RegisterForm />
    <Footer />
  </>
);

const LoginPage = () => (
  <>
    <Header />
    <LoginForm />
    <Footer />
  </>
);

const ViewProductPage = () => (
  <>
    <Header />
    <BannerSale />
    <ViewProduct />
    <Footer />
  </>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path : "/register",
    element: <RegisterPage />,
  },
  {
    path : "/login",
    element: <LoginPage />,
  },
  {
    path : "/viewProduct",
    element: <ViewProductPage />,
  },
  {
    path : "/AboutUs",
    element: <AboutUsPage />,
  },

  {
    path : "/Feedback",
    element: <FeedbackPage />,
  },


]);


ReactDOM.createRoot(document.getElementById('renderBody')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
