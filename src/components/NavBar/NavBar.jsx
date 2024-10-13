import CartWidget from '../CartWidget/CartWidget'
import wineBottle from './assets/wine-bottle.svg'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = ({ setSelectedCategory, cartCount }) => {
    return (
        <nav>
            <div>
                <Link to={'/'} className='homeLink' ><img src={wineBottle} style={{width : 20}} alt="wine-bottle-widget" className="logo" />Home</Link> 
            </div>
            
            <div className="btnsContainer">
                <button className="navBtns" onClick={() => setSelectedCategory("red")} >Red</button>
                <button className="navBtns" onClick={() => setSelectedCategory("white")} >White</button>
                <button className="navBtns" onClick={() => setSelectedCategory("rose")} >Rosé</button>
                <button className="navBtns" onClick={() => setSelectedCategory("sparkling")} >Sparkling</button>
                <button className="navBtns" onClick={() => setSelectedCategory("dessert")} >Dessert</button>
            </div>
            <div>
                <CartWidget counter={cartCount} />
            </div>
            
        </nav>
    )

}

export default NavBar