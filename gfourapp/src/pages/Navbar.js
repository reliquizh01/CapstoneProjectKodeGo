import React from 'react'
import Image from 'react-bootstrap/Image';
import '../css/styles.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  return (
    <nav className = "navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
        <div className = "container">
            <a className = "navbar-brand d-flex justify-content-between align-items-center order-lg-0" href = "index.html">
                <img src ={require("../images/iphone-32.png")} alt = "iphone icon" />
                <span className = "text-uppercase fw-lighter ms-2">G4</span>
            </a>

            <div className = "order-lg-2 nav-btns">
                <button type = "button" className = "btn position-relative">
                    <Link to="/Cart">
                    <ShoppingCartIcon />
                    {/* TODO : Adjust this Number depending on the amount of items in cart Database */}
                    <span className = "position-absolute top-0 start-100 translate-middle badge bg-primary">1</span>
                    </Link>
                </button>
            
                <button type = "button" className = "btn position-relative">
                    <Link to="/Cart">
                    <PersonIcon />
                    </Link>
                </button>
            </div>

            <button className = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                <span className = "navbar-toggler-icon"></span>
            </button>

            
            <div className ="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className ="navbar-nav">
                <li className ="nav-item">
                    <Link to="/" className="nav-link" aria-current="page" style={{ textDecoration: 'none' }}>Home</Link>
                </li>

                <li className ="nav-item dropdown">
                    <a className ="nav-link dropdown-toggle" href="#shop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop Apple
                    </a>
                    <ul className ="dropdown-menu">
                    <li><a className ="dropdown-item" href="#shop">iphone 14</a></li>
                    <li><a className ="dropdown-item" href="#iphone13">iphone 13</a></li>
                    <li><a className ="dropdown-item" href="#iphone12">iphone 12</a></li>
                    <li><a className ="dropdown-item" href="#iphone11">iphone 11</a></li>
                    </ul>
                </li>

                <li className ="nav-item dropdown">
                    <a className ="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                    </a>
                    <ul className ="dropdown-menu">
                    <li><a className ="dropdown-item" href="#popular">Popular</a></li>
                    <li><a className ="dropdown-item" href="#">Promos</a></li>
                    <li><a className ="dropdown-item" href="#">Cases</a></li>
                    </ul>
                </li>

                <li className ="nav-item dropdown">
                    <a className ="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Support
                    </a>
                    <ul className ="dropdown-menu">
                    <li><a className ="dropdown-item" href="#">Contact Us</a></li>
                    <li><a className ="dropdown-item" href="#">Admin</a></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar