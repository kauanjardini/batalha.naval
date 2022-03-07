import Ship from "../Ship";

test("Cria embarcacao de comprimento 4", () => {
  expect(Ship(4).length).toBe(4);
});

test("Emite erro ao criar embarcacao menor que 1", () => {
  expect(() => Ship(0)).toThrow();
});

test("Emite erro ao criar embarcacao de comprimento negativo", () => {
  expect(() => Ship(-2)).toThrow();
});

test("Emite erro ao criar embarcacao de comprimento tipo string", () => {
  expect(() => Ship("3")).toThrow();
});

test("A funcao hit retorna true quando ataque é feito", () => {
  const s = Ship(3);
  expect(s.hit(0)).toBe(true);
});

test("A funcao hit retorna false quando ataque ja foi feito antes", () => {
  const s = Ship(3);
  s.hit(0);
  expect(s.hit(0)).toBe(false);
});

test("A funcao hit emite erro se posicao nao existe", () => {
  const s = Ship(3);
  expect(() => s.hit(-1)).toThrow();
  expect(() => s.hit(3)).toThrow();
});

test("A funcao sections mostra as sessoes da embarcacao", () => {
  const s = Ship(3);
  expect(s.sections()).toEqual([true, true, true]);
  s.hit(0);
  expect(s.sections()).toEqual([false, true, true]);
  s.hit(1);
  expect(s.sections()).toEqual([false, false, true]);
  s.hit(2);
  expect(s.sections()).toEqual([false, false, false]);
});

test("A funcao hit atualiza as secoes da embarcacao", () => {
  const s = Ship(3);
  s.hit(1);
  expect(s.sections()).toEqual([true, false, true]);
});

test("A funcao isSunk mostra que o navio afundou", () => {
  const s = Ship(3);
  s.hit(0);
  s.hit(1);
  s.hit(2);
  expect(s.isSunk()).toBe(true);
});
