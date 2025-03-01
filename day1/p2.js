import { rL } from "./p1.js"
import { lL } from "./p1.js"

const rLObject = {};

for (const element of rL) {
  rLObject[element] = 1 + (rLObject[element] ?? 0)
}

let sum = 0

for (const element of lL) {
  sum += element * (rLObject[element] ?? 0)
}
console.log(sum)
