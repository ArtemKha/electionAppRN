import "whatwg-fetch"
import md5 from "md5"
import configs from "../configs"

/**
 * Retrieve characters from Marvel API
 *
 * @param category
 * @returns Promise
 */

export function getMarvelCharacters() {
  const ts = new Date().getTime()
  const { PRIVATE_KEY, PUBLIC_KEY } = configs
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)

  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`
  )
    .then(response => {
      return response.json()
    })
    .catch(err => {
      return err
    })
}
