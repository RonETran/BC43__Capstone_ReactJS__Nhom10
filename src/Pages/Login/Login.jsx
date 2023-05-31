import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Login = (props) => {
  return (
    <div>
      <div className='login-carousel bg-page'>
        <div className='container p-140 text-center'>
          <h2 className='text-white fs-58 fw-4 mb-3'>LOGIN</h2>
          <p className='fs-24'><NavLink to="/home" className="text-white text-hover">HOME</NavLink><span className='text-orange'> // LOGIN</span></p>
        </div>
      </div>

      <div className='p-log'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-8 m-auto'>
              <div className='login-title text-center'>
                <h2 className='title'>Login</h2>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <div className='login-form'>
                <form action="#">
                  <div className='row'>
                    <div className='col-12'>
                      <div className='form-group'>
                        <label htmlFor="email">
                          Email address 
                          <span className='required'> *</span>
                        </label>
                        <input type="email" className='form-control' id='email'/>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-group'>
                        <label htmlFor="password">
                          Password 
                          <span className='required'> *</span>
                        </label>
                        <input type="password" className='form-control' id='password'/>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-group'>
                        <button className='btn-login'>Login</button>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group account-info-group mb-0">
                        <div className="rememberme-account">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label text-hover" for="defaultCheck1">Remember me</label>
                          </div>
                        </div>
                        <a className="lost-password text-hover" href="#/">Lost your password?</a>
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

export default connect(mapStateToProps)(Login)