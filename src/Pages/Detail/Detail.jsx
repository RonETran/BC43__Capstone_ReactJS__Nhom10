import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Detail = (props) => {
  return (
    <div>
      <div className='detail-carousel bg-page'>
        <div className='container p-140 text-center'>
          <h2 className='text-white fs-58 fw-4 mb-3'>PRODUCT DETAILS</h2>
          <p className='fs-24'><NavLink to="/home" className="text-white text-hover">HOME</NavLink><span className='text-orange'> // PRODUCT DETAILS</span></p>
        </div>
      </div>

      <div className='product-detail m-10'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-5 bg-product w-400 h-400 position-relative'>
              <img src="./img/image 5.png" alt="" className='w-detail position-img'/>
            </div>
            <div className='col-6 ms-5'>
              <h3 className='fs-24 mb-3'>Adidas Prophere</h3>
              <p className='text-orange fs-24'>450$</p>
              <hr />
              <div className='desc mb-4'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci assumenda voluptatem debitis nam deleniti voluptatibus maiores, modi ad dolore</p>
              </div>
              <div className='mb-4'>
                <label htmlFor="size" className='mb-1'>Size</label>
                <br />
                <select name="size" id="size" className='p-size'>
                  <option value="">Choose an option</option>
                  <option value="">38</option>
                  <option value="">39</option>
                  <option value="">40</option>
                  <option value="">41</option>
                  <option value="">42</option>
                  <option value="">43</option>
                </select>
              </div>
              <div className='quantity'>
                <input type="number" step="1" min="1" max="100" name='quantity' className='p-qty me-3'/>
                <button className='p-add'>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='related-prod'>
        <div className='container'>
          <div className='text-center mb-5'>
            <h3 className='fs-48'>Related Products</h3>
            <p className='fs-18'>There are many variations of passages of Lorem Ipsum available</p>
          </div>
          <div className='related-items row '>
            <div className='item col-3 m-prod mb-5 px-0'>
              <div className='img mb-2 w-270 h-270 bg-product position-relative'>
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
            <div className='item col-3 m-prod mb-5 px-0'>
              <div className='img mb-2 w-270 h-270 bg-product position-relative'>
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
            <div className='item col-3 m-prod mb-5 px-0'>
              <div className='img mb-2 w-270 h-270 bg-product position-relative'>
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
            <div className='item col-3 m-prod mb-5 px-0'>
              <div className='img mb-2 w-270 h-270 bg-product position-relative'>
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
            <div className='item col-3 m-prod mb-5 px-0'>
              <div className='img mb-2 w-270 h-270 bg-product position-relative'>
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

export default connect(mapStateToProps)(Detail)