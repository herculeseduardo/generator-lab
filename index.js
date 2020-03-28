const { getUserGenerator } = require('./generator')

const main = () => {
  intervalTest()
  forOfTest()
}

const intervalTest = () => {
  const gen = getUserGenerator()
  let counter = 0
  let interval = setInterval(() => {
    if (counter === 5) clearInterval(interval)
    console.log(`${counter} - ${JSON.stringify(gen.next().value)}`)
    counter++
  }, 100)
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

main()
