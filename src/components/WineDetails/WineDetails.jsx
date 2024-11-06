import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import db from '../../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useCart } from '../../contexts/CartContext'
import './WineDetails.css'

const WineDetails = () => {
    const { wineId } = useParams()
    const [wine, setWine] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()

    useEffect(() => {
        const fetchWineDetails = async () => {
            try {
                const wineDoc = await getDoc(doc(db, 'products', wineId))
                if (wineDoc.exists()){
                    setWine({ id: wineDoc.id, ...wineDoc.data() })
                }else{
                    console.log('No product found')
                }
            }catch(error) {
                console.error("Error trying to fetch: ", error)
            }
        }

        fetchWineDetails()
    }, [wineId])

    if (!wine) {
        return (<p style={{display : 'flex', alignItems : 'center', justifyContent : 'center', fontSize : '40px', marginTop : '20vh'}}>Loading...</p>)
    }

    return (
        <div className='detailsContainer'>
            <div className='wineCard'>
                <h1 className='wineName'>{wine.name}</h1>
                <p className='wineDesc'>{wine.desc}</p>
                <p className='winePrice'>Price: ${wine.price}</p>
                <p className='wineStock'>Stock: {wine.stock}</p>
                <div className='quantitySelector'>
                    <button className='adjustQuantity' onClick={() => setQuantity(prev => Math.max(prev - 1, 1))} disabled={quantity <= 1}>-</button>
                    <span className='itemQuantity'>{quantity}</span>
                    <button className='adjustQuantity' onClick={() => setQuantity(prev => Math.min(prev + 1, wine.stock))}disabled={quantity >= wine.stock}>+</button>
                </div>
                    <button className='addItemCart' onClick={() => addToCart(wine, quantity)}> Add {quantity} to Cart </button>
            </div>
        </div>
    )
}

export default WineDetails
