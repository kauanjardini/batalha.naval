import Gameboard from "../Gameboard";

let g;
beforeEach(() => {
  g = Gameboard();
});

test("O Gameboard posiciona uma embarcacao na horizontal", () => {
  const s = { length: 4 };
  expect(g.addShip(s, [0, 0], false)).toBe(true);
});

test("O Gameboard posiciona uma embarcacao na vertical", () => {
  const s = { length: 4 };
  expect(g.addShip(s, [0, 0], true)).toBe(true);
});

test("O Gameboard emite erro quando embarcacao excede espaco na horizontal", () => {
  const s = { length: 4 };
  expect(() => g.addShip(s, [8, 0], false)).toThrow();
});

test("O Gameboard emite erro quando embarcacao excede espaco na vertical", () => {
  const s = { length: 4 };
  expect(() => g.addShip(s, [0, 8], true)).toThrow();
});
