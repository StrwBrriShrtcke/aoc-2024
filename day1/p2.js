import { rL } from "./p1.js"
import { lL } from "./p1.js"

const answerArray = []
const rLObject = {};

for (let i = 0; i < rL.length; i++) {
  rLObject[rL[i]] = 1 + (rLObject[rL[i]] ?? 0)
}

let sum = 0
for (let i = 0; i < lL.length; i++) {
    sum += lL[i] * (rLObject[lL[i]] ?? 0)
}
console.log(sum)
