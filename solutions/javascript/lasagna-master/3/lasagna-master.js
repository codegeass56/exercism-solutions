/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer) {
  if(timer === 0) return "Lasagna is done.";
  if(!timer) return "You forgot to set the timer.";
  return "Not done, please wait.";
}

export function preparationTime(layers, prepTime = 2) {
  return layers.length * prepTime;
}

export function quantities(layers) {
  return layers.reduce((acc, val, i) => {
    if(val === "noodles") {
      acc.noodles += 50;
    } else if(val === "sauce") {
      acc.sauce += 0.2;
    }
    return acc;
  }, {noodles: 0, sauce: 0});
}

export function addSecretIngredient(ingredientListOne, ingredientListTwo) {
  ingredientListTwo.push(ingredientListOne.at(-1));
}

export function scaleRecipe(recipe, numPortions) {
  const modifiedRecipe = {...recipe};
  for(const ingredient in recipe) {
    modifiedRecipe[ingredient] *= numPortions / 2;
  }
  return modifiedRecipe;
}
