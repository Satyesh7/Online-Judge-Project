import assert from "assert";

// Starter code for the twoSum problem
const starterCodeTwoSum = `function twoSum(nums,target){
  // Write your code here
};`;

// Handler function to check if the user's solution is correct
const handlerTwoSum = (fn) => {
  try {
    const nums = [
      [2, 7, 11, 15],
      [3, 2, 4],
      [3, 3],
    ];

    const targets = [9, 6, 6];
    const answers = [
      [0, 1],
      [1, 2],
      [0, 1],
    ];

    // Loop through all test cases to verify the user's solution
    for (let i = 0; i < nums.length; i++) {
      const result = fn(nums[i], targets[i]);
      assert.deepStrictEqual(result, answers[i]); // Check if the result matches the expected output
    }
    return true;
  } catch (error) {
    console.log("twoSum handler function error");
    throw new Error(error);
  }
};

// Problem object containing details about the Two Sum problem
export const twoSum = {
  id: "two-sum",
  title: "1. Two Sum",
  problemStatement: `<p class='mt-3'>
    Given an array of integers <code>nums</code> and an integer <code>target</code>, return
    <em>indices of the two numbers such that they add up to</em> <code>target</code>.
  </p>
  <p class='mt-3'>
    You may assume that each input would have <strong>exactly one solution</strong>, and you
    may not use the same element twice.
  </p>
  <p class='mt-3'>You can return the answer in any order.</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [2,7,11,15], target = 9",
      outputText: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      id: 2,
      inputText: "nums = [3,2,4], target = 6",
      outputText: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
    {
      id: 3,
      inputText: "nums = [3,3], target = 6",
      outputText: "[0,1]",
    },
  ],
  constraints: `<li class='mt-2'>
    <code>2 ≤ nums.length ≤ 10</code>
  </li> <li class='mt-2'>
    <code>-10 ≤ nums[i] ≤ 10</code>
  </li> <li class='mt-2'>
    <code>-10 ≤ target ≤ 10</code>
  </li>
  <li class='mt-2 text-sm'>
    <strong>Only one valid answer exists.</strong>
  </li>`,
  handlerFunction: handlerTwoSum,
  starterCode: starterCodeTwoSum,
  order: 1,
  starterFunctionName: "function twoSum(",
};
