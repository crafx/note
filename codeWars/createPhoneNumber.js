function createPhoneNumber(numbers) {
  numStr = numbers.join(``)
  return `(${numStr.slice(0, 3)}) ${numStr.slice(3, 6)}-${numStr.slice(6)}`
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
