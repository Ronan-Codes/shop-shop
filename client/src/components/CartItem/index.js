import React from "react";

import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();
  // comma because `state` is in the frist space

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });

    // IndexedDB
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;

    if(value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });

      // IndexedDB
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });

      // IndexedDB
      idbPromise('cart', 'put', {
        ...item, 
        purchaseQuantity: parseInt(value)
      });
    }

  };

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            // UPDATE_QUANTITY OR REMOVE
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            // REMOVE_FROM_CART
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}
  
export default CartItem;