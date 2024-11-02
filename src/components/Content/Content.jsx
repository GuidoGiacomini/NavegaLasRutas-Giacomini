import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../config/firebase'
import './Content.css'

const Content = ({ selectedCategory }) =>{
    
    const [wines, setWines] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchWinesFromFirebase = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const winesData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setWines(winesData)
        } catch (error) {
            console.error("Error fetching wines: ", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchWinesFromFirebase()
    }, [])

    const filteredWines = selectedCategory
        ? wines.filter((wine) => wine.category === selectedCategory)
        : wines


    return(
    <>

        <ul className="content">

            {filteredWines.length === 0 ? 
            
            (<p style={{fontSize : '40px', color : 'white'}}>Collecting bottles...</p>) 
            
            : 
            
            filteredWines.map((wine) => (

                <div className="wineItem" key={wine.id}>
                    <p className="wineTitle">{wine.name}</p>
                    <p className="wineDesc">Description: {wine.desc}</p>
                    <p className="winePrice">${wine.price}</p>
                    <p className="wineStock">Stock: {wine.stock}</p>
                    <Link to={`/wine/${wine.id}`} className="cartBtn">See more</Link>
                </div>
            ))}
        </ul>
    </>)
}

export default Content