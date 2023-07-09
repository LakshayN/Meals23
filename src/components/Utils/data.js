import fish from "../../assets/fish.jpeg";
import ic from "../../assets/ic.jpg";
import strawberry from "../../assets/strawberry.jpg";
import kebab from "../../assets/kebab.jpg";
export const heroData = [
  {
    id: 1,
    name: "Icecream",
    decp: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: ic,
  },
  {
    id: 2,
    name: "Strawberries",
    decp: "Fresh Strawberries",
    price: "10.25",
    imageSrc: strawberry,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    decp: "Mixed Kebab Plate",
    price: "8.25",
    imageSrc: kebab,
  },
  {
    id: 4,
    name: "Fish Kebab",
    decp: "Mixed Fish Kebab",
    price: "5.25",
    imageSrc: fish,
  },
];

export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Fish",
    urlParamName: "fish",
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
  },

  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
  },
];

export const DUMMY_MEALS = [
  {
    id: "1",
    name: "Burger",
    description: "Classic beef burger with cheese",
    price: 12.99,
    amount: 0,
    filters: ["Nonveg", "Lunch", "Dinner"],
  },
  {
    id: "2",
    name: "Pizza",
    description: "Delicious margherita pizza with fresh toppings",
    price: 16.99,
    amount: 0,
    filters: ["Veg", "Dinner"],
  },
  {
    id: "3",
    name: "Pasta",
    description: "Creamy pasta with choice of sauce",
    price: 10.99,
    amount: 0,
    filters: ["Veg", "Nonveg", "Lunch", "Dinner"],
  },
  {
    id: "4",
    name: "Salad",
    description: "Fresh salad with mixed greens and veggies",
    price: 8.99,
    amount: 0,
    filters: ["Veg", "Lunch", "Dinner"],
  },
  {
    id: "5",
    name: "Steak",
    description: "Juicy grilled steak with side of mashed potatoes",
    price: 24.99,
    amount: 0,
    filters: ["Nonveg", "Dinner"],
  },
  {
    id: "6",
    name: "Tacos",
    description: "Authentic Mexican tacos with choice of filling",
    price: 9.99,
    amount: 0,
    filters: ["Veg", "Nonveg", "Lunch", "Dinner"],
  },
  {
    id: "7",
    name: "Soup",
    description: "Hot and comforting soup with fresh ingredients",
    price: 6.99,
    amount: 0,
    filters: ["Veg", "Nonveg", "Lunch", "Dinner"],
  },
  {
    id: "8",
    name: "Sandwich",
    description: "Classic sandwich with a variety of fillings",
    price: 7.99,
    amount: 0,
    filters: ["Veg", "Nonveg", "Breakfast", "Lunch"],
  },
  {
    id: "9",
    name: "Curry",
    description: "Spicy curry with choice of protein and aromatic spices",
    price: 14.99,
    amount: 0,
    filters: ["Veg", "Nonveg", "Lunch", "Dinner"],
  },
  {
    id: "10",
    name: "Sushi Burrito",
    description: "A fusion of sushi and burrito with fresh ingredients",
    price: 11.99,
    amount: 0,
    filters: ["Veg", "Lunch", "Dinner"],
  },
  {
    id: "11",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    amount: 0,
    filters: ["Veg", "Breakfast", "Lunch", "Dinner"],
  },
  {
    id: "12",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    amount: 0,
    filters: ["Veg", "NonVeg", "Breakfast", "Lunch", "Dinner"],
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    amount: 0,
    filters: ["Veg", "NonVeg", "Breakfast", "Lunch", "Dinner"],
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    amount: 0,
    filters: ["Veg", "NonVeg", "Breakfast", "Lunch", "Dinner"],
  },
];
