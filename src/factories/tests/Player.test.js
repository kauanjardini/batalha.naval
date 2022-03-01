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
