import React, { useEffect, useRef, FormEvent } from 'react'
import { ProductInfo } from '../interfaces/global_interfaces'
import { useCartContext } from '@/context/CartContext'
import Link from 'next/link'
import { TiMinus, TiPlus, TiTrash } from 'react-icons/ti'
import { CgClose } from 'react-icons/cg'

const Cart = () => {
    let { cartItems, setCartItems, showCart, setShowCart , removeFromCart, deleteFromCart, addToCart, displayCart } = useCartContext()
    let cartRef = useRef<HTMLDivElement>(null)

    const closeCart = () => {
      setShowCart(false)
    }

    useEffect(() => {
     const handleClick = (e: any) => {
      if(!cartRef.current?.contains(e.target)) {
        setShowCart(false)
      }
      
    }
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
     } 
    })
  return (
    <>
      {showCart && 
        <div className='w-1/2 h-5/6 bg-white shadow-2xl z-20 fixed right-0 top-[60px] lg:w-80 px-4 py-6 max-sm:h-screen' ref={cartRef}>
          <button type='button' className='absolute top-3 left-3 pointer' onClick={closeCart}><CgClose size={20}/></button>
        {cartItems.map((item) => (
                    <div key={item._id} className='p-3 border-black border-b-2 rounded-sm mb-4 flex justify-between relative'>
                     <div className='flex flex-col'>
                        <h2 className='font-medium sm:text-base text-sm mb-2'>{item.name}</h2>
                        <div className='flex gap-2 items-center' >
                          <button
                          onClick={() => removeFromCart(item)}
                          className='bg-green-400 p-1 rounded-md text-white'
                          ><TiMinus /></button>
                          <span>{item.quantity}</span>
                          <button
                          onClick={() => addToCart(item, 1)}
                          className='bg-green-400 p-1 rounded-md text-white'
                          ><TiPlus /></button>
                          </div>
                     </div>
                     <div className='relative'>
                      <span>${item.price * item.quantity!}</span>
                     </div>
                      <button type='button' onClick={() => deleteFromCart(item)} className='absolute bottom-2 right-2 text-red-600'><TiTrash size={25}/></button>
                 </div>
             ))}
             <Link href='/checkout' className='absolute bottom-3' onClick={closeCart}>Checkout</Link>
             {/* <button className='absolute bottom-3'>Checkout</button> */}
        </div> 
      }
    </>
  )
}

export default Cart