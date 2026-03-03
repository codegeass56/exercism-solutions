//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input, result = "" , i = 0) => {
  if(i === input.length) return result;
  return reverseString(input, input[i] + result, i + 1);
}