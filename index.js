const { getUserGenerator } = require('./generator')
const { asyncRandomGenerator } = require('./asyncGenerators')

const main = () => {
  forOfTest()
  forAwaitTest()
}

const forOfTest = () => {
  const gen = getUserGenerator()
  let counter = 0
  for (const user of gen) {
    if (counter === 5) break
    console.log(user)
    counter++
  }
}

const forAwaitTest = async () => {
  const num = asyncRandomGenerator()
  const list = []
  /* for (let i = 0; i < 10; i++) {
    const firstValue = num.next()
    list.push(firstValue.value)
  } */
  let counter = 0
  for await (const n of num) {
    if (counter > 10) break
    list.push(n)
    counter++
  }
  console.log(list)
}

main()
