import React, { useState, createContext, useContext } from 'react'

type StateType = {
    qty: number;
    setQty:  React.Dispatch<React.SetStateAction<number>>;
    
    
}

const Context = createContext<StateType>({} as StateType)

const CartContext = ({children} : any) => {
    const [qty, setQty] = useState(1)

  return (
    <Context.Provider value={{
        qty,
        setQty
    }}>
        {children}
    </Context.Provider>
  )
}

export default CartContext

export const useCartContext = () => useContext(Context)