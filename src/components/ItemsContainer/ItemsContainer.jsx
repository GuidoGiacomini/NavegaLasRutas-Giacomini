import { useEffect, useState } from 'react'
import './ItemsContainer.css'
import closeIcon from './assets/circle-xmark.svg'
import searchIcon from './assets/magnifying-glass.svg'
import Content from '../Content/Content'

const ItemsContainer = (props) =>{

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(false)
        
        const timer = setTimeout(() => {
            setIsVisible(true)
            
        }, 100)

        return () => clearTimeout(timer)
    }, [])
    

    return(
        <div className='containerContent'>
            <div className='searchBar'>
                <img src={searchIcon} alt="search-icon" style={{width : 20}} />
                <input type="text" placeholder={props.placeholder} className="searchWines" />
                <img src={closeIcon} alt="close-icon" style={{width : 20}} className='closeSearch'/>
            </div>
                <div className='greeting'><div>{props.greeting}</div>
                <div className={`greetingFiller ${isVisible ? 'visible' : ''}`}>{props.greetingFiller}</div> 
            </div>
            
            <div className='content'><Content selectedCategory={props.selectedCategory} /></div>
        </div>
        
    )
}

export default ItemsContainer