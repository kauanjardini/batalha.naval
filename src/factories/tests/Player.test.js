import Player from "../Player";

test("Jogador criado possui nome", () => {
  expect(Player("fulano", false).name).toBe("fulano");
});
