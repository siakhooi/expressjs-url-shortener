import Storage from '../../src/data/Storage.mjs';

it('Storage/get/1/+', () => {
  const s = new Storage();
  s.add('https://www.malaysia.com', 'adfsf');

  expect(s.get('adfsf')).toBe('https://www.malaysia.com');
});

it('Storage/get/1/-', () => {
  const s = new Storage();
  s.add('https://www.malaysia.com', 'adfsf');

  expect(s.get('adfxx')).toBe(null);
});
