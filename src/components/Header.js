import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';

const Header = () => {
  const {
    state:{cart},
    dispatch
    }=CartState()
  return (
    <Navbar bg="dark" variant="dark" style={{height:80}}> 
       <Container>
          <Navbar.Brand>
             <Link to='/'>Shopping cart</Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
             <FormControl 
                style={{ width:500 }}
                placeholder='Search a product'
                className='m-auto'
            />
          </Navbar.Text>
          <Nav>
            <Dropdown>
                <Dropdown.Toggle variant='success'>
                    <AiOutlineShoppingCart color='white' fontSize="25px"/>
                    <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth:370}}>
                    {cart.length>0 ? (
                        <>
                        {cart.map((prod)=>(
                          <span className='cartItem' key={prod.id}>
                            <img src={prod.thumbnail} className='cartItemImg' alt={prod.title}/>
                            <div className='cartItemDetail'>
                                <span>{prod.title}</span>
                                <span>${prod.price}</span>
                            </div>
                            <AiFillDelete
                                fontSize="20px"
                                style={{cursor:"pointer"}}
                                onClick={()=>dispatch({
                                    type:"remove_from_cart",
                                    payload:prod
                                })}
                            />
                          </span>  
                        ))}
                          <Link to='/cart'>
                            <Button style={{width:"95%",margin:"0 10px"}}>
                                Go to cart
                            </Button>
                          </Link>
                        </>
                    ):(
                    <span style={{padding:10}}>Cart is empty</span>
                 )}
                </Dropdown.Menu>
            </Dropdown>
          </Nav>
       </Container>
    </Navbar>
  )
}

export default Header

