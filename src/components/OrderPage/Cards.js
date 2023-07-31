import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../../redux/actions/action';
import handleClose from './Header';
import { NavLink, useNavigate } from 'react-router-dom';
import Banner from "./banner.png";
import { Padding } from '@mui/icons-material';
import Header from './Header' 
import { useEffect } from 'react';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(data);


  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.name)
        navigate('/login')
  }, [navigate]);

  

  return (
    <>
    <Header />
    <div className='container mt-3'>
      <div className="row d-flex justify-content-center align-items-center"  >
        <img style={{height:'30rem', paddingBottom:'30px'}} src={Banner} alt="" />
      </div>
      <h2 className='text-center'>Food for FOODIES!</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
                
              </>
            )
          })
        }

      </div>
    </div>
    </>
  )
}

export default Cards