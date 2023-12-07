import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cart-context";
import Cart from "../CartComponent/Cart";
import HorizontalFilter from "../MainContainer/HorizontalFilter";
import { DUMMY_MEALS } from "../Utils/data";

const AvailableMeals = () => {
  const { selectedFilterItems } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [mealsList, setMealsList] = useState(DUMMY_MEALS);

  useEffect(() => {
    const filteredArr = DUMMY_MEALS?.filter((item) =>
      selectedFilterItems?.every((filter) => item?.filters?.includes(filter))
    );

    setMealsList(filteredArr);
  }, [selectedFilterItems]);

  const options = ["veg", "nonveg", "breakfast"];
  return (
    <div className=''>
      <div className=' ml-4 mt-2'>Search and Filter Meals</div>
      {/* //form */}
      <div className='mt-2 ml-4'>
        <form
          class={classes["input-box"]}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type='text'
            id='input'
            name='input'
            placeholder=' '
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <label for='input'>Meals</label>
        </form>
      </div>

      <HorizontalFilter options={options} />

      <section className={classes.meals}>
        {mealsList
          .filter((item) => {
            return search.toLowerCase() === ""
              ? true
              : item.name.toLowerCase().includes(search);
          })
          .map((meal, index) => (
            <Card key={index}>
              <ul>
                <MealItem
                  key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                  fullMealInfo={meal}
                  filters={meal.filters}
                />
              </ul>
            </Card>
          ))}
      </section>
      {/* <Cart onClose={() => {}} /> */}
    </div>
  );
};

export default AvailableMeals;
