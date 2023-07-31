import React, { useEffect, useState } from 'react'
import home from "./home.svg";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink,useNavigate,useParams } from 'react-router-dom';
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
    const { id } = useParams();
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

    const navigate = useNavigate();


    useEffect(()=>{
        total();
    },[total])

    return (
        <>
            <Navbar sticky='top' style={{ height: "60px", backgroundColor: 'white' }}>
            {/* #e48f0f */}
                <Container>
                    <NavLink to={`/user/${id}`} className="text-decoration-none text-light" >


                    <div className="nav-logo-container pad-4">
                        <img src={Logo2} alt="" />
                        <p>Dine<span style={{color:"#484848"}}>Hub</span></p>
                    </div>

                    {/* <div className="nav-logo-container pad-4" >
                      <img src={Logo2} alt=""/>
                      <p style={{color:'#e48f0f'}}>Dine Hub</p>
                    </div> */}

                    {/* <div className="nav-logo-container">
                        <img src={Logo} alt="" />
                    </div> */}
                    
                    </NavLink>
                    
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <NavLink to={`/user/${id}`} className="text-decoration-none">
                          <img src={home} alt=''/>
                          {/* <i className="bi bi-house-check-fill"  style={{fontSize:25, cursor: "pointer"}}>Hello</i> */}
                          </NavLink>
                        <i className="fa-solid fa-cart-shopping" style={{ fontSize: 25, cursor: "pointer", color:"#e48f0f", paddingLeft:'20px', paddingRight:'10px' }}></i>
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
                                                        <NavLink to={`/cart/${id}/${e.id}`}   onClick={handleClose}>
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
