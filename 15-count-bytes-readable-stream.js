import { createReadStream } from 'fs'

const sourcePath = process.argv[2]
const sourceStream = createReadStream(sourcePath)

let bytes = 0
for await (const chunk of sourceStream) {
  bytes += chunk.length
}

console.log(`${process.argv[2]}: ${bytes} bytes`)
