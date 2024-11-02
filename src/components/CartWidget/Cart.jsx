// import './Cart.css'
import { useCart } from '../../contexts/CartContext'


const Cart = () => {

    const { cartItems } = useCart()
    const deliveryFee = 5

    const calculateSubtotal = (price, quantity) => price * quantity
    const total = cartItems.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity), 0)
    const grandTotal = total + deliveryFee

    return (
        <div className="cartContainer">
            <h2>Your Cart</h2>
            <div className="cartDetails">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="cartItem">
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p>Subtotal: ${calculateSubtotal(item.price, item.quantity).toFixed(2)}</p>
                        </div>
                    ))
                ) : (
                    <p>There's nothing here yet.</p>
                )}
            </div>
            <div className="cartSummary">
                <p>Subtotal: ${total.toFixed(2)}</p>
                <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
                <h3>Total: ${grandTotal.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart