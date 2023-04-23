import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const className = inCart ? "in-cart" : "";
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() =>setInCart(!inCart)}>{inCart? "Remove from Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
