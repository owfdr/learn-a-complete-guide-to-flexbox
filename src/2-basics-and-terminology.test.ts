test("flexbox is", () => {
  const whole = "whole module";
  const many = "many properties";
  expect(whole + many).toMatch(/properties/);
});

test("properties", () => {
  const some = "set on the container";
  const others = "set on the children".split("children").join("flex items");
  expect([some, others]).toHaveLength(2);
});

test("regular layout", () => {
  const basedOn = "block and inline flow directions";
  expect(basedOn).toMatch(/block and inline/);
});

test("flex layout", () => {
  const basedOn = "flex flow directions";
  expect(basedOn).toMatch(/flex flow/);
});

test("main axis", () => {
  const primary = "primary axis which flex items are laid out";
  const not = "not necessarily horizontal";
  const depends = "depends on the flex-direction property";
  expect(primary + not + depends).toMatch(/flex-direction/);
});

test("cross axis", () => {
  const perpendicular = "perpendicular to the main axis";
  expect(perpendicular).toMatch(/main axis/);
});

test("main start, main end", () => {
  const description = "start and end of the main axis";
  expect(description).toMatch(/main axis/);
});

test("cross start, main end", () => {
  const description = "start and end of the cross axis";
  expect(description).toMatch(/cross axis/);
});

test("main size", () => {
  const flex = "flex item's width or height";
  const whichever = "whichever is in the main dimension";
  expect(flex + whichever).toMatch(/main dimension/);
});

test("cross size", () => {
  const flex = "flex item's width or height";
  const whichever = "whichever is in the cross dimension";
  expect(flex + whichever).toMatch(/cross dimension/);
});
