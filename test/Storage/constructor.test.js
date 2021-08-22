import Storage from '../../src/data/Storage';

it('Storage/()/+', () => {
  const s = new Storage();
  expect(s.links).toBeTruthy();
});
