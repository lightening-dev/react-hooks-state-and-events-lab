import React, {useState} from "react";

function Item({ name, category }) {
  
  const [cartStatus, setCartStatus ] = useState(false);

  function addToCart() {
    setCartStatus((cartStatus) => !cartStatus);

          }
  return (
    <li className={cartStatus ? "Remove From Cart" : "Add to Cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartStatus ? "remove"  : "add"} onClick={addToCart}>{cartStatus ? "Remove From Cart"  : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
