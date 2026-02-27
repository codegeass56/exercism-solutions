//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  const set = new Set();
  for(const c of input.toLowerCase()) {
    if(/[a-z]/.test(c)) {
      set.add(c);
    }
  }
  if(set.size === 26) return true;
  return false;
};
