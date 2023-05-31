import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Home = (props) => {
  return (
    <div>
        <div className='home-carousel bg-carousel'>
            <div className='container'>
                <div className='p-carousel'>
                    <p className='fs-24 text-white m-0'>UP TO 30% OFF</p>
                    <h2 className='text-white fs-90 mb-5'><span className='fs-58 fw-4'>EXCLUSIVE<br/></span>NEW SHOES</h2>
                    <button className='button'><span></span>Shop Now</button>
                </div>
            </div>
        </div>

        <div className='product-list mt-5'>
            <div className='container'>
                <div className='product-title text-center mb-5'>
                    <h2 className='fs-48'>Featured Items</h2>
                    <p className='fs-18'>There are many variations of passages of Lorem Ipsum available</p>
                </div>
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
                    <div className='item col-3 mb-5 '>
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
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Home)