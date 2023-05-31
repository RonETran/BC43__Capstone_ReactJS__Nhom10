import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Register = (props) => {
  return (
    <div>
      <div className='register-carousel bg-page'>
        <div className='container p-140 text-center'>
          <h2 className='text-white fs-58 fw-4 mb-3'>REGISTER</h2>
          <p className='fs-24'><NavLink to="/home" className="text-white text-hover">HOME</NavLink><span className='text-orange'> // REGISTER</span></p>
        </div>
      </div>

      <div className='p-register'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-8 m-auto'>
              <div className='register-title text-center'>
                <h2 className='title'>REGISTER</h2>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <div className='register-form'>
                <form action="#">
                  <div className='row'>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label htmlFor="email">
                          Email
                          <span className='required'> *</span>
                        </label>
                        <input type="email" className='form-control' id='email'/>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label htmlFor="name">
                          Name
                          <span className='required'> *</span>
                        </label>
                        <input type="text" className='form-control' id='name'/>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label htmlFor="password">
                          Password
                          <span className='required'> *</span>
                        </label>
                        <input type="password" className='form-control' id='password'/>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label htmlFor="phoneNumber">
                          Phone number
                          <span className='required'> *</span>
                        </label>
                        <input type="text" className='form-control' id='phoneNumber'/>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label htmlFor="confirm">
                          Password confirm
                          <span className='required'> *</span>
                        </label>
                        <input type="password" className='form-control' id='confirm'/>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <p>Gender</p>
                        <div className='h-gender'>
                          <input type="radio" className='form-check-input cus-check-input' name='gender' id='gender1' value={true}/>
                          <label htmlFor="gender1" className='me-4'>Male</label>
                          <input type="radio" className='form-check-input cus-check-input' name='gender' id='gender2' value={false}/>
                          <label htmlFor="gender2">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-group'>
                        <button className='btn-sub'>Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Register)