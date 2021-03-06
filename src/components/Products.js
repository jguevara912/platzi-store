import Product from './Product'
import '../Styles/Products.css'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Products() {
  const {state, addToCart} = useContext(AppContext)

  const {products} = state
  
  const handleAddToCart = product =>{
    addToCart(product)
  }

  return (
    <div className="Products">
        <div className="Products-items">
            {products.map(product =>(
                <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
            ))}
        </div>
    </div>
  )
}

export default Products