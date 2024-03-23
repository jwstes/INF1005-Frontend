import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './General/Header.jsx'
import UserHeader from './General/UserHeader.jsx';
import Footer from './General/Footer.jsx'

import BannerSale from './Promotion/BannerSale.jsx';

import Jumbotron from './LandingPage/Jumbotron.jsx'
import FeaturedProducts from './LandingPage/FeaturedProducts.jsx'
import Feedback from './LandingPage/Feedback.jsx'
import AboutUs from './LandingPage/AboutUs.jsx'

import ProductGrid from './GridView/ProductGrid.jsx';

import RegisterForm from './Authentication/RegisterForm.jsx';
import LoginForm from './Authentication/LoginForm.jsx';

import ViewProduct from './Product/ViewProduct.jsx';


import GetFeaturedProducts from './APICalls/GetFeaturedProducts.jsx';


import Cart from './CheckoutFlow/Cart.jsx'
import Checkout from './CheckoutFlow/Checkout.jsx'
import AddToCart from './PageSpecificFunctions/AddToCart.jsx';

import Payment from './Payment/Payment.jsx';
import PaymentSuccess from './Payment/PaymentSuccess.jsx';
import PaymentError from './Payment/PaymentError.jsx';


import { AuthProvider, useAuth } from './Context/AuthContext.jsx';

import './Main.css'



const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <Jumbotron />
      <FeaturedProducts />
      <GetFeaturedProducts />
      <Footer />
    </>
  );
};

const FeedbackPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <Feedback />
  
      <Footer />
    </>
  );
};

const AboutUsPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <AboutUs/>
  
      <Footer />
    </>
  );
};

const RegisterPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <RegisterForm />
      <Footer />
    </>
  );
};

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <LoginForm />
      <Footer />
    </>
  );
};

const ViewProductPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <BannerSale />
      <ViewProduct />
      <Footer />
  
      <AddToCart />
    </>
  );
};

const CategoryPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <BannerSale />
      <ProductGrid />
      
      <Footer />
    </>
  );
};


const CartPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <Cart />
      <Footer />
    </>
  );
}

const CheckoutPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <Checkout />
      <Footer />
    </>
  );
}
const PaymentPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <Payment />
      <Footer />
    </>
  );
}

const PaymentSuccessPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <PaymentSuccess />
      <Footer />
    </>
  );
}

const PaymentErrorPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? <UserHeader /> : <Header />}
      <PaymentError />
      <Footer />
    </>
  );
}


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
  {
    path : "/category",
    element: <CategoryPage />,
  },

  {
    path : "/Cart",
    element: <CartPage />,
  },
  {
    path : "/Checkout",
    element: <CheckoutPage />,
  },
  {
    path : "/Payment",
    element: <PaymentPage />,
  },
  {
    path : "/PaymentSuccess",
    element: <PaymentSuccessPage />,
  },
  {
    path : "/PaymentError",
    element: <PaymentErrorPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('renderBody')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
