function createCountdown (from) {
  let nextVal = from
  return {
    [Symbol.iterator]: () => ({
      next () {
        if (nextVal < 0) {
          return { done: true }
        }

        return { done: false, value: nextVal-- }
      }
    })
  }
}

const countdown = createCountdown(3)

for (const value of countdown) {
  console.log(value)
}
