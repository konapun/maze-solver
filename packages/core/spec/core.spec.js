import test from 'ava'
import mazeSolver, { algorithm, reader } from '../dist/index'

const mazeString = `
  ##########
  #A...#...#
  #.#.##.#.#
  #.#.##.#.#
  #.#....#B#
  #.#.##.#.#
  #....#...#
  ##########
`
test('Builds a maze from a valid maze string', t => {
  const maze = reader.readMaze(mazeString)
  t.deepEqual(maze.start, [1, 1], 'Maze has correct start')
  t.deepEqual(maze.end, [8, 4], 'Maze has correct end')
})

test('Throws error on reading invalid maze string', t => {
  const string = `
    ##########
    #A...O...#
    #.#.##.#.#
    #.#.##.#.#
    #.#....#B#
    #.#.##.#.#
    #....#...#
    ##########
  `

  try {
    const maze = reader.readMaze(string)
  } catch (e) {
    t.pass()
  }
})

test('Finds path using the Breadth First algorithm', t => {
  const path = mazeSolver(mazeString).solve(algorithm.BREADTH_FIRST)
  const solution = [ [ 1, 1 ],
  [ 2, 1 ],
  [ 3, 1 ],
  [ 3, 2 ],
  [ 3, 3 ],
  [ 3, 4 ],
  [ 4, 4 ],
  [ 5, 4 ],
  [ 6, 4 ],
  [ 6, 5 ],
  [ 6, 6 ],
  [ 7, 6 ],
  [ 8, 6 ],
  [ 8, 5 ],
  [ 8, 4 ] ]

  t.deepEqual(path, solution, 'Finds the correct solution')
})
