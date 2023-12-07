import React, { useState } from "react";
import { CartContext } from "./cart-context";
import { fetchUser } from "../components/Utils/getFromLocalStorage";

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(fetchUser());
  const items = DUMMY_MEALS;
  const filterOptions = ["Veg", "NonVeg", "Breakfast", "Lunch", "Dinner"];
  const [selectedFilterItems, setSelectedFilterItems] = useState([]);

  const setFilterState = (arr) => {
    setSelectedFilterItems(arr);
  };
  const setUserFromLogin = (user) => {
    setUser(user);
  };
  const addItemToCart = (item) => {
    const idToAdd = item.id;
    const updatedList = [...cartItems];

    let found = false;
    for (const meal of updatedList) {
      if (meal.id === idToAdd) {
        meal.amount++;
        found = true;
        break; // Found a meal with the given ID
      }
    }

    if (!found) {
      updatedList.push({
        ...item,
        amount: 1,
      });
    }

    setCartItems(updatedList);
  };

  const removeItemFromCart = (idToRemove) => {
    const temp = [...cartItems];

    const index = temp.findIndex((meal) => meal.id === idToRemove);
    if (index !== -1) {
      if (temp[index].amount != 1) {
        temp[index].amount--;
      } else {
        temp.splice(index, 1); // Remove the meal object from the array
      }
    }

    setCartItems(temp);
  };

  return (
    <CartContext.Provider
      value={{
        user,
        cartItems,
        items,
        addItemToCart,
        removeItemFromCart,
        setUserFromLogin,
        filterOptions,
        selectedFilterItems,
        setFilterState,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    amount: 0,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    amount: 0,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    amount: 0,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    amount: 0,
  },
];
