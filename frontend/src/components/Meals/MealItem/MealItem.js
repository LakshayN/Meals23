import { useContext, useState } from "react";
import classes from "./MealItem.module.css";
import { CartContext } from "../../../store/cart-context";
// import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price, fullMealInfo, filters }) => {
  const [count, setCount] = useState(0);
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  //one dollar for the rate dollar and other for js .... toFixed(2) for upto two decimal places

  const increaseCount = () => {
    setCount((prev) => prev + 1);
    addItemToCart(fullMealInfo);
  };

  const decreaseCount = () => {
    setCount((prev) => {
      if (prev === 0) return 0;
      return prev - 1;
    });

    removeItemFromCart(fullMealInfo.id);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
        <div>Tags : </div>
        <div className='flex'>
          {filters.map((filter, index) => {
            return (
              <div key={index} className='border-2 border-black mr-2'>
                {filter}
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='text-lg'>{count} </div>
        <button
          className='border-2 border-black  rounded-md bg-gray-300 w-6'
          onClick={increaseCount}
        >
          +
        </button>
        <button
          className='border-2 border-black rounded-md bg-gray-300 '
          onClick={decreaseCount}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default MealItem;
