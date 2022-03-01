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
