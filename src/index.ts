import { pick } from "remeda"

const person = {
  age: 20,
  gender: "male",
}

const pickedPerson = pick(person, ["age"])

console.log(pickedPerson)
