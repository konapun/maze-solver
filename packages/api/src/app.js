import express from 'express'
import bodyParser from 'body-parser'
import router from './router'

const app = express()
app.use(bodyParser.json())
app.use('/api', router)
app.listen(3000, () => { // TODO: make configurable
  console.log('Listening on port 3000')
})
