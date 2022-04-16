import {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../Styles/Success.css'
function Success() {

  const {state, reset} = useContext(AppContext)
  const {buyer} = state
  const navigate = useNavigate() 

  const resetAll = () => {
    reset()
    navigate('/')
  }
  
    return (
        <div className="Succes">
          <div className="Success-content">
            {buyer.map(buy => (
              <div key={buy.name}>
                <h2 >
                {buy.name}, gracias por tu compra!
                </h2>
                <button className="Success-button" type="button" onClick={resetAll}>
              Seguir comprando
                </button>
              </div>
            ))}
            <span>Tu pedido llegara en 3 dias a tu dirección:</span>
            <div className="Success-map">Google Maps</div>
            
          </div>
        </div>
      );
}

export default Success