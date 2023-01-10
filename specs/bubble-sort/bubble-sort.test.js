/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // code goes here
  let switchApplied = false;
  for (let j = 1; j < nums.length; j++)
    for (let i = 0; i < nums.length - j; i++) {
      if (nums[i] > nums[i + 1]) {
        const tempValue = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = tempValue;
        switchApplied = true;
      }
      if (!switchApplied) return nums;
    }
  return nums;
}

// unit tests
test("sort array [0], return [0]", function () {
  const nums = [0];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([0]);
});

test("sort array [1], return [1]", function () {
  const nums = [1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1]);
});

test("sort array [1,2], return [1,2]", function () {
  const nums = [1, 2];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2]);
});

test("sort array [2,1], return [2,1]", function () {
  const nums = [2, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2]);
});

test("sort array [3,1], return [1,3]", function () {
  const nums = [1, 3];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 3]);
});

test("sort array [1,2,3], return [1,2,3]", function () {
  const nums = [1, 2, 3];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3]);
});

test("sort array [3,2,1], return [3,2,1]", function () {
  const nums = [3, 2, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3]);
});

// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
