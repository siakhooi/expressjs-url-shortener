import Storage from '../../src/data/Storage.mjs';

it('Storage/()/+', () => {
  const s = new Storage();
  expect(s.links).toBeTruthy();
});
