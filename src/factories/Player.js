function Player(name = "Player", computer = false) {
  let type;
  const playerObj = {};
  const usedCoordinates = [];

  function randCoordinates() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }

  // terponsible for checking if pair of coordinates are equal
  function equalCoors(a, b) {
    if (a[0] === b[0] && a[1] === b[1]) {
      return true;
    }
    return false;
  }

  let coors = randCoordinates();
  function makeMove() {
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
