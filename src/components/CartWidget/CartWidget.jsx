import cart from './assets/cart.svg'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

const CartWidget = () => {
    const { itemCount } = useCart()

    return(
        <>
        {itemCount <= 0 ? <span>0</span> : <span className="itemCount">{itemCount}</span>}
        <Link to={`/cart/items`}><img src={cart} style={{width : 20}} alt="cart-widget" className="cart"/></Link>
        </>
        
    )
}

export default CartWidget