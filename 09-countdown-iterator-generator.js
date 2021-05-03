function * createCountdown (from) {
  for (let i = from; i >= 0; i--) {
    yield i
  }
}

const countdown = createCountdown(3)
console.log(countdown.next()) // { value: 3, done: false }
console.log(countdown.next()) // { value: 2, done: false }
console.log(countdown.next()) // { value: 1, done: false }
console.log(countdown.next()) // { value: 0, done: false }
console.log(countdown.next()) // { value: undefined, done: true }
