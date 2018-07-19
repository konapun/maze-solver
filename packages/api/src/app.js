import express from 'express'
import router from './router'

const app = express()
app.use('/api', router.routes)
app.listen(3000) // TODO: make configurable
