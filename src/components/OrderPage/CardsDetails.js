import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT,ADD,REMOVE } from '../../redux/actions/action'
import Header from './Header'


const CardsDetails = () => {

  const [data,setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
};
  // console.log(data);

  const {Id} = useParams();
  const {id} = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const rem = (item)=>{
    for(var i=item.qnty; i>1; i--){
      dispatch(REMOVE(item));
    }
    dispatch(DLT(item.id));
    
  }

  
  const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);


  const compare = ()=>{
    let comparedata = getdata.filter((e)=>{
      return e.id == Id
    });
    setData(comparedata);
  }

  // add data
  

  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }
  
  const dlt = (Id, id)=>{
    dispatch(DLT(Id));
    history(`/resturent/${id}`);
}

// remove one
const remove = (item)=>{
  dispatch(REMOVE(item))
}


  useEffect(()=>{
    compare();
  },[Id])

  return (
    <>
      <Header />
      <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails" style={{backgroundColor:'white'}}>
          {
            data.map((ele)=>{
              return (
                <>
                <div className="items_img" style={{padding:'10px'}}>
              <img src={ele.imgdata} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                    <p> <strong>Price</strong>  : ₹{ele.price}</p>
                    <p> <strong>Dishes</strong>  : {ele.address}</p>
                    <p> <strong>Total</strong>  :₹  {ele.price * ele.qnty}</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id, id) : ()=>remove(ele)}>-</span>
                    <span style={{fontSize:22}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={()=>dlt(ele.id, id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
                  <td>
                  <NavLink to={`/resturent/${id}`} className="text-decoration-none">
                  <i className='fas fa-close smallclose'
                     style={{fontSize:23,cursor:"pointer", color:'black', top:-140, left:-10, position:'relative'}}></i>
                  </NavLink>
                  
                  </td>
                </tr>
              </Table>
            </div>
          
                </>
              )
            })
          }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails
