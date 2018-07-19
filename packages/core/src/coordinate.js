function coordinate (x, y) {
  return {
    x,
    y,

    equals (coord) {
      return x === coord.x
        && y === coord.y
    }
  }
}

export default coordinate
