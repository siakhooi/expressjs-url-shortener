import ShortCode from '../src/data/ShortCode.mjs';
import config from '../src/config.mjs';

it('ShortCode/generate/+', () => {
  const s = ShortCode.generate();
  expect(s.length).toBe(config.CodeLength);
});
