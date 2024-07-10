import React from 'react'
import { CartState } from '../context/Context'
import { ListGroup } from 'react-bootstrap'

const ShoppingCart = () => {
  const {state:{cart},dispatch}=CartState()

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
            {cart.map(prod=>(
                <span>{prod.title}</span>
            ))}
        </ListGroup>
      </div>
    </div>
  )
}

export default ShoppingCart
