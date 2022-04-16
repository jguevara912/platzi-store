import React from 'react'
import Products from '../components/Products'

import { initialProductsState } from '../initialState'

function Home() {
  return (
    <Products products={initialProductsState.products}/>
  )
}

export default Home