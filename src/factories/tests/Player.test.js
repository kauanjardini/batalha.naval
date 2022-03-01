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
