import { Router } from 'express'
import bodyParser from 'body-parser'
import mazeController from './controller/maze'

const router = Router()
router.use(bodyParser.json())

router.post('/maze/upload', mazeController.create)
router.get('/maze/solve/:id', mazeController.solve)
router.get('/maze/algorithm', mazeController.listAlgorithms)

export { routes }
export default router
