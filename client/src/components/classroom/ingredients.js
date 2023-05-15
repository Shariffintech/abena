import React from "react";


  export const allIngredients = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" }
  ];
  
  const [tomato, lettuce, cheese] = allIngredients;
  export const ingredients = [tomato, lettuce, cheese];
  
export const fetchNextIngredients = (ingredients) => {
  const nextIngredients = [...ingredients];
  const nextIngredient = allIngredients[Math.floor(Math.random() * allIngredients.length)];
  nextIngredients.push(nextIngredient);
  return nextIngredients;
} 