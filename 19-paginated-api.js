import axios from 'axios'

function starWarsCharacters () {
  return {
    [Symbol.asyncIterator]: async function * getChars () {
      let nextUrl = 'https://swapi.dev/api/people'
      while (nextUrl) {
        const response = await axios.get(nextUrl)
        nextUrl = response.data.next
        yield response.data.results
      }
    }
  }
}

for await (const page of starWarsCharacters()) {
  for (const char of page) {
    console.log(char.name)
  }
}
