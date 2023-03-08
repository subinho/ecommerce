import React, { useState, createContext, useContext } from 'react'

type StateType = {
    qty: number;
    setQty:  React.Dispatch<React.SetStateAction<number>>;
    increaseQty: () => void;
    decreaseQty: () => void;
    
    
}

const Context = createContext<StateType>({} as StateType)

const CartContext = ({children} : any) => {
    const [qty, setQty] = useState(1)

    const increaseQty = () => {
        setQty(prev => prev + 1)
    }

    const decreaseQty = () => {
        setQty(prev => prev - 1 < 1 ? 1 : prev - 1)
    }

  return (
    <Context.Provider value={{
        qty,
        setQty,
        increaseQty,
        decreaseQty
    }}>
        {children}
    </Context.Provider>
  )
}

export default CartContext

export const useCartContext = () => useContext(Context)