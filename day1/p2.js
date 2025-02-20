import * as fs from 'node:fs'
import { rL } from "./p1.js"
import { lL } from "./p1.js"

const answerArray = []

for (let i = 0;i < rL.length; i++ ) {
  let leftListnumber = lL[i]
 answerArray.push(rL.filter(number => number === lL[i]).length * leftListnumber)
}

const answer = answerArray.reduce((accumulate, nextValue) => accumulate + nextValue, 0)
console.log(answer)
