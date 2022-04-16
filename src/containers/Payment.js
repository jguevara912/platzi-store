import {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../Styles/Payment.css'

function Payment() {

  const {state} = useContext(AppContext)
  const {cart} = state

  const navigate = useNavigate()
  const handlePaymentSuccess = () => {
    navigate('/checkout/success')
  }

    return (
        <div className="Payment">
          <div className="Payment-content">
            <h3>Resumen del pedido:</h3>
              {cart.map(item =>(
                <div className="Payment-item" key={item.id}>
                  <div className="Payment-element">
                  <h4>{item.title}</h4>
                  <span>$ {item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            <div className="totalPay">
                <h4>Total a pagar: </h4>
                <h3>${cart.reduce((acc,prod) => acc+ prod.quantity * prod.price,0)}</h3>
            </div>
            <div >
              <button className="Payment-button" type="button" onClick={handlePaymentSuccess}>Pagar</button>
            </div>
          </div>
          
        </div>
      );
}

export default Payment