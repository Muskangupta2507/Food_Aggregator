/*import React,{ useEffect,useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action'; 

const Header = () => {

  const [price,setPrice] = useState(0);

  const getdata = useSelector((state)=> state.cartreducer.carts);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


const dlt = (id)=>{
    dispatch(DLT(id))
}


const total = ()=>{
    let price = 0;
    getdata.map((ele,k)=>{
        price = ele.price * ele.qnty + price
    });
    setPrice(price);
};

useEffect(()=>{
    total();
},[total])
  return (
    <> 
    <Navbar bg="dark" variant="dark" style={{height:"70px"}}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-5"><h1 style={{fontStyle:'italic'}}>Welcome to EatSure</h1></NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">   Home  </NavLink>
          </Nav>
          <Badge badgeContent={getdata.length} color="primary" id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
          >
      
          <i class="fa-solid fa-cart-shopping text-light" style={{fontSize:25}}></i>
          </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getdata.length?
          <div className='card_details' style={{width:"24rem",padding:10}}>
            <Table>
              <thead>
                <th>Photo</th>
                <th>Restaurant Name</th>
                <tbody>
                  {
                    getdata.map((e)=>{
                      return (
                        <>
                           <tr>
                              <td>
                                <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                <img src={e.imgdata} style={{width:"5rem", height:"5rem"}} alt="" />
                                </NavLink>
                              </td>
                           </tr>
                           <tr><p>{e.rname}</p>
                                <p>Price : ₹{e.price}</p>
                                <p>Quantity : {e.qnty}</p>
                                <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                   <i className='fas fa-trash smalltrash'></i>
                                </p>

                           </tr>
                           <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                             <i className='fas fa-trash largetrash'></i>
                           </td>
                        </>
                      )
                    })
                  }
                  <p className='text-center'>Total :₹ {price}</p>
                </tbody>
              </thead>
            </Table>
          </div>:
          <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
          <i className='fas fa-close smallclose'
          onClick={handleClose}
           style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
          <p style={{fontSize:22}}>Your carts is empty</p>
          <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
          </div>
        }
        
      </Menu>
      </Navbar>
    </>
  )
}

export default Header*/

import React, { useEffect, useState } from 'react'
import Logo from "./Logo.svg";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT, REMOVE } from '../../redux/actions/action';
import Button from 'react-bootstrap/Button'
import '../../App.css'
import Logo2 from "../../Assets/dine_logo1.png";

const Header = () => {

    const [price,setPrice] = useState(0);
    // console.log(price);

        const getdata = useSelector((state)=> state.cartreducer.carts);
        // console.log(getdata);

        const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id)=>{
        dispatch(DLT(id))
    }

    const remove = (item)=>{
      for(var i=item.qnty; i>1; i--){
        dispatch(REMOVE(item));
      }
      dispatch(DLT(item.id));
      
    }
    


    const total = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])

    return (
        <>
            <Navbar sticky='top' style={{ height: "60px", backgroundColor: '#e48f0f' }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light" >
                    <div className="nav-logo-container pad-4">
                      <img src={Logo2} alt="" />
                      <p style={{color:'white'}}>Dine Hub</p>
                    </div>

                    {/* <div className="nav-logo-container">
                        <img src={Logo} alt="" />
                    </div> */}
                    
                    </NavLink>
                    <container2>
                    {/* <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light" style={{fontSize:'25px', paddingLeft:'30px'}}>Home</NavLink>
                    </Nav> */}
                    <NavLink to="/"> <i class="fa-solid fa-home text-light" style={{ fontSize: 25, cursor: "pointer" }}></i></NavLink>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                   </container2>
                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Item Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>{remove(e)}}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>remove(e)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <td>
                                    <p className='text-center'>Total :₹ {price}</p>
                                    </td>
                                    <td className="button_div d-flex justify-content-center"><Button className='col-lg-8' style={{backgroundColor:'#FC7710', color:'white', border:'none'}}>Pay Now</Button></td>
                                    
                                </tbody>
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your cart is empty</p>
                    <img src="src\components\cart.jpg" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
                    }

                </Menu>
            </Navbar>
        </>
    )
}

export default Header
