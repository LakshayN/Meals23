import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useState } from "react";

const MealItemForm = (props) => {
  const [count, setCount] = useState(0);
  return (
    // <form className={classes.form}>
    //   <Input
    //     label="Amount"
    //     input={{
    //       id: "amount_" + props.id,
    //       type: "number",
    //       min: "1",
    //       max: "5",
    //       step: "1",
    //       defaultValue: "1",
    //     }}
    //   />
    //   <button>+Add</button>
    // </form>
    <>
    {count}
    </>
  );
};

export default MealItemForm;
