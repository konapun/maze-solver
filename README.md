This repository contains a partially finished solution to pathfinding problem.

The project structure consists of the following:
  * **@maze-solver/core** - This package contains the main functionality. There
    is a reader for reading in an ASCII maze and converting it to an internal
    datastructure and multiple algorithms for finding a path from point A to
    point B
    * **Breadth-first**
    * **A*** (Unfinished)
    * **Genetic** (Unfinished)
  * **@maze-solver/api** - This package exposes the functionality from the core
    as a REST API with the following routes:
    * POST `/api/maze/upload` - Upload a maze
    * GET `/api/maze/solve/:id` - Get a solution for a maze
    * GET `/api/maze/algorithm/` - Get a list of available algorithms for solving a maze
  * **@maze-solver/ui** - UI for maze solving using the @maze-solver/api.
