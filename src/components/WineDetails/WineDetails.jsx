import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './WineDetails.css'

const wines = [
    {
        id: 1,
        name: "Cabernet Sauvignon",
        price: 29.99,
        stock: 120,
        description: "A full-bodied red wine with dark fruit flavors and savory tastes from black pepper to bell pepper.",
        category: "red"
    },
    {
        id: 2,
        name: "Chardonnay",
        price: 19.99,
        stock: 200,
        description: "A popular white wine with flavors ranging from apple and lemon to tropical fruit and even buttery notes.",
        category: "white"
    },
    {
        id: 3,
        name: "Pinot Noir",
        price: 34.99,
        stock: 150,
        description: "A light-bodied red wine with flavors of red fruits like cherries, strawberries, and raspberries.",
        category: "red"
    },
    {
        id: 4,
        name: "Sauvignon Blanc",
        price: 22.99,
        stock: 180,
        description: "A white wine known for its crisp, dry, and aromatic qualities with flavors of green apple, lime, and passion fruit.",
        category: "white"
    },
    {
        id: 5,
        name: "Merlot",
        price: 24.99,
        stock: 170,
        description: "A smooth, medium-bodied red wine with flavors of black cherry, plum, and chocolate.",
        category: "red"
    },
    {
        id: 6,
        name: "Riesling",
        price: 17.99,
        stock: 140,
        description: "A white wine that can range from sweet to dry with flavors of green apple, apricot, and honey.",
        category: "white"
    },
    {
        id: 7,
        name: "Zinfandel",
        price: 26.99,
        stock: 110,
        description: "A bold red wine with flavors of blackberry, raspberry, and pepper, often with a smoky finish.",
        category: "red"
    },
    {
        id: 8,
        name: "Syrah",
        price: 31.99,
        stock: 90,
        description: "A full-bodied red wine with flavors of dark fruit, chocolate, and black pepper.",
        category: "red"
    },
    {
        id: 9,
        name: "Moscato",
        price: 15.99,
        stock: 220,
        description: "A sweet white wine with flavors of peach, apricot, and citrus.",
        category: "dessert"
    },
    {
        id: 10,
        name: "Malbec",
        price: 27.99,
        stock: 160,
        description: "A robust red wine with flavors of dark fruit, cocoa, and a hint of spice.",
        category: "red"
    },
    {
        id: 11,
        name: "Rosé",
        price: 18.99,
        stock: 210,
        description: "A pink wine with flavors ranging from red fruit and citrus to floral and melon.",
        category: "rose"
    },
    {
        id: 12,
        name: "Champagne",
        price: 49.99,
        stock: 80,
        description: "A sparkling wine with flavors of apple, pear, citrus, and almond.",
        category: "sparkling"
    },
    {
        id: 13,
        name: "Pinot Grigio",
        price: 20.99,
        stock: 130,
        description: "A light and crisp white wine with flavors of green apple, pear, and lemon.",
        category: "white"
    },
    {
        id: 14,
        name: "Sangiovese",
        price: 28.99,
        stock: 100,
        description: "An Italian red wine with flavors of cherry, plum, and spice.",
        category: "red"
    },
    {
        id: 15,
        name: "Barbera",
        price: 25.99,
        stock: 90,
        description: "A red wine with flavors of red cherry, plum, and a hint of vanilla.",
        category: "red"
    },
    {
        id: 16,
        name: "Gewürztraminer",
        price: 23.99,
        stock: 85,
        description: "A white wine known for its aromatic qualities with flavors of lychee, rose, and ginger.",
        category: "white"
    },
    {
        id: 17,
        name: "Tempranillo",
        price: 29.99,
        stock: 75,
        description: "A Spanish red wine with flavors of cherry, dried fig, and cedar.",
        category: "red"
    },
    {
        id: 18,
        name: "Grenache",
        price: 24.99,
        stock: 95,
        description: "A red wine with flavors of strawberry, black cherry, and anise.",
        category: "red"
    },
    {
        id: 19,
        name: "Viognier",
        price: 21.99,
        stock: 110,
        description: "A white wine with flavors of peach, tangerine, and honeysuckle.",
        category: "white"
    },
    {
        id: 20,
        name: "Petite Sirah",
        price: 32.99,
        stock: 70,
        description: "A full-bodied red wine with flavors of blackberry, plum, and black pepper.",
        category: "red"
    }
] 

const WineDetails = ({ addToCart }) => {
    const [quantity, setQuantity] = useState(1)
    const { wineId } = useParams()
    const [wine, setWine] = useState(null)
  
    useEffect(() => {
      const selectedWine = wines.find((wine) => wine.id === parseInt(wineId))
      setWine(selectedWine)
    }, [wineId])
  
    if (!wine) {
      return <p>Loading...</p>
    }

    return (

    <div className='detailsContainer'>

        <div className='wineCard'>
            <h1 className='wineName'>{wine.name}</h1>
            <p className='wineDesc'>{wine.description}</p>
            <p className='winePrice' >Price: ${wine.price}</p>
            <p className='wineStock' >Stock: {wine.stock}</p>
             <div className='quantitySelector'>
                <button className='adjustQuantity' onClick={() => setQuantity(prev => prev - 1)} disabled={quantity <= 1}> - </button>
                    <span className='itemQuantity'>{quantity}</span>
                <button className='adjustQuantity' onClick={() => setQuantity(prev => prev + 1)} disabled={quantity >= 5}> + </button>
            </div>

            <button className='addItemCart' onClick={() => addToCart(quantity)} >Add {quantity} to Cart</button>
            
        </div>
    </div>
    
  )
}


export default WineDetails