import type from '../types'
import coordinate from '../coordinate'

function breadthFirst (maze) {
  const height = maze.length
  const width = height > 0 ? maze[0].length : 0

  function cloneMatrix(matrix) {
    return matrix.map(row => row.map(cell => cell))
  }

  function getAdjacent (x, y) {
    const adjacent = []

    if (x > 0) {
      adjacent.push([x-1, y])
    }
    if (x < width - 1) {
      adjacent.push([x+1, y])
    }
    if (y > 0) {
      adjacent.push([x, y-1])
    }
    if (y < height - 1) {
      adjacent.push([x, y+1])
    }

    return adjacent
  }

  return {
    findPath (start, end) {
      const matrix = cloneMatrix(maze)

      const paths = [[start]]
      matrix[start[1]][start[0]] = type.BLOCKED
      while (paths.length > 0) {
        const path = paths.shift()
        const currentCoord = path[path.length - 1]

        const adjacents = getAdjacent(...currentCoord).filter(coordinate => matrix[coordinate[1]][coordinate[0]] !== type.BLOCKED)
        for (const adjacentCoord of adjacents) {
          if (coordinate(...adjacentCoord).equals(coordinate(...end))) {
            return [ ...path, end ] // The full solution
          }

          matrix[adjacentCoord[1]][adjacentCoord[0]] = type.BLOCKED // ensure this node won't be reconsidered in the solution set
          paths.push([ ...path, adjacentCoord])
        }
      }
    }
  }
}

export default breadthFirst
