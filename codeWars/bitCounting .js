// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case.

// 1) Understanding this problem
// -- 10 binary system number convert to 2 binary system number
// -- Count 2 binary number contain how many 1

let number = 1234

function countBits(n) {
  let binaryString = []
  let sum = 0
  // Program Me
  if (n >= 0) {
    binaryString = n.toString(2)
  } else {
    return 0
  }

  for (i = 0; i <= binaryString.length; i++) {
    if (binaryString[i] == 1) {
      sum += 1
    } else {
      continue
    }
  }
  return sum
}
countBits(number)
