import React, { useState, useEffect, createContext, useContext } from 'react'
import { ProductInfo } from '../interfaces/global_interfaces'


type StateType = {
    qty: number;
    setQty:  React.Dispatch<React.SetStateAction<number>>;
    increaseQty(): void;
    decreaseQty(): void;
    cartItems: ProductInfo[];
    setCartItems:  React.Dispatch<React.SetStateAction<ProductInfo[]>>;
    addToCart: (product: ProductInfo, quantity: number) => void;
    showCart: boolean;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>; 
    displayCart(): void;
    
 }


const Context = createContext<StateType>({} as StateType)

const CartContext = ({children} : any) => {
    let cartInfo
    const [qty, setQty] = useState(1)
    const [cartItems, setCartItems] = useState<ProductInfo[]>([])
    const [showCart, setShowCart] = useState(false)
    // Quantity
    const increaseQty = () => {
        setQty(prev => prev + 1)
    }

    const decreaseQty = () => {
        setQty(prev => prev - 1 < 1 ? 1 : prev - 1)
    }

    // Cart
    const addToCart = (product: ProductInfo, quantity: number) => {

        if(!cartItems.find((item) => item._id === product._id)) {
            setCartItems([...cartItems, {...product, quantity: quantity}])
        } else {
            const newCartItems =  cartItems.map((item) => {
                if(item._id === product._id) {
                    return  {...item, quantity: item?.quantity! + quantity}
                } else return item
            })

            setCartItems(newCartItems)
            // localStorage.setItem('cartItems', JSON.stringify(cartItems))

        }
        console.log(cartItems)
    }

    const displayCart = () => setShowCart(prev => !prev)
    

  return (
    <Context.Provider value={{
        qty,
        setQty,
        increaseQty,
        decreaseQty,
        cartItems,
        setCartItems,
        addToCart,
        showCart,
        setShowCart,
        displayCart,
    }}>
        {children}
    </Context.Provider>
  )
}

export default CartContext

export const useCartContext = () => useContext(Context)