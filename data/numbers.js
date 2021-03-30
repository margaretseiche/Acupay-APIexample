// ===============================================================================
// DATA
// Below data will hold all of the current number pairs.
// But you could have it be an empty array as well.
// ===============================================================================

var numberObject = [
  {
    numberOne: 2,
    numberTwo: 5
  },  
  {
    numberOne: 37,
    numberTwo: 3
  },  
  {
    numberOne: 257,
    numberTwo: 52
  },
  {
    numberOne: 4093,
    numberTwo: 7890
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = numberObject;
