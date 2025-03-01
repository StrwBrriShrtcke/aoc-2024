import fs from 'node:fs';
const data = fs.readFileSync('./input.txt', 'utf8')
export const dataArray = data.split(/\s+/g)

let rightList = []
let leftList = []

for (let i = 0; i < dataArray.length - 1; i++) {
  if (i % 2 === 0) {
    leftList.push(dataArray[i])
  }
  else if (i % 2 !== 0) {
    rightList.push(dataArray[i])
  }
}

rightList.sort((a, b) => a - b)
leftList.sort((a, b) => a - b)

export const lL = leftList;
export const rL = rightList;

let sum = 0
for (let i = 0; i < rightList.length; i++) {
  sum += (Math.abs(leftList[i] - rightList[i]))
}

console.log(sum)

