let array_of_nums = [12, 3, 1, 2, -6, 5, -8, 6];

const three_number_sum_finder = (array, targetSum) => {
  // instantiate the solution array
  let solution_array = [];

  // we will need 2 pointers for 2 pointer solution, a left and right
  // left pointer will start at index 1, one after the first index, which we will use as the first number we check against targetSum
  let left_pointer = array[1];
  let right_pointer = array[array.length - 1]; // always subtract one from length, as it is the total number of items in array

  // sort the array (use the a-b trick to sort number in JS)

  array.sort((a, b) => a - b);

  console.log(array);
};

console.log(three_number_sum_finder(array_of_nums, 0));
