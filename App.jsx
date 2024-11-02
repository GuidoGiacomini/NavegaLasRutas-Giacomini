import { useState } from "react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import "./App.css"
import { CartProvider } from "./src/contexts/CartContext";
import WineDetails from "./src/components/WineDetails/WineDetails"
import ItemsContainer from "./src/components/ItemsContainer/ItemsContainer"
import Layout from "./src/components/Layout/Layout"
import Cart from "./src/components/CartWidget/Cart"

const greetingFiller = "Descubrí nuestra exclusiva selección de 20 vinos únicos, elegidos para vos."

function App() {

    const [selectedCategory, setSelectedCategory] = useState(null)
    
    const [cartItems, setCartItems] = useState([])

    const addToCart = (wine, quantity) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === wine.id)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === wine.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            } else {
                return [...prevItems, { ...wine, quantity }]
            }
        })
    }


    return(
        <>
        <CartProvider>
            <Layout setSelectedCategory={setSelectedCategory} >
                <Routes> 
                    <Route path="/" element={<ItemsContainer selectedCategory={selectedCategory} placeholder={"Search wines..."} greeting={"¡Bienvenido!"} greetingFiller={`${greetingFiller}`} />} />
                    <Route path="/wine/:wineId" element={<WineDetails addToCart={addToCart} />} />
                    <Route path="/cart/items" element={<Cart cartItems={cartItems} />} />
                    <Route path="*" element={<h1 style={{ display: 'flex', alignItems: 'center', justifyContent : 'center' }}>Not Found</h1>} />
                </Routes>
            </Layout>
        </CartProvider>
        </>
    )
}

export default App