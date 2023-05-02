test("flexbox", () => {
  const aim = "efficient layout";
  expect(aim).toMatch(/layout/);
});

test("first introduction", () => {
  const year = "2009";
  const from = "W3C";
  expect(year + from).toMatch(/2009/);
});

test("main idea", () => {
  const fill = "space";
  const alter = "item's width and height";
  const prevent = "overflow";
  expect(fill + alter + prevent).toMatch(/overflow/);
});

test("flexbox layout", () => {
  const opposite = "regular layout";
  const is = "direction agnostic";
  expect(opposite + is).toMatch(/direction/);
});

test("appropriate", () => {
  const suited = "small-scale layout";
  expect(suited).toMatch(/small-scale/);
});
