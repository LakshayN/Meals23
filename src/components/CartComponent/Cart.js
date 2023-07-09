import React, { useContext, useEffect, useState } from "react";
// import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { CartContext } from "../../store/cart-context";

const Cart = (props) => {
  const { cartItems } = useContext(CartContext);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let sz = 0;
    for (let i = 0; i < cartItems.length; i++) {
      sz += cartItems[i].amount * cartItems[i].price;
    }

    setTotalAmount(sz.toFixed(2));
  }, [cartItems]);

  const cartItemsList = (
    <ul className={classes["cart-items"]}>
      {cartItems.map((item, index) => (
        <li key={index} className='text-lg'>
          {item.name} <span className='text-sm'> x{item.amount} </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={classes.cartModal} onClose={props.onClose}>
      <div className='font-bold text-2xl'>Cart Items</div>
      {cartItemsList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
