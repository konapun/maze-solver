'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var type = {
  OPEN: '.',
  BLOCKED: '#',
  START: 'A',
  END: 'B'
};

/**
 * Reads a map file into an internal datastructure
 */

const readMaze = string => {
  let start = [-1, -1];
  let end = [-1, -1];
  const rows = string.trim().split(/\r?\n/g);
  const grid = rows.map((row, y) => [...row.trim()].map((cell, x) => {
    switch (cell) {
      case 'A':
        start = [x, y];
      // falls through

      case 'B':
        end = [x, y];
      // falls through

      case '.':
        return type.OPEN;

      case '#':
        return type.BLOCKED;

      default:
        throw new Error(`Unable to read maze: Unrecognized character ${cell}`);
    }
  }));
  return {
    start,
    end,
    grid
  };
};
var reader = {
  readMaze
};

/**
 * Adapted from https://www.laurentluce.com/posts/solving-mazes-using-python-simple-recursivity-and-a-search/
 */

function aStar(maze) {
  const height = maze.length;
  const width = height > 0 ? maze[0].length : 0;

  function getAdjacent(x, y) {
    const adjacent = [];

    if (x > 0) {
      adjacent.push([x - 1, y]);
    }

    if (x < width - 1) {
      adjacent.push([x + 1, y]);
    }

    if (y > 0) {
      adjacent.push([x, y - 1]);
    }

    if (y < height - 1) {
      adjacent.push([x, y + 1]);
    }

    return adjacent.filter(([x, y]) => maze[y][x] !== type.BLOCKED); // remove non-candidates
  }

  return {
    findPath(start, end) {
      let openSet = [start]; // cells to explore

      const closedSet = {}; // processed cells, stored in a hash for O(1) access

      const path = [];

      while (openSet.length > 0) {
        const currentCell = openSet.reduce((acc, cell) => acc && acc.f < cell.f ? acc : cell, null);

        if (currentCell === end) {
          console.log('FOUND!! return path');
        }
        closedSet[currentCell.toString()] = true;

        const adjacent = getAdjacent(...currentCell).filter(cell => !closedSet[cell.toString()]); // remove seen from candidates

        openSet = openSet.concat(adjacent);
      }

      return path;
    }

  };
}

function coordinate(x, y) {
  return {
    x,
    y,

    equals(coord) {
      return x === coord.x && y === coord.y;
    }

  };
}

function breadthFirst(maze) {
  const height = maze.length;
  const width = height > 0 ? maze[0].length : 0;

  function cloneMatrix(matrix) {
    return matrix.map(row => row.map(cell => cell));
  }

  function getAdjacent(x, y) {
    const adjacent = [];

    if (x > 0) {
      adjacent.push([x - 1, y]);
    }

    if (x < width - 1) {
      adjacent.push([x + 1, y]);
    }

    if (y > 0) {
      adjacent.push([x, y - 1]);
    }

    if (y < height - 1) {
      adjacent.push([x, y + 1]);
    }

    return adjacent;
  }

  return {
    findPath(start, end) {
      const matrix = cloneMatrix(maze);
      const paths = [[start]];
      matrix[start[1]][start[0]] = type.BLOCKED;

      while (paths.length > 0) {
        const path = paths.shift();
        const currentCoord = path[path.length - 1];
        const adjacents = getAdjacent(...currentCoord).filter(coordinate$$1 => matrix[coordinate$$1[1]][coordinate$$1[0]] !== type.BLOCKED);

        for (const adjacentCoord of adjacents) {
          if (coordinate(...adjacentCoord).equals(coordinate(...end))) {
            return [...path, end]; // The full solution
          }

          matrix[adjacentCoord[1]][adjacentCoord[0]] = type.BLOCKED; // ensure this node won't be reconsidered in the solution set

          paths.push([...path, adjacentCoord]);
        }
      }
    }

  };
}

/**
 * Find a path from start to end using a genetic algorithm.
 *
 * The domain is described in genetic terms by the following:
 * - Chromosome: A solution for selection via evolution. This is analogous to a
 *   chromosome in genetics in that it undergoes mutation every generation as we
 *   we approach evolutionary fitness. Here, our chromosome describes a path.
 * - Nucleotides: Nucleotides make up a chromosome and in this case describe all
 *   possible directions. We'll represent possible directions by the following:
 *     00: up
 *     01: down
 *     10: left
 *     11: right
 *  - Population: A population here is a population of chromosomes which are
 *    available for recombination to produce the next generation
 * @param {*} maze
 */

function geneticPathfinder(maze) {

  return {
    findPath(start, end) {
      return path;
    }

  };
}

var index = {
  A_STAR: aStar,
  BREADTH_FIRST: breadthFirst,
  GENETIC: geneticPathfinder
};

function solver(string) {
  const {
    grid,
    start,
    end
  } = reader.readMaze(string);
  return {
    solve(algorithm) {
      const solver = algorithm.call(null, grid);
      return solver.findPath(start, end);
    }

  };
}

exports.reader = reader;
exports.algorithm = index;
exports.solver = solver;
exports.default = solver;
