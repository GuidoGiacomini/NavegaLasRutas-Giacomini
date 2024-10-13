import cart from './assets/cart.svg'

const CartWidget = (props) => {
    return(
        <>
        <span>{props.counter}</span>
        <img src={cart} style={{width : 20}} alt="cart-widget" className="cart"/>
        </>
        
    )
}

export default CartWidget