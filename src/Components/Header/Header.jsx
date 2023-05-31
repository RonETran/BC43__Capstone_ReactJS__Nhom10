import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Header = (props) => {
  return (
    <div className='header'>
        <div className='header-top bg-header-top'>
            <div className='container d-flex px-0 py-2 justify-content-between align-items-center'>
                <p className='m-0'>World Wide Completely Free Returns and Free Shipping</p>
                <div className='account'>
                    <i className="fa fa-user icon-orange px-2"></i>
                    <NavLink to="/login" className="text-dark text-hover px-2">Login</NavLink>
                    <NavLink to="/register" className="text-dark bd-text text-hover px-2">Register</NavLink>
                </div>
            </div>
        </div>
        <div className='header-mid pt-4 pb-3'>
            <div className='container d-flex px-0 justify-content-between align-items-center'>
                <div className='header-mid-left'>
                    <h2 className='logo'>Shoes</h2>
                </div>
                <div className='header-mid-right d-flex'>
                    <NavLink to="/search"><i className="fa fa-search fs-icon px-2"></i></NavLink>
                    <NavLink to="/wishlist"><i className="fa fa-heart fs-icon px-2"></i></NavLink>
                    <div className='cart position-relative'>
                        <NavLink to="/cart"><i className="fa fa-shopping-cart fs-icon px-2"></i></NavLink>
                        <span className='position-absolute count'>0</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='header-bot'>
            <div className='container bg-orange bdr-header p-3'>
                <ul className='d-flex m-0 justify-content-center'>
                    <li><NavLink to='/' className={({ isActive }) =>isActive ? "px-4 text-active" : "px-4 text-white menu"}>HOME</NavLink></li>
                    <li><NavLink to='/' className="px-4 text-white menu">MEN</NavLink></li>
                    <li><NavLink to='/' className="px-4 text-white menu">WOMEN</NavLink></li>
                    <li><NavLink to='/' className="px-4 text-white menu">KID</NavLink></li>
                    <li><NavLink to='/' className="px-4 text-white menu">SPORT</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Header)