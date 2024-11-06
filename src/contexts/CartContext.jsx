import { useState } from 'react'
import { createContext, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (wine, quantity) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === wine.id)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === wine.id ? { ...item, quantity: item.quantity + quantity } : item)
            }else{
                return [...prevItems, { ...wine, quantity }]
            }
        })
    }

    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

    return (
        <CartContext.Provider value={{ cartItems, addToCart, itemCount }}>
            {children}
        </CartContext.Provider>
    )
}