import cart from './assets/cart.svg'

const CartWidget = (props) => {
    return(
        <>
        <img src={cart} style={{width : 20}} alt="cart-widget" className="cart"/>
        {props.counter}
        </>
        
    )
}

export default CartWidget