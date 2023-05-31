import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Search = (props) => {
  return (
    <div>
      <div className="profile-carousel bg-page">
        <div className="container p-140 text-center">
          <h2 className="text-white fs-58 fw-4 mb-3">SEARCH</h2>
          <p className="fs-24">
            <NavLink to="/home" className="text-white text-hover">
              HOME
            </NavLink>
            <span className="text-orange"> // SEARCH</span>
          </p>
        </div>
      </div>

      <div className='py-5'>
        <div className='container'>
          <form className="position-relative w-form-search">
            <input type="search" className="form-control search-input" placeholder="Search" />
            <button className="btn-search" type="submit"><i className="fa fa-search icon-search"/></button>
          </form>
          <div className='filter-price'>
            <select name="" id="">
              <option value="">Choose an option</option>
              <option value="">Decrease</option>
              <option value="">Ascending</option>
            </select>
          </div>
          <div className='product-list mt-5'>
            <div className='container'>
              <div className='product-item row'>
                <div className='item col-3 mb-5'>
                  <div className='img mb-2 h-270 bg-product position-relative'>
                    <img src="./img/image 5.png" alt="" className='position-img'/>
                    <ul className='d-flex m-0 position-list'>
                      <li className='px-3 py-2 bg-footer text-white bd-right li-icon'>ADD TO CART</li>
                      <li className='p-li-icon bg-footer text-white bd-right li-icon'><NavLink to="/detail" className="text-white"><i class="fa fa-eye"></i></NavLink></li>
                      <li className='p-li-icon bg-footer text-white bd-right li-icon'><i class="fa fa-heart"></i></li>
                    </ul>
                  </div>
                  <div className='info'>
                    <p className='m-0 fs-20'>Adidas</p>
                    <p className='text-orange fs-20'>450$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Search)