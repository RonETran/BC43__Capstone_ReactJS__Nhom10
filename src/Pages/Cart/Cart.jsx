import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const Cart = (props) => {
  return (
    <div>
      <div className="detail-carousel bg-page">
        <div className="container p-140 text-center">
          <h2 className="text-white fs-58 fw-4 mb-3">SHOPPING CART</h2>
          <p className="fs-24">
            <NavLink to="/home" className="text-white text-hover">
              HOME
            </NavLink>
            <span className="text-orange"> // SHOPPING CART</span>
          </p>
        </div>
      </div>

      <div className="cart m-cart">
        <div className="container">
          <table className="table text-center">
            <thead className="bg-thead">
              <tr>
                <td className="product-remove td-prod"></td>
                <td className="product-img td-prod"></td>
                <td className="product-name td-prod">Product</td>
                <td className="product-price td-prod">Price</td>
                <td className="product-quantity td-prod">Quantity</td>
                <td className="product-total td-prod">Total</td>
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
                  <span className="text-hover fs-18">Adidas Prophere</span>
                </td>
                <td className="product-price ver-mid">
                  <span>450$</span>
                </td>
                <td className="product-quantity ver-mid">
                  <div className="prod-qty">
                    <input type="text" value="1"/>
                    <div className="dec qty-btn">-</div>
                    <div className="inc qty-btn">+</div>
                  </div>
                </td>
                <td className="product-total ver-mid">
                  <span>450$</span>
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
                  <span className="text-hover fs-18">Adidas Prophere</span>
                </td>
                <td className="product-price ver-mid">
                  <span>450$</span>
                </td>
                <td className="product-quantity ver-mid">
                  <div className="prod-qty">
                    <input type="text" value="1"/>
                    <div className="dec qty-btn">-</div>
                    <div className="inc qty-btn">+</div>
                  </div>
                </td>
                <td className="product-total ver-mid">
                  <span>450$</span>
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
                  <span className="text-hover fs-18">Adidas Prophere</span>
                </td>
                <td className="product-price ver-mid">
                  <span>450$</span>
                </td>
                <td className="product-quantity ver-mid">
                  <div className="prod-qty">
                    <input type="text" value="1"/>
                    <div className="dec qty-btn">-</div>
                    <div className="inc qty-btn">+</div>
                  </div>
                </td>
                <td className="product-total ver-mid">
                  <span>450$</span>
                </td>
              </tr>

              <tr className="actions">
                <td colSpan="6" className="border-0 p-act ver-mid">
                  <div className="d-flex justify-content-between">
                    <div className="act-left">
                      <button className="continue btn-left">CONTINUE SHOPPING</button>
                    </div>
                    <div className="act-right">
                      <button className="clear-cart btn-right">CLEAR CART</button>
                      <button className="update-cart btn-right">UPDATE CART</button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Cart);
