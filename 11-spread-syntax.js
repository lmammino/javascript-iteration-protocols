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
const from5to0 = [5, 4, ...countdown]
console.log(from5to0) // [ 5, 4, 3, 2, 1, 0 ]

const countdown2 = createCountdown(6)
console.log('countdown2 data:', ...countdown2) // countdown2 data: 6 5 4 3 2 1 0
