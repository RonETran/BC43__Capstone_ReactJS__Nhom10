import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ProductCart from "../../Components/ProductCart/ProductCart";

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
              {props.cart.map((item)=>{
                return <ProductCart itemCart={item}/>
              })}

              <tr className="actions">
                <td colSpan="6" className="border-0 p-act ver-mid">
                  <div className="d-flex justify-content-between">
                    <div className="act-left">
                      <NavLink to="/home" className="continue btn-left">CONTINUE SHOPPING</NavLink>
                    </div>
                    <div className="act-right">
                      <button className="btn-right">SUBMIT ORDER</button>
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

const mapStateToProps = (state) => ({
  cart: state.shopReducer.cart
});

export default connect(mapStateToProps)(Cart);
