function createCountdown (from) {
  let nextVal = from
  return {
    next () {
      if (nextVal < 0) {
        return { done: true }
      }

      return {
        done: false,
        value: nextVal--
      }
    }
  }
}

const countdown = createCountdown(3)
console.log(countdown.next())
// { done: false, value: 3 }

console.log(countdown.next())
// { done: false, value: 2 }

console.log(countdown.next())
// { done: false, value: 1 }

console.log(countdown.next())
// { done: false, value: 0 }

console.log(countdown.next())
// { done: true }

const countdown2 = createCountdown(3)
let result = countdown2.next()
while (!result.done) {
  console.log(result.value)
  result = countdown2.next()
}
