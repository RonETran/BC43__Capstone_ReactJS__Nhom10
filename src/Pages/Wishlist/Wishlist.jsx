import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Wishlist = (props) => {
  return (
    <div>
      <div className="profile-carousel bg-page">
        <div className="container p-140 text-center">
          <h2 className="text-white fs-58 fw-4 mb-3">WISHLIST</h2>
          <p className="fs-24">
            <NavLink to="/home" className="text-white text-hover">
              HOME
            </NavLink>
            <span className="text-orange"> // WISHLIST</span>
          </p>
        </div>
      </div>

      <div>
      <div className="wishlist m-cart">
        <div className="container">
          <table className="table text-center">
            <thead className="bg-thead">
              <tr>
                <td className="product-remove td-prod"></td>
                <td className="product-img td-prod"></td>
                <td className="product-name td-prod">Product</td>
                <th class="product-stock-status td-prod">Stock Status</th>
                <td className="product-price td-prod">Price</td>
                <th class="product-action"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-remove ver-mid p-td">
                  <i class="fa fa-trash-alt text-hover"></i>
                </td>
                <td className="product-img ver-mid">
                  <img src="./img/image 5.png" className="w-80" alt="" />
                </td>
                <td className="product-name ver-mid p-td">
                  <span className="text-hover fs-16">Adidas Prophere</span>
                </td>
                <td class="product-stock-status ver-mid p-td">
                   <span class="stock">In Stock</span>
                </td>
                <td className="product-price ver-mid">
                  <span>450$</span>
                </td>
                <td class="product-action ver-mid t-right">
                    <a class="btn-cart" href="/">Add to cart</a>
                </td>
              </tr>
              <tr>
                <td className="product-remove ver-mid p-td">
                  <i class="fa fa-trash-alt text-hover"></i>
                </td>
                <td className="product-img ver-mid">
                  <img src="./img/image 5.png" className="w-80" alt="" />
                </td>
                <td className="product-name ver-mid p-td">
                  <span className="text-hover fs-16">Adidas Prophere</span>
                </td>
                <td class="product-stock-status ver-mid p-td">
                   <span class="stock">In Stock</span>
                </td>
                <td className="product-price ver-mid">
                  <span>450$</span>
                </td>
                <td class="product-action ver-mid t-right">
                    <a class="btn-cart" href="/">Add to cart</a>
                </td>
              </tr>
              <tr>
                <td className="product-remove ver-mid p-td">
                  <i class="fa fa-trash-alt text-hover"></i>
                </td>
                <td className="product-img ver-mid">
                  <img src="./img/image 5.png" className="w-80" alt="" />
                </td>
                <td className="product-name ver-mid p-td">
                  <span className="text-hover fs-16">Adidas Prophere</span>
                </td>
                <td class="product-stock-status ver-mid p-td">
                   <span class="stock">In Stock</span>
                </td>
                <td className="product-price ver-mid">
                  <span>450$</span>
                </td>
                <td class="product-action ver-mid t-right">
                    <a class="btn-cart" href="/">Add to cart</a>
                </td>
              </tr>
              

            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(Wishlist)