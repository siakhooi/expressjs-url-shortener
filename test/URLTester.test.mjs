import URLTester from '../src/data/URLTester.mjs';

it.each([
  'http://www.malaysia.com',
  'http://www.singapore.net',
  'https://brunei.io',
])('URLTester/+', (value) => {
  expect(URLTester.isValid(value)).toBe(true);
});

it.each([
  'asdfja;sfja;sfas',
  'ftp://www.singapore.net',
  'ssh://indonesia',
])('URLTester/-', (value) => {
  expect(URLTester.isValid(value)).toBe(false);
});
