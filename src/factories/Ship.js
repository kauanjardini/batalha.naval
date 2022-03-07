function Ship(size = 1, name = "") {
  if (Number.isNaN(size)) {
    throw new Error("The size of the shit must be an integer");
  } else if (size < 1) {
    throw new Error("Ships must have a size of at least 1");
  } else if (!Number.isInteger(size)) {
    throw new Error("The size of the shit must be an integer");
  }

  let sunk = false;
  const length = size;
  const sectionsActive = [];

  for (let i = 0; i < size; i += 1) {
    sectionsActive.push(true);
  }

  function hit(position) {
    if (position < 0 || position > length - 1) {
      throw new Error("'position' must be a number from 0 up to the ship size");
    }

    if (sectionsActive[position]) {
      sectionsActive[position] = false;
      sunk = true;
      for (let i = 0; i < length; i += 1) {
        if (sectionsActive[i]) {
          sunk = false;
        }
      }
      return true;
    }
    return false;
  }

  function isSunk() {
    return sunk;
  }

  function sections() {
    return [...sectionsActive];
  }
  return { name, length, hit, isSunk, sections };
}

export default Ship;
