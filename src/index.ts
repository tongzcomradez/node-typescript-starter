/* eslint-disable */
import app from './App'

const port = process.env.PORT || 3003

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log(process.env.NODE_ENV || 'development')
  return console.log(`server is listening on ${port}`)
})
