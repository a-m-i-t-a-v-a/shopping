import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../context/Context'

const SingleProducts = ({prod}) => {

  const {state:{cart},dispatch}=CartState()

  return (
    <div className='products'>
       <Card>
          <Card.Img variant="top" src={prod.thumbnail} alt={prod.title}/>
          <Card.Body>
             <Card.Title>{prod.title}</Card.Title>
             <Card.Subtitle style={{paddingBottom:10}}>
                <span>$ {prod.price}</span>
                {prod.rating > 4.5 ? (
                    <div>Top Quality</div>
                ):(
                    <div>Good quality</div>
                )}
                <Rating rating={prod.rating}/>
             </Card.Subtitle>
             {cart.some(p=>p.id===prod.id) ? (
                <Button variant="danger"  
                    onClick={()=>{
                        dispatch({
                            type:'remove_from_cart',
                            payload:prod
                        })
                }}>Remove from cart</Button>
             ):(
                <Button onClick={()=>{
                    dispatch({
                        type:'add_to_cart',
                        payload:prod
                    })
                }}>Add to Cart</Button>
             )}
          </Card.Body>
       </Card>
    </div>
  )
}

export default SingleProducts
