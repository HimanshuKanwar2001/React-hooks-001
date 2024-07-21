import { Link } from "react-router-dom";
import { ITEMS } from "../data/ItemData";

function Items() {
  return (
    <>
      {/* <Navbar/> */}
      <main>
        <h1>Items Page</h1>
      </main>
      <ul>
        {ITEMS.map((item)=>(
        <Link to={`/items/${item.id}`}>
          <li>{item.id}</li>
        </Link>
        ))}
        {/* <Link to='/items/item-2'>
        <li> Item-2</li>
        </Link>
        
        <Link to='/items/item-3'>
        <li>Item-3</li>
        </Link> */}
      </ul>
    </>
  );
}

export default Items;
