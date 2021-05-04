function createCountdown (from) {
  return {
    [Symbol.iterator]: function * () {
      for (let i = from; i >= 0; i--) {
        yield i
      }
    }
  }
}

const countdown = createCountdown(3)

for (const value of countdown) {
  console.log(value)
}
