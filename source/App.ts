import * as express from 'express'

class App {
  public express

  constructor () {
    this.express = express()
    this.middleware()
    this.routes()
  }

  private middleware(): void {}

  private routes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express
