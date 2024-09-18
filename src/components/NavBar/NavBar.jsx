import CartWidget from '../CartWidget/CartWidget'
import wineBottle from './assets/wine-bottle.svg'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <div>
                <img src={wineBottle} style={{width : 20}} alt="wine-bottle-widget" className="logo" />
            </div>
            
            <div className="btnsContainer">
                <button className="navBtns">Red</button>
                <button className="navBtns">White</button>
                <button className="navBtns">Rosé</button>
                <button className="navBtns">Sparkling</button>
                <button className="navBtns">Dessert</button>
            </div>
            <div>
                <CartWidget counter={0} />
            </div>
            
        </nav>
    )

}

export default NavBar