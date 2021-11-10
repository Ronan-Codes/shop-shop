// import React from "react";
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';
// useEffect for IndexedDB
import React, { useEffect } from "react";

// import { useStoreContext } from '../../utils/GlobalState';
  // replaced with Redux Version
import { useSelector, useDispatch } from 'react-redux'

  // ADD_MULTIPLE_TO_CART for IndexedDB
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';

// IndexedDB
import { idbPromise } from '../../utils/helpers';

// for Stripe
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';

// Strip cont...
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
/* This is the same API key that we used in the plain HTML test, but now we're using it in the 
  context of React. We'll use this stripePromise object to perform the checkout redirect. 
  But first, we need to collect the IDs for the items being purchased. */

const Cart = () => {
  // const [state, dispatch] = useStoreContext();
  const state = useSelector(state => state);
  const dispatch = useDispatch()

  // for Stripe
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT)
  // The data variable will contain the checkout session, but only after the query is called with the getCheckout() function.

  // useEffect for Stripe
  useEffect(() => {
    // data from useLazyQuery
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // IndexedDB
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({
        type: ADD_MULTIPLE_TO_CART,
        products: [...cart]
      });
    };

    if(!state.cart.length) {
      getCart();
    }

  }, [state.cart.length, dispatch])

  function toggleCart() {
      dispatch({ type: TOGGLE_CART });
  }

  if (!state.cartOpen) {
      return(
          <div className="cart-closed" onClick={toggleCart}>
              <span 
                  role="img"
                  aria-label="trash">🛒</span>
          </div>
      );
  }

  console.log(state)

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2)
  }

  // for Stripe
  function submitCheckout() {
    const productIds = [];
  
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds }
    });
  }

  

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            {
              Auth.loggedIn() ?
                <button onClick={submitCheckout}>
                  Checkout
                </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  )
}
      
  
export default Cart