import fs from 'node:fs';
const data = fs.readFileSync('./input.txt', 'utf8')
const dataArray = data.split(/\s+/g)
let rightList = []
let leftList = []

for (let i = 0; i < dataArray.length - 1; i++) {
  function oddOrEven(number) {
    return number % 2 === 0
  }
  if (oddOrEven(i)) {
    leftList.push(dataArray[i])
  }
  else if (!oddOrEven(i)) {
    rightList.push(dataArray[i])
  }
}
rightList.sort((a, b) => a - b)
leftList.sort((a, b) => a - b)

let answerArray = []
for (let i = 0; i < rightList.length; i++) {
  answerArray.push(Math.abs(leftList[i] - rightList[i]))
}
const answer = answerArray.reduce((accumulate, nextValue) => accumulate + nextValue, 0)
console.log(answer)
