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

test("O gameboard emite erro quando ja ha uma embarcacao posicionada", () => {
  const s = { length: 4 };

  const s2 = { length: 3 };
  g.addShip(s, [0, 0], false);
  expect(() => g.addShip(s2, [0, 0], false)).toThrow();
});

test("O gameboard retorna 'hit' quando ataca um navio", () => {
  const s = { length: 4, hit: () => true };
  g.addShip(s, [0, 0], false);
  expect(g.receiveAttack([0, 0])).toBe("hit");
});

test("O gameboard retorna 'miss' quando erra o ataque", () => {
  const s = { length: 4, hit: () => true };
  g.addShip(s, [0, 0], false);
  expect(g.receiveAttack([0, 1])).toBe("miss");
});

test("O gameboard retorna 'already attacked' quando ataca lugar ja atacado", () => {
  const s = { length: 4, hit: () => true };
  g.addShip(s, [0, 0], false);
  g.receiveAttack([0, 0]);
  expect(g.receiveAttack([0, 0])).toBe("already attacked");
});

test("O gameboard registra os ataques acertados", () => {
  const s = { length: 4, hit: () => true };
  g.addShip(s, [0, 0], false);
  g.receiveAttack([0, 0]);
  expect(g.board()[0][0].attacked).toBe(true);
  expect(g.board()[0][0].hit).toBe(true);
});

test("O gameboard registra os ataques errados", () => {
  const s = { length: 4, hit: () => true };
  g.addShip(s, [0, 0], false);
  g.receiveAttack([4, 4]);
  expect(g.board()[4][4].attacked).toBe(true);
  expect(g.board()[4][4].hit).toBe(false);
});

test("O gameboard relata que nenhuma embarcacao afundou", () => {
  const s1 = { length: 1, isSunk: () => false };
  const s2 = { length: 1, isSunk: () => false };
  g.addShip(s1, [0, 0], false);
  g.addShip(s2, [1, 0], false);
  expect(g.allShipsSunked()).toBe(false);
});

test("O gameboard relata que nem todas as embarcacoes afundaram", () => {
  const s1 = { length: 1, isSunk: () => false, hit: () => true };
  const s2 = { length: 1, isSunk: () => true, hit: () => true };
  g.addShip(s1, [0, 0], false);
  g.addShip(s2, [1, 0], false);
  g.receiveAttack([1, 0]);
  expect(g.allShipsSunked()).toBe(false);
});

test("O gameboard relata que todas as embarcações afundaram", () => {
  const s1 = { length: 1, isSunk: () => true, hit: () => true };
  const s2 = { length: 1, isSunk: () => true, hit: () => true };
  g.addShip(s1, [0, 0], false);
  g.addShip(s2, [1, 0], false);
  g.receiveAttack([0, 0]);
  g.receiveAttack([1, 0]);
  expect(g.allShipsSunked()).toBe(true);
});

test("A funcao clear reinicia o tabuleiro apos adicionar embracacoes", () => {
  const s1 = { length: 1, isSunk: () => true, hit: () => true };
  const s2 = { length: 1, isSunk: () => true, hit: () => true };
  g.addShip(s1, [0, 0], false);
  g.addShip(s2, [1, 0], false);
  g.clear();
  expect(g.board()[1][0].hasShip).toBe(false);
});

test("A funcao clear reinicia o tabuleiro apos jogada", () => {
  const s1 = { length: 1, isSunk: () => true, hit: () => true };
  const s2 = { length: 1, isSunk: () => true, hit: () => true };
  g.addShip(s1, [0, 0], false);
  g.addShip(s2, [1, 0], false);
  g.receiveAttack([0, 0]);
  g.clear();
  expect(g.board()[0][0].hasShip).toBe(false);
});
