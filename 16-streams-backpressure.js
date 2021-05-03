import { createReadStream } from 'fs'
import { Transform } from 'stream'
import { once } from 'events'

class SlowTransform extends Transform {
  _transform (chunk, enc, cb) {
    setTimeout(() => cb(null, chunk.toString('hex')), 1000)
  }
}

const sourcePath = process.argv[2]
const sourceStream = createReadStream(sourcePath)
const destStream = new SlowTransform({ highWaterMark: 8 })
destStream.pipe(process.stdout)

for await (const chunk of sourceStream) {
  const canContinue = destStream.write(chunk)
  if (!canContinue) {
    console.error('\n--> BACKPRESSURE, waiting...\n')
    await once(destStream, 'drain')
    console.error('\n--> stream drained, resuming\n')
  }
}
