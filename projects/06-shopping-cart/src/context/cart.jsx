import { createContext, useState } from 'react'

// 1. Crear contexto
export const CartContext = createContext()

// 2. Crear Providers
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const productInTheCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInTheCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInTheCartIndex].quantity += 1
      return setCart(newCart)
    }

    // Product is not in the cart
    setCart(prevState => [
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  const removeFromCart = product => {
    setCart(prevState => cart.filter(item => item.id !== product.id))
  }

  const clearToCart = () => { setCart([]) }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearToCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
