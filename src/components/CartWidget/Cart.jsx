import { addDoc, collection } from 'firebase/firestore'
import db from '../../config/firebase'
import { useCart } from '../../contexts/CartContext'
import './Cart.css'

const Cart = () => {
    const { cartItems } = useCart()
    const deliveryFee = 5
    const calculateSubtotal = (price, quantity) => price * quantity
    const total = cartItems.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity), 0)
    const grandTotal = total + deliveryFee

    const handlePurchaseCompletion = async (cartItems, totalAmount) => {
        try {
        const orderData = {
            items: cartItems.map(item => ({
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
              subtotal: item.quantity * item.price
            })),
            totalAmount
        }
          const orderRef = await addDoc(collection(db, 'orders'), orderData)
          const orderId = orderRef.id

          alert(`Thanks for placing your order! Use purchase ID: ${orderId} to track your order.`)
        } catch (error) {
          console.error(error)
        }
      }

    return (
        <div className="cartContainer">
            <div>
            <h2 style={{marginLeft : '-5vw', color : 'rgb(116, 205, 240)', textDecoration : 'underline'}}>Purchase Details</h2>
            <div className="cartDetails">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="cartItem">
                            <h3 style={{color : 'rgb(116, 205, 240)'}}>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p style={{marginLeft : '10vw', backgroundColor : 'rgb(116, 205, 240)', color: 'white', borderRadius : '10px', padding : '5px 10px'}}
                            >Subtotal: ${calculateSubtotal(item.price, item.quantity).toFixed(2)}</p>
                        </div>
                    ))) : 
                            (<p style={{fontSize : '20px', marginTop : '25vh', textDecoration : 'underline'}}>Nothing here… yet! Let's get shopping!</p>)}
            </div>
            </div>

            <div className="cartSummary">
                <p>Subtotal: ${total.toFixed(2)}</p>
                <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
                <h3>Total: ${grandTotal.toFixed(2)}</h3>
                <button className="purchaseButton" onClick={() => handlePurchaseCompletion(cartItems, grandTotal)}>Confirm Purchase</button>
            </div>
        </div>
    )
}

export default Cart