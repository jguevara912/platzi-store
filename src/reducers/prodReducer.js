import types from "./types"

const prodReducer = (state, action) => {
    switch(action.type) {
        case types.productAddToCart:{
            const newProduct = action.payload
            const cartContainProduct = state.cart.find(product => product.id === newProduct.id)

            return cartContainProduct ? {
                ...state,
                cart: state.cart.map(product => product.id === newProduct.id ? {...product, quantity: product.quantity +1} : product)
            } : 
            {
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1}]
            }
        }
        case types.productRemoveFromCart:
            return {
           ...state,
          cart: state.cart.filter(items => items.id !== action.payload.id)
        }
        case types.addToBuyer:
            return {
                ...state,
                buyer: [...state.buyer, action.payload]
            }
        case types.reset:
            return {
                ...state,
                cart:[],
                buyer: []
            }
        default:
            return state
    }
}

export default prodReducer