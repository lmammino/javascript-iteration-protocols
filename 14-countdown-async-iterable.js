import { setTimeout } from 'timers/promises'

function createAsyncCountdown (from, delay = 1000) {
  return {
    [Symbol.asyncIterator]: async function * () {
      for (let i = from; i >= 0; i--) {
        await setTimeout(delay)
        yield i
      }
    }
  }
}

const countdown = createAsyncCountdown(3)

for await (const value of countdown) {
  console.log(value)
}
