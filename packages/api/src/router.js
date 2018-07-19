import { Router } from 'express'
import mazeController from './controller/maze'

const router = Router()

router.post('/maze/upload', mazeController.create)
router.get('/maze/solve/:id', mazeController.solve)
router.get('/maze/algorithm', mazeController.listAlgorithms)

export default router
