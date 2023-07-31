import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../../redux/actions/action';
import img1 from '../OrderPage/Brown White Colorful Brush Stroke Illustration Travel Vlog Youtube Thumbnail.png'
import img2 from '../OrderPage/2.png'
import img3 from '../OrderPage/3.png'
import handleClose from './Header';
import { NavLink, useNavigate } from 'react-router-dom';
import Banner from "./banner.png";
import { Padding } from '@mui/icons-material';
import Header from './Header' ;
import {
  MDBCarousel,
  MDBCarouselItem
} from 'mdb-react-ui-kit';

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
    <MDBCarousel showControls showIndicators fade style={{zIndex: -1}}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={img2}
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem 
        className='w-100 d-block'
        itemId={2}
        src={img1}
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={img3}
        alt='...'
      >
      </MDBCarouselItem>
    </MDBCarousel>
      <h2 className='text-center' style={{marginTop:'3rem'}} >Food for FOODIES!</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style" key={element.id}>
                
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

export default Cards;