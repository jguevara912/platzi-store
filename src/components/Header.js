import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import '../Styles/Header.css'

function Header() {

  const {state} = useContext(AppContext)
  const {cart} = state

  return (
    <div className="Header">
        <h1 className="Header-title">
          <Link to='/'>Platzi Conf Merch</Link>
        </h1>
        <div className="Header-checkout">
            <Link to='/checkout'>
            <i className="fas fa-cart-plus"></i>
            </Link>
            {cart.length > 0 && 
            <div>
              {cart.reduce((acum, prod) => acum + prod.quantity, 0)}
            </div>
            }
        </div>
    </div>
  )
}

export default Header