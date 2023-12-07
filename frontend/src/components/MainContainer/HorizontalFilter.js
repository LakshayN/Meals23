import React, { useContext, useState } from "react";
import { CartContext } from "../../store/cart-context";

const HorizontalFilter = () => {
  const { filterOptions } = useContext(CartContext);
  // const [selectedItems, setSelectedItems] = useState([]);
  const { selectedFilterItems, setFilterState } = useContext(CartContext);

  const handleClick = (item) => {
    if (selectedFilterItems.includes(item)) {
      setFilterState(
        selectedFilterItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setFilterState([...selectedFilterItems, item]);
    }
  };

  return (
    <div className='flex justify-center space-x-4'>
      {filterOptions?.map((item) => (
        <button
          key={item}
          className={`px-4 py-2 rounded-md ${
            selectedFilterItems.includes(item)
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default HorizontalFilter;
