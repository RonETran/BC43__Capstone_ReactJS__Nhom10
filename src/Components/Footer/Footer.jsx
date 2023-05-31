import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer bg-footer p-5">
      <div className="container">
        <div className="row">
          <div className="col-4 px-5">
            <h3 className="text-white">GET HELP</h3>
            <ul className="text-grey">
              <li>Contact us</li>
              <li>Shopping</li>
              <li>NIKEiD</li>
              <li>Nike+</li>
            </ul>
          </div>
          <div className="col-4 px-5 bd">
            <h3 className="text-white">ORDERS</h3>
            <ul className="text-grey">
              <li>Payment options</li>
              <li>Shipping and delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="col-4 px-5">
            <h3 className="text-white">REGISTER</h3>
            <p className="text-grey">
              Create one account to manage everything you do with Nike, from
              your shopping preferences to your Nike+ activity.
            </p>
            <NavLink to="/register" className="text-grey text-hover">Register Now!</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
