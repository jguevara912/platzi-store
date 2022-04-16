
import {useReducer} from 'react'
import { initialProductsState } from '../initialState'
import prodReducer from '../reducers/prodReducer'
import types from '../reducers/types'

function useInitialState() {
  const[state, dispatch] = useReducer(prodReducer, initialProductsState)

    const addToCart = payload => {
        dispatch({type: types.productAddToCart, payload: payload})
    }

    const removeFromCart = payload => {
        dispatch({type: types.productRemoveFromCart, payload: payload})
    }

    const addToBuyer = payload => {
        dispatch({type: types.addToBuyer, payload: payload})
    }

    const reset = () => {
        dispatch({type: types.reset})
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        reset,
        state
    }
    
}

export default useInitialState