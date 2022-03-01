function Player(name = "Player", computer = false) {
  let type;
  const playerObj = {};
  const usedCoordinates = [];

  function randNumber(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function randCoordinates() {
    const x = randNumber();
    const y = randNumber();
    return [x, y];
  }

  // terponsible for checking if pair of coordinates are equal
  function equalCoors(a, b) {
    if (a[0] === b[0] && a[1] === b[1]) {
      return true;
    }
    return false;
  }

  function inRange(x, range = [0, 9]) {
    if (x >= range[0] && x <= range[1]) {
      return true;
    }
    return false;
  }

  let coors = randCoordinates();
  function makeMove(lastWasHit = false, triedX = false, triedY = false) {
    if (lastWasHit) {
      // determine if it will shoot on x or y axis
      let xAxis;
      if (triedX) {
        xAxis = 0;
      } else if (triedY) {
        xAxis = 1;
      } else {
        xAxis = randNumber(0, 1);
      }

      // last coordinates which were a hit
      const lastCoors = usedCoordinates[usedCoordinates.length - 1];
      let x = lastCoors[0];
      let y = lastCoors[1];

      // determine if it will first try to add or subtract
      const add = randNumber(0, 1);

      // y changes, x stays the same
      if (xAxis === 1) {
        y += add === 1 ? 1 : -1;
        if (!inRange(y) || usedCoordinates.some((c) => equalCoors(c, [x, y]))) {
          y += add === 0 ? 2 : -2;
          if (
            !inRange(y) ||
            usedCoordinates.some((c) => equalCoors(c, [x, y]))
          ) {
            if (triedY) {
              return makeMove();
            }
            return makeMove(true, true, false);
          }
          return [x, y];
        }
        return [x, y];
      }

      // x changes, y stays the same
      x += add === 1 ? 1 : -1;
      if (!inRange(x) || usedCoordinates.some((c) => equalCoors(c, [x, y]))) {
        x += add === 0 ? 2 : -2;
        if (!inRange(x) || usedCoordinates.some((c) => equalCoors(c, [x, y]))) {
          if (triedX) {
            return makeMove();
          }
          return makeMove(true, false, true);
        }
        return [x, y];
      }
      return [x, y];
    }

    // eslint-disable-next-line no-loop-func
    while (usedCoordinates.some((c) => equalCoors(c, coors))) {
      coors = randCoordinates();
    }
    usedCoordinates.push(coors);
    return coors;
  }

  if (computer) {
    type = "code";
    playerObj.makeMove = makeMove;
  } else {
    type = "human";
  }

  playerObj.name = name;
  playerObj.randCoordinates = randCoordinates;
  Object.defineProperties(playerObj, {
    type: { get: () => type },
  });
  return playerObj;
}

export default Player;
