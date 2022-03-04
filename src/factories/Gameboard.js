function Gameboard() {
  let gameboard;

  function clear() {
    gameboard = [];
    for (let i = 0; i < 10; i += 1) {
      const arr = [];
      for (let j = 0; j < 10; j += 1) {
        const obj = {
          ship: {},
          shipPosition: -1,
          hasShip: false,
          attacked: false,
          hit: false,
        };
        arr.push(obj);
      }
      gameboard.push(arr);
    }
  }

  // initialize gameboard
  clear();

  function addShip(ship, coordinates, horizontally) {
    const x = coordinates[0];
    const y = coordinates[1];

    // check if ship doesn't fit
    if (horizontally) {
      if (ship.length - 1 + y > 9) {
        throw new Error("The ship exceeds the length of the board");
      }
    } else if (ship.length - 1 + x > 9) {
      throw new Error("The ship exceeds the height of the board");
    }

    // check if there's already a hip in the space
    for (let i = 0; i < ship.length; i += 1) {
      if (horizontally) {
        if (gameboard[x][y + i].hasShip) {
          throw new Error("There's already a ship placed on this space");
        }
      } else if (gameboard[x + i][y].hasShip) {
        throw new Error("There's already a ship placed on this space");
      }
    }

    // add ship
    for (let i = 0; i < ship.length; i += 1) {
      if (horizontally) {
        gameboard[x][y + i].hasShip = true;
        gameboard[x][y + i].ship = ship;
        gameboard[x][y + i].shipPosition = i;
      } else {
        gameboard[x + i][y].hasShip = true;
        gameboard[x + i][y].ship = ship;
        gameboard[x + i][y].shipPosition = i;
      }
    }

    return true;
  }

  function board() {
    return [...gameboard];
  }

  function receiveAttack(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    if (gameboard[x][y].attacked) {
      return "already attacked";
    }

    gameboard[x][y].attacked = true;
    if (gameboard[x][y].hasShip) {
      gameboard[x][y].hit = true;
      gameboard[x][y].ship.hit(gameboard[x][y].shipPosition);
      return "hit";
    }
    return "miss";
  }

  function allShipsSunked() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (gameboard[i][j].hasShip) {
          if (!gameboard[i][j].ship.isSunk()) {
            return false;
          }
        }
      }
    }

    return true;
  }

  return { addShip, board, clear, receiveAttack, allShipsSunked };
}

export default Gameboard;
