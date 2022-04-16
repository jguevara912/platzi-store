import {useContext} from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../Styles/Checkout.css'

function Checkout() {
  const {state, removeFromCart} = useContext(AppContext)
  const {cart} = state 


  const handleRemove = product => {
    removeFromCart(product)

  }

  const handleSumTotal = () => {
    const sum = cart.reduce((acm, prod) => acm + prod.price * prod.quantity ,0)
    return sum
  }

  return (
      <div className="Checkout">
        <div className="Checkout-content">
          <h3>{cart.length > 0  ? 'Lista de Pedidos:' : 'Sin pedidos...'}</h3>
          {cart.map(item => (
            <div className="Checkout-item" key={item.id}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <h5>unidades: {item.quantity}</h5>
                <span>$ {item.price}</span>
              </div>
              <button type="button" onClick={() => handleRemove(item)}><i className="fas fa-trash-alt"></i></button>
          </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to='/checkout/information'>
          <button type="button">Continuar pedido</button>
          </Link>
        </div>
        )}
      </div>
    );
}

export default Checkout