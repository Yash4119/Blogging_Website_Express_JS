blogs = [
  {
    name: "Kadane's Algorithm",
    content:
      "The idea of Kadane’s algorithm is to maintain a variable max_ending_here that stores the maximum sum contiguous subarray ending at current index and a variable max_so_far stores the maximum sum of contiguous subarray found so far, Everytime there is a positive-sum value in max_ending_here compare it with max_so_far and update max_so_far if it is greater than max_so_far.",
    slug: "kadanes",
  },
  {
    name: "Dutch National Flag Algorithm",
    content:
      "The idea of 3 way Quick Sort is to process all occurrences of the pivot and is based on Dutch National Flag algorithm.",
    slug: "DNFA",
  },
  {
    name: "Sliding Window Algorithm",
    content:
      "Binary Search is a searching algorithm. In each step, the algorithm compares the input element x with the value of the middle element in the array. If the values match, return the index of the middle. Otherwise, if x is less than the middle element, then the algorithm recurs for the left side of the middle element, else recurs for the right side of the middle element. Contrary to popular belief, this is not an example of Divide and Conquer because there is only one sub-problem in each step (Divide and conquer requires that there must be two or more sub-problems) and hence this is a case of Decrease and Conquer.",
    slug: "sliding-window",
  },
  {
    name: "Divide and Conquer Algorithm",
    content:
      "lBinary Search is a searching algorithm. In each step, the algorithm compares the input element x with the value of the middle element in the array. If the values match, return the index of the middle. Otherwise, if x is less than the middle element, then the algorithm recurs for the left side of the middle element, else recurs for the right side of the middle element. Contrary to popular belief, this is not an example of Divide and Conquer because there is only one sub-problem in each step (Divide and conquer requires that there must be two or more sub-problems) and hence this is a case of Decrease and Conquer.",
    slug: "dividenconquer",
  },
];

module.exports = blogs;
