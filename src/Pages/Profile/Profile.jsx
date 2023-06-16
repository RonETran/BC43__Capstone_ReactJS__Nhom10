import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as yup from 'yup';
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { USER_PROFILE, http, saveStorageJSON } from "../../Util/config";
import ProductOrder from "../../Components/ProductOrder/ProductOrder";
import {useForm} from 'react-hook-form';


export const Profile = (props) => {
  const [ordersHistory, setOrdersHistory] = useState([])
  const [profile,setProfile] = useState(props.userProfile);

  const updateForm = useFormik({
    initialValues:{
      email: "",
      password: "",
      name: "",
      gender: true,
      phone: ""
    },

    validationSchema:yup.object().shape({
      name:yup.string().required("Name cannot be blank!"),
      phone:yup.number().required("Phone number cannot be blank!")
    }),

    onSubmit: async (values) => {
      try{
        const res = await http.post('/api/Users/updateProfile',values);
        alert(res.data?.content);
        window.location.reload();
      }
      catch(err){
        alert(err.response.data.content);
      }
    },
  });

  const {setValue} = useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateForm.handleChange(e);
    setValue(name, value);
  }

  const getProfile = async () => {
    try{
      const res = await http.post(`/api/Users/getProfile`);
      saveStorageJSON(USER_PROFILE,res.data.content);
      setProfile(res.data.content);
      let orderHistory = res.data.content.ordersHistory;
      setOrdersHistory(orderHistory);
    }
    catch(err){
      return err;
    }
  };

  useEffect(()=>{
    getProfile();
  },[])

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
                          id="dashboard-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#dashboard"
                          type="button"
                          role="tab"
                          aria-controls="dashboard"
                          aria-selected="true"
                          tabIndex={-1}
                        >
                          Dashboard
                        </button>
                        <button
                          className="nav-link"
                          id="account-info-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#account-info"
                          type="button"
                          role="tab"
                          aria-controls="account-info"
                          aria-selected="false"
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
                        className="tab-pane fade active show"
                        id="dashboard"
                        role="tabpanel"
                        aria-labelledby="dashboard-tab"
                      >
                        <div className="myaccount-content">
                          <h3>Dashboard</h3>
                          <div className="welcome">
                            <p>
                              Hello, <strong>{profile.email}</strong>
                            </p>
                          </div>
                          <p>
                            From your account dashboard. you can easily check
                            & view your recent orders, manage your shipping
                            and billing addresses and edit your password and
                            account details.
                          </p>
                        </div>
                      </div>

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
                                  <th>Order code</th>
                                  <th>Name</th>
                                  <th>Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {ordersHistory.map((item,index)=>{
                                  return <ProductOrder key={index} itemOrder={item}/>
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="account-info"
                        role="tabpanel"
                        aria-labelledby="account-info-tab"
                      >
                        <div className="myaccount-content">
                          <h3>Account Details</h3>
                          <div className="account-details-form">
                            <form action="#" onSubmit={updateForm.handleSubmit}>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="single-input-item">
                                    <img src={profile.avatar} alt="" />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="single-input-item">
                                    <label htmlFor="email" className="required">
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      className="cus"
                                      value={updateForm.values.email}
                                      onInput={updateForm.handleChange}
                                      onBlur={updateForm.handleBlur}
                                    />
                                    {updateForm.errors.email && <p className='text-danger mt-1'>{updateForm.errors.email}</p>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="single-input-item">
                                    <label htmlFor="name" className="required">
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      name="name"
                                      id="name"
                                      className="cus"
                                      value={updateForm.values.name}
                                      onChange={handleInputChange}
                                      onBlur={updateForm.handleBlur}
                                    />
                                    {updateForm.errors.name && <p className='text-danger mt-1'>{updateForm.errors.name}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="phone"
                                      className="required"
                                    >
                                      Phone number
                                    </label>
                                    <input
                                      type="text"
                                      name="phone"
                                      id="phone"
                                      className="cus"
                                      value={updateForm.values.phone}
                                      onChange={handleInputChange}
                                      onBlur={updateForm.handleBlur}
                                    />
                                    {updateForm.errors.phone && <p className='text-danger mt-1'>{updateForm.errors.phone}</p>}
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
                                    <input
                                      type="text"
                                      name="password"
                                      id="password"
                                      className="cus"
                                      value={updateForm.values.password}
                                      onInput={updateForm.handleChange}
                                      onBlur={updateForm.handleBlur}
                                    />
                                    {updateForm.errors.password && <p className='text-danger mt-1'>{updateForm.errors.password}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="single-input-item form-group">
                                    <p className="myaccount-gender">Gender</p>
                                    <div className="h-gender">
                                      <input
                                        type="radio"
                                        className="form-check-input cus-check-input"
                                        name="gender"
                                        id="gender1"
                                        value={true}
                                      />
                                      <label htmlFor="gender1" className="me-4">
                                        Male
                                      </label>
                                      <input
                                        type="radio"
                                        className="form-check-input cus-check-input"
                                        name="gender"
                                        id="gender2"
                                        value={false}
                                      />
                                      <label htmlFor="gender2">Female</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="single-input-item">
                                <button className="check-btn" type="submit">
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

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile
});

export default connect(mapStateToProps)(Profile);
