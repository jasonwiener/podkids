import axios from 'axios'
import parsePodcast from 'node-podcast-parser'

export default function parse (rssUrl) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(rssUrl)
      parsePodcast(response.data, (err, data) => {
        if (err) {
          return reject(err)
        }
        resolve(data)
      })
    } catch (e) {
      return reject(e)
    }
  })
}
