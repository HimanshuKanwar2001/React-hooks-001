import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);

  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (prod) => {
    // console.log(prod);
    const index = cart.findIndex((item) => item.id === prod.id);

    if (index === -1) {
      setCart([...cart, { ...prod, qty: 1 }]);
      console.log(cart);
      setTotal(total + prod.price);
    } else {
      cart[index].qty++;
      setCart(cart);
      console.log(cart);
      setTotal(total + cart[index].price);
    }
    setItem(item + 1);
  };

  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart[index].qty--;
      setTotal(total - cart[index].price);
      setItem(item - 1);
      if(cart[index].qty === 0){
        cart.splice(index,1);
      }
      
    }
    setCart(cart);
  };

  const clear = () => {
    setCart([]);
    setTotal(0);
    setItem(0);
  };
  const handleReset = () => {
    setTotal(0);
    setItem(0);
  };
  const toggle = () => {
    setShowCart(!showCart);
  };
  return (
    <itemContext.Provider
      value={{
        total,
        item,
        handleAdd,
        handleRemove,
        handleReset,
        toggle,
        cart,
        clear,
      }}
    >
      {showCart && <CartModal toggle={toggle} />}
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, useValue };

export default CustomItemContext;
