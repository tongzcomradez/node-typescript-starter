import * as express from 'express'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (_, res) => {
      res.json({ message: 'Hello World!' })
    })
    router.post('/', (req, res) => {
      console.log(req.body) // eslint-disable-line
      res.json({ message: 'Success', data: req.body })
    })
    this.express.use('/', router)
  }
}
export default new App().express
