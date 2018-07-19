import type from '../types'

/**
 * Adapted from https://www.laurentluce.com/posts/solving-mazes-using-python-simple-recursivity-and-a-search/
 */
function aStar (maze) {
  const height = maze.length
  const width = height > 0 ? maze[0].length : 0

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

    return adjacent.filter(([x, y]) => maze[y][x] !== type.BLOCKED) // remove non-candidates
  }

  function calculateCost (from, to) {
    const [x1, y1] = from
    const [x2, y2] = to
    const costMultiplier = 10

    return (Math.abs(x1 - x2) + Math.abs(y1 - y2)) * costMultiplier
  }

  return {
    findPath (start, end) {
      const [startX, startY] = start
      const [endX, endY] = end

      let openSet = [start] // cells to explore
      const closedSet = {} // processed cells, stored in a hash for O(1) access

      const path = []
      while (openSet.length > 0) {
        const currentCell = openSet.reduce((acc, cell) => acc && acc.f < cell.f ? acc : cell, null)
        if (currentCell === end) {
          // found; TODO:
        }
        const costFromStart = calculateCost(start, currentCell)
        const costToEnd = calculateCost(currentCell, end)
        const costSum = costFromStart + costToEnd

        closedSet[currentCell.toString()] = true
        if (costFromStart > 0) { // not starting cell

        }

        const adjacent = getAdjacent(...currentCell).filter(cell => !closedSet[cell.toString()]) // remove seen from candidates
        openSet = openSet.concat(adjacent)
      }

      return path
    }
  }
}

export default aStar
