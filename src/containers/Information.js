import {useContext, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../Styles/Information.css'

function Information() {
  const {state, addToBuyer} = useContext(AppContext)
  const form = useRef()
  const navigate = useNavigate()

  const {cart} = state

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    };
    addToBuyer(buyer);
    navigate('/checkout/payment')
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="addres" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item =>(
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <h5> X {item.quantity}</h5>
              <span>${item.price * item.quantity}</span>
            </div>
          </div>    
        ))}
        <div className="total">
          <h4>Total: </h4>
          <h3>${cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)}</h3>
        </div>
      </div>
    </div>
  );
}

export default Information