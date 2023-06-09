import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';

import { Provider } from 'react-redux';
import { store } from './Redux/configStore';

import {unstable_HistoryRouter as HistoryRouter ,Routes,Route, Navigate} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Search from './Pages/Search/Search';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Cart from './Pages/Cart/Cart';
import Profile from './Pages/Profile/Profile';

export const history = createBrowserHistory();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate/>}>
          <Route index element={<Home/>}></Route>
            <Route path='detail'>
              <Route path=':id' element={<Detail/>}></Route>
            </Route>
            <Route path='search' element={<Search/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='register' element={<Register/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='*' element={<Navigate to="/"/>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);


