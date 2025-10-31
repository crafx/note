let data1 = [7.5, 8, 6.5, 0, 8.5, 4, 0]
let sum = 0
let calcData = function (data) {
  for (let i = 0; i <= data.length - 1; i++) {
    sum += data[i]
  }
  
  return console.log(sum)
}
calcData(data1)
