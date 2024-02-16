import { useState } from "react"

import { ShoppingCartIcon } from "@heroicons/react/24/outline"

import Cart from "./components/Cart.tsx"

function App() {
  const [activeCart, setActiveCart] = useState(true)

  function deriveActiveCart() {
    setActiveCart((prevActiveCart) => !prevActiveCart)
  }

  return (
    <>
      <ShoppingCartIcon
        className="h-16 w-16 absolute top-5 left-5 bg-gray-600 p-2 rounded-xl"
        aria-hidden="true"
        onClick={deriveActiveCart}
      />
      <Cart clickedCartIcon={activeCart} />
    </>
  )
}

export default App
