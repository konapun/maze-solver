import mazeSolver, { algorithm } from '@maze-solver/core'

export default {
  // POST /api/maze
  async create (req, res) {
    const { maze } = req.body

    try {
      const path = mazeSolver(mazeString).solve(algorithm.A_STAR)
      res.send({ path })
    } catch (e) {
      res.status(401).send({ message: e.message })
    }
  },

  async solve (req, res) {

  },

  async listAlgorithms (req, res) {

  }
}
