import { createContext, useState ,useContext} from "react";

const itemContext = createContext();

function useValue(){
    const value=useContext(itemContext);

    return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  // console.log(props);
  return (
    <itemContext.Provider value={{ total, setTotal, item, setItem }}>
      {children}
    </itemContext.Provider>
  );
}

export { itemContext,useValue };

export default CustomItemContext;
