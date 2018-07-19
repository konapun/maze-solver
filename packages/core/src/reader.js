import type from './types'

/**
 * Reads a map file into an internal datastructure
 */
export const readMaze = string => {
  let start = [-1, -1]
  let end = [-1, -1]

  const rows = string.trim().split(/\r?\n/g)
  const grid = rows.map((row, y) => (
    [...(row.trim())].map((cell, x) => {
      switch (cell) {
        case 'A':
          start = [x, y]
          // falls through
        case 'B':
          end = [x, y]
          // falls through
        case '.':
          return type.OPEN
        case '#':
          return type.BLOCKED
        default:
          throw new Error(`Unable to read maze: Unrecognized character ${cell}`)
      }
    })
  ))

  return { start, end, grid }
}

export default {
  readMaze
}
