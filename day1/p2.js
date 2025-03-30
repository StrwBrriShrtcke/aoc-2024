import { rL } from "./p1.js"
import { lL } from "./p1.js"

const rLMap = new Map();

for (const element of rL) {
  rLMap.set(element, 1 + (rLMap.get(element) ?? 0));
}

let sum = 0

for (const element of lL) {
  if (rLMap.get(element)) {
    sum += element * rLMap.get(element);
  }
}
console.log(sum)
