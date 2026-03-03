//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
  let reversed = "";
  for(let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}
