import { createContext, useState, useContext } from "react";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);

  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total === 0) {
      return;
    }
    setTotal((prevState) => prevState - price);
    setItem((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setTotal(0);
    setItem(0);
  };
  return (
    <itemContext.Provider value={{ total, item, handleAdd, handleRemove,handleReset }}>
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, useValue };

export default CustomItemContext;
