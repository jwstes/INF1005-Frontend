import { useState } from 'react'
import { useAuth } from '../Context/AuthContext'


function UserHeader() {
  const { userEmail, logout } = useAuth();


  const handleLogout = () => {
    logout();
  };

  return (
    <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary header">
              <div className="container-fluid">
                  <a className="navbar-brand" href="/">RollieShop</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/AboutUs">About Us</a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Shop Watches
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="/category?nm=retail">Retail Rolex</a></li>
                                  <li><hr className="dropdown-divider"></hr></li>
                                  <li><a className="dropdown-item" href="/category?nm=ltd">Limited Edition Rolex</a></li>
                              </ul>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/Feedback">Feedback</a>
                          </li>
                      </ul>
                      <form className='d-flex'>

                        <div class="dropdown">
                            <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Logged In As: {userEmail}
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/cart">My Cart</a></li>
                                <li><a class="dropdown-item" href="/myOrders">My Orders</a></li>
                                <li><a class="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </div>

                      </form>
                  </div>
              </div>
          </nav>
    </>
  )
}

export default UserHeader
