const { random } = require('./helper')

function * getUserGenerator () {
  const userList = [
    { id: 1, area: 'south', score: 172, name: 'peter' },
    { id: 2, area: 'north', score: 465, name: 'carlos' },
    { id: 3, area: 'east', score: 23, name: 'sandro' },
    { id: 4, area: 'south', score: 98, name: 'silvia' },
    { id: 5, area: 'east', score: 232, name: 'samantha' },
    { id: 6, area: 'north', score: 122, name: 'john' },
    { id: 7, area: 'west', score: 200, name: 'marcus' },
    { id: 8, area: 'south', score: 134, name: 'david' },
    { id: 9, area: 'east', score: 432, name: 'maria' },
    { id: 10, area: 'west', score: 232, name: 'vivan' },
    { id: 11, area: 'south', score: 212, name: 'margareth' },
    { id: 12, area: 'east', score: 99, name: 'george' },
    { id: 13, area: 'west', score: 333, name: 'phil' }
  ]
  while (true) {
    const num = random(1, 13)
    yield userList.filter(item => item.id === num)
  }
}

module.exports = {
  getUserGenerator
}
