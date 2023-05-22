import { useState, useContext, createContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  const [cart, setCart] = useState(false);

  function toggleCart() {
    setCart(!cart);
  }

  function closeCart() {
    setCart(false);
  }

  function openCart() {
    setCart(true);
  }

  return (
    <LocalStateProvider
      value={{
        cart,
        setCart,
        toggleCart,
        closeCart,
        openCart,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
