import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import { CartContext } from "../../store/cart-context";
import CartIcon from "../CartComponent/CartIcon";
import {MdShoppingBasket} from 'react-icons/md'

const HeaderCardButton = (props) => {
  const {cartItems} = useContext(CartContext);
  const[cartSize, setCartSize] = useState(0);

  useEffect(() => {
    let size = 0;

    for(let i=0 ; i<cartItems.length ; i++){
      size += cartItems[i].amount;
    }

    setCartSize(size);

  },[cartItems])


  return (
    // <button className={classes.button} onClick={props.onClick}>
    //   <span className={classes.icon}>
    //     <CartIcon />
    //   </span>
    //   <span>Your Cart</span>
    //   <span className={classes.badge}>
    //     {cartSize}
    //   </span>
    // </button>

    <>

      <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            
      <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
          <p className="text-xs text-white font-semibold">
          {cartSize}
          </p>
      </div>

    </>
  );
};

export default HeaderCardButton;
