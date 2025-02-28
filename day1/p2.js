import { rL } from "./p1.js"
import { lL } from "./p1.js"

const answerArray = []
const rLObject = {};

for (let i = 0; i < rL.length; i++) {
  if (rLObject[rL[i]] !== undefined) {
    rLObject[rL[i]] = rLObject[rL[i]] + 1
  }
  else if (rLObject[rL[i]] === undefined) {
    rLObject[rL[i]] = 1
  }
}

let sum = 0
for (let i = 0; i < lL.length; i++) {

  if (rLObject[lL[i]] !== undefined) {
    sum += lL[i] * rLObject[lL[i]]
  }
}
console.log(sum)
