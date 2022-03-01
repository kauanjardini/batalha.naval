import Player from "../Player";

test("Jogador criado possui nome", () => {
  expect(Player("fulano", false).name).toBe("fulano");
});

test("Jogador tipo PC possui funcao makeMove", () => {
  expect(Player("pc", true).makeMove).not.toBe(undefined);
});

test("Jogador tipo pessoa nao possui funcao makeMove", () => {
  expect(Player("fulano", false).makeMove).toBe(undefined);
});

test("Jogador tipo PC possui funcao randCoordinates", () => {
  expect(Player("pc", true).randCoordinates).not.toBe(undefined);
});

test("Jogador tipo pessoa possui funcao randCoordinates", () => {
  expect(Player("fulano", false).randCoordinates).not.toBe(undefined);
});

test("Funcao randCoordinates retorna valores de 0 a 9", () => {
  const p = Player("fulano", false);
  expect(p.randCoordinates()[0]).toBeGreaterThanOrEqual(0);
  expect(p.randCoordinates()[1]).toBeGreaterThanOrEqual(0);
  expect(p.randCoordinates()[0]).toBeLessThanOrEqual(9);
  expect(p.randCoordinates()[1]).toBeLessThanOrEqual(9);
});

test("Jogador possui tipo", () => {
  expect(Player("fulano", false).type).not.toBe(undefined);
});

test("Jogador humano possui tipo 'human'", () => {
  expect(Player("fulano", false).type).toBe("human");
});

test("Jogador pc possui tipo 'code'", () => {
  expect(Player("pc", true).type).toBe("code");
});

test("O tipo do jogador nao pode ser reescrito", () => {
  const p1 = Player("fulano", false);
  expect(() => {
    p1.type = "person";
  }).toThrow();

  const p2 = Player("pc", true);
  expect(() => {
    p2.type = "machine";
  }).toThrow();
});

test("Jogador pc mira em peca adjacente quando tem acerto anterior", () => {
  const p1 = Player("pc", true);
  const c1 = p1.makeMove();
  const c2 = p1.makeMove(true, false, true);
  expect([c2[0] - 1, c2[0], c2[0] + 1]).toContain(c1[0]);
  expect([c2[1] - 1, c2[1] + 1]).toContain(c1[1]);

  const c3 = p1.makeMove();
  const c4 = p1.makeMove(true, true, false);
  expect([c4[0] - 1, c4[0] + 1]).toContain(c3[0]);
  expect([c4[1] - 1, c4[1], c4[1] + 1]).toContain(c3[1]);
});
