// import './Cart.css'
import { addDoc, collection } from 'firebase/firestore'
import db from '../../config/firebase'
import { useCart } from '../../contexts/CartContext'


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

          alert(`Thanks for placing your order, here's your purchase ID for later tracking: ${orderId}`)
      
        } catch (error) {
          console.error( error)
        }
      }


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
            <button onClick={() => handlePurchaseCompletion(cartItems, grandTotal)}>Confirm Purchase</button>
        </div>
    )
}

export default Cart