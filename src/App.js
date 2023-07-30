//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/OrderPage/Header';
import CardsDetails from './components/OrderPage/CardsDetails';
import Cards from './components/OrderPage/Cards';
import {Routes,Route} from "react-router-dom"
import HomePage from './HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/restaurant' element={<Cards />}/>
        <Route path='/cart/:id' element={<CardsDetails />}/>
      </Routes>
    </>
  );
}

export default App;
