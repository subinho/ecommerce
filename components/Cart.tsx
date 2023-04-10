import React, { useEffect } from 'react'
import { ProductInfo } from '../interfaces/global_interfaces'
import { useCartContext } from '@/context/CartContext'

const Cart = () => {
    // let cart: Product[] = []
    let { cartItems, setCartItems, showCart, removeFromCart, deleteFromCart, addToCart } = useCartContext()
    // useEffect(() => {
    //     // cartItems = JSON.parse(localStorage.getItem('cartItems') || '')
    //     setCartItems(JSON.parse(localStorage.getItem('cartItems') || ''))
    // }, [])
    console.log("cart")
    console.log(cartItems)
  return (
    <>
      {showCart && 
        <div className='absolute right-0 p-4 h-[80vh] w-[14vw] mt-4 rounded-l-md border-[1px] border-gray-100 shadow-md '>
        {cartItems.map((item) => (
                    <div key={item._id} className='p-3 border-black border-[1px] rounded-sm mb-4'>
                      <h2 className='border-b-2 border-black'>{item.name}</h2>
                     <div className='flex justify-between'>
                       <p
                       onClick={() => deleteFromCart(item)}
                       >x</p>
                       <div className='flex'>
                         <button
                         onClick={() => removeFromCart(item)}
                         >-</button>
                         <p>{item.quantity}</p>
                         <button
                         onClick={() => addToCart(item, 1)}
                         >+</button>
                       </div>
                     </div>
                     <span>${item.price * item.quantity!}</span>
                 </div>
             ))}
             <button className='absolute bottom-3'>Checkout</button>
        </div> 
      }
    </>
  )
}

export default Cart