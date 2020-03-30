const { getUserGenerator } = require('./generator')

const main = () => {
  intervalTest()
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

main()
