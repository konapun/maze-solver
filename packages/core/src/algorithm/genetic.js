import type from '../types'

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
function geneticPathfinder (maze) {
  function crossover (chromA, chromB) {

  }

  function determineFitness (chrom) {

  }

  return {
    findPath (start, end) {

      return path
    }
  }
}

export default geneticPathfinder
