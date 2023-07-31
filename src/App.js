//import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/OrderPage/Header';
import CardsDetails from './components/OrderPage/CardsDetails';
import Cards from './components/OrderPage/Cards';
import {Routes,Route,useNavigate} from "react-router-dom"
import HomePage from './HomePage'
import User from './components/userPage/user';
import Login from './components/loginPage/login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path="/user/:id" element={<HomePage />} />
        <Route path='/resturent/:id' element={<Cards />}/>
        <Route path='/cart/:id/:Id' element={<CardsDetails />}/>
      </Routes>
    </>
  );
}

export default App;
