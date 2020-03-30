const fs = require('fs')

;(async () => {
  const stream = fs.createReadStream(`${__dirname}/farfaraway.txt`, {
    encoding: 'utf8',
    highWaterMark: 1024 // maximum size of each chunk
  })

  const find = 'insidious'
  let bytes = 0

  for await (const chunk of stream) {
    // console.log(`Read: ${chunk}`)
    const index = chunk.indexOf(find)

    if (index != -1) {
      bytes += index
      console.log(`Found ${find} at byte ${bytes}.`)
      break
    }

    bytes += chunk.length
  }
  console.log('EOF')
})()
