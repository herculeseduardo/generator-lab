const { random } = require('./helper')

const asyncRandomGenerator = async function * () {
  while (true) {
    const rd = random(0, 10)
    const promise = new Promise((resolve, reject) => {
      resolve(rd)
    })

    yield promise
  }
}

module.exports = {
  asyncRandomGenerator
}
