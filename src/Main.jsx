import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './General/Header.jsx'
import UserHeader from './General/UserHeader.jsx';
import AdminHeader from './General/AdminHeader.jsx';
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

import Orders from './Orders/Orders.jsx';

import ManagementPage from './Management/Admin.jsx';

import { AuthProvider, useAuth } from './Context/AuthContext.jsx';

import './Main.css'



const HomePage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }

  return (
    <>
      {renderHeader()}
      <Jumbotron />
      <FeaturedProducts />
      <GetFeaturedProducts />
      <Footer />
    </>
  );
};

const FeedbackPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <Feedback />
  
      <Footer />
    </>
  );
};

const AboutUsPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <AboutUs/>
  
      <Footer />
    </>
  );
};

const RegisterPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <RegisterForm />
      <Footer />
    </>
  );
};

const LoginPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <LoginForm />
      <Footer />
    </>
  );
};

const ViewProductPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <BannerSale />
      <ViewProduct />
      <Footer />
  
      <AddToCart />
    </>
  );
};

const CategoryPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <BannerSale />
      <ProductGrid />
      
      <Footer />
    </>
  );
};


const CartPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <Cart />
      <Footer />
    </>
  );
}

const CheckoutPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <Checkout />
      <Footer />
    </>
  );
}
const PaymentPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <Payment />
      <Footer />
    </>
  );
}


const PaymentSuccessPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <PaymentSuccess />
      <Footer />
    </>
  );
}

const PaymentErrorPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <PaymentError />
      <Footer />
    </>
  );
}

const OrdersPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
      {renderHeader()}
      <Orders />
      <Footer />
    </>
  );
}

const ManagementComponent = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  console.log(isLoggedIn, isAdmin);
  const renderHeader = () => {
    if (isLoggedIn){
      if(isAdmin){
        return <AdminHeader />;
      }
      return <UserHeader />;
    }
    return <Header />;
  }
  return (
    <>
    {renderHeader()}
    <ManagementPage/>

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
  },

  {
    path : "/MyOrders",
    element: <OrdersPage />,
  },

  {
    path: "/Management",
    element: <ManagementComponent/>,
  },
  
]);


ReactDOM.createRoot(document.getElementById('renderBody')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
