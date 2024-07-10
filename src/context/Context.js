import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { cartReducer } from './Reducers'

const Cart=createContext()
const Context = ({children}) => {

    const [state,dispatch]=useReducer(cartReducer,{
        products:[],
        cart:[]
    })
    //console.log(products)
    const fetchData=async()=>{
        const data=await fetch('https://dummyjson.com/products')
        const jsonData=await data.json()
        dispatch({type:'set_products',payload:jsonData.products})
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <Cart.Provider value={{state,dispatch}}>
       {children}
    </Cart.Provider>
  )
}

export default Context
export const CartState=()=>{
    return useContext(Cart)
}