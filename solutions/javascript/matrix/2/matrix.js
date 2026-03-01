//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    this.matrix = input
      .split('\n')
      .map(part => part.split(' ').map(Number));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((_, colIndex) => {
      return this.matrix.map(row => row[colIndex]);
    });
  }
}