/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const calculateExtrasPrice = (i = 0) => {
    if(i === extras.length) return 0;
    let current = 0;
    if(extras[i] === "ExtraSauce") current = 1;
    else if(extras[i] === "ExtraToppings") current = 2;
    return current + calculateExtrasPrice(i + 1);
  }
  let totalPrice = 7;
  if(pizza === "Caprese") totalPrice = 9;
  else if(pizza === "Formaggio") totalPrice = 10;
  return totalPrice + calculateExtrasPrice();
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (totalPrice, {pizza, extras}) => totalPrice + pizzaPrice(pizza, ...extras)
  , 0
  );
}
