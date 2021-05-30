const express = require('express')
const useragent = require('express-useragent')
const app = express()
const port = 80

const isMobile = req => {
  const uah = req.headers['user-agent']
  if (!uah) return false;

  const userAgent = useragent.parse(uah)
  if (!userAgent) return false;

  return userAgent.isMobile
}

const mobileResoponse = `
<!DOCTYPE html>
<html>
  <head>
    <title>mobile site</title>
  </head>
  <body>
    <h1>Pavlo Tech Mobile!</h1>
  </body>
</html
`
const mainResponse = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>pavlo.tech</title>
    </head>
    <body>
      <h1>Pavlo Tech!</h1>
    </body>
  </html
`

app.get('/', (req, res) => res.send(isMobile(req) ? mobileResoponse : mainResponse))

app.listen(port, () => {
console.log('starting app!')
})