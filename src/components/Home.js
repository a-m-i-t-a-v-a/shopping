import React from 'react'
import { CartState } from '../context/Context'
import SingleProducts from './SingleProducts'
import './styles.css'
import Sidebar from './Sidebar'

const Home = () => {

  const {state:{products}}=CartState()
  console.log(products)

  return (
    <div className='home'>
      <Sidebar/>
      <div className='productContainer'>
        {products.map((prod)=>{
            return (
                <SingleProducts prod={prod} key={prod.id}/>
            )
        })}
      </div>
    </div>
  )
}

export default Home
