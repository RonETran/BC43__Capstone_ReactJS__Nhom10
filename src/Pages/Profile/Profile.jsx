import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const Profile = (props) => {
  return (
    <div>
      <div className="profile-carousel bg-page">
        <div className="container p-140 text-center">
          <h2 className="text-white fs-58 fw-4 mb-3">PROFILE</h2>
          <p className="fs-24">
            <NavLink to="/home" className="text-white text-hover">
              HOME
            </NavLink>
            <span className="text-orange"> // PROFILE</span>
          </p>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="myaccount-page">
                <div className="row p-account">
                  <div className="col-lg-3 col-md-4">
                    <nav>
                      <div
                        className="myaccount-tab-menu nav nav-tabs"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          className="nav-link active"
                          id="account-info-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#account-info"
                          type="button"
                          role="tab"
                          aria-controls="account-info"
                          aria-selected="true"
                          tabIndex={-1}
                        >
                          Account Details
                        </button>
                        <button
                          className="nav-link"
                          id="orders-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#orders"
                          type="button"
                          role="tab"
                          aria-controls="orders"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          Orders
                        </button>
                      </div>
                    </nav>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade"
                        id="orders"
                        role="tabpanel"
                        aria-labelledby="orders-tab"
                      >
                        <div className="myaccount-content">
                          <h3>Orders</h3>
                          <div className="myaccount-table table-responsive text-center">
                            <table className="table table-bordered">
                              <thead className="thead-light">
                                <tr>
                                  <th>Order</th>
                                  <th>Date</th>
                                  <th>Total</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Aug 22, 2022</td>
                                  <td>$3000</td>
                                  <td>
                                    <a
                                      href="/"
                                      className="check-btn sqr-btn "
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>July 22, 2022</td>
                                  <td>$200</td>
                                  <td>
                                    <a
                                      href="shop-cart.html"
                                      className="check-btn sqr-btn "
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>June 12, 2022</td>
                                  <td>$990</td>
                                  <td>
                                    <a
                                      href="shop-cart.html"
                                      className="check-btn sqr-btn "
                                    >
                                      View
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade active show"
                        id="account-info"
                        role="tabpanel"
                        aria-labelledby="account-info-tab"
                      >
                        <div className="myaccount-content">
                          <h3>Account Details</h3>
                          <div className="account-details-form">
                            <form action="#">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="single-input-item">
                                    <label htmlFor="email" className="required">
                                      Email
                                    </label>
                                    <input type="email" id="email" className="cus"/>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="single-input-item">
                                    <label htmlFor="name" className="required">
                                      Name
                                    </label>
                                    <input type="text" id="name" className="cus"/>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="phoneNumber"
                                      className="required"
                                    >
                                      Phone number
                                    </label>
                                    <input type="text" id="phoneNumber" className="cus"/>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="password"
                                      className="required"
                                    >
                                      Password
                                    </label>
                                    <input type="text" id="password" className="cus"/>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="single-input-item form-group">
                                    <p className="myaccount-gender">Gender</p>
                                    <div className='h-gender'>
                                      <input type="radio" className='form-check-input cus-check-input' name='gender' id='gender1' value={true}/>
                                      <label htmlFor="gender1" className='me-4'>Male</label>
                                      <input type="radio" className='form-check-input cus-check-input' name='gender' id='gender2' value={false}/>
                                      <label htmlFor="gender2">Female</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="single-input-item">
                                <button className="check-btn">
                                  Save Changes
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Profile);
