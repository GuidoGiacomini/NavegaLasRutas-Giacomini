import { useState } from "react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import "./App.css"
import WineDetails from "./src/components/WineDetails/WineDetails"
import ItemsContainer from "./src/components/ItemsContainer/ItemsContainer"
import Layout from "./src/components/Layout/Layout"

const greetingFiller = "Descubrí nuestra exclusiva selección de 20 vinos únicos, elegidos para vos."

function App() {

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [cartCount, setCartCount] = useState(0)

    const addToCart = (quantity) => {
        setCartCount(prevCount => prevCount + quantity)
    }

    return(
        <>
            <Layout setSelectedCategory={setSelectedCategory} cartCount={cartCount} >
                <Routes> 
                    <Route path="/" element={<ItemsContainer selectedCategory={selectedCategory} placeholder={"Search wines..."} greeting={"¡Bienvenido!"} greetingFiller={`${greetingFiller}`} />} />
                    <Route path="/wine/:wineId" element={<WineDetails addToCart={addToCart} />} />
                    <Route path="*" element={<h1 style={{ display: 'flex', alignItems: 'center', justifyContent : 'center' }}>Not Found</h1>} />
                </Routes>
            </Layout>
        </>
    )
}

export default App