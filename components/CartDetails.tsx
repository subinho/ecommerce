import React from 'react'
import { useCartContext } from '@/context/CartContext'

const CartDetails = () => {
    const { cartItems } = useCartContext()
  return (
    <div className='md:order-6 flex-cst md:w-1/3 mb-4'>
        <h4 className='text-xl font-medium'>Your Cart</h4>
        <ul className='flex flex-col border-2 border-gray-100 rounded py-2 mt-3'>
            {cartItems.map(item => (
                <li key={item._id} className='leading-5 flex justify-between py-2 px-4 m-4 border-b-2'>
                    <div>
                        <h5>{item.name}</h5>
                        <small className='text-gray-300'>Quantity: {item.quantity}</small>
                    </div>

                    <span className='text-gray-300'>${item.price * item.quantity!}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}


export default CartDetails