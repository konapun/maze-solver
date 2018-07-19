import reader from './reader'
import algorithm from './algorithm'

function solver (string) {
  const { grid, start, end } = reader.readMaze(string)

  return {
    solve (algorithm) {
      const solver = algorithm.call(null, grid)
      return solver.findPath(start, end)
    }
  }
}

export { reader, algorithm, solver }
export default solver
