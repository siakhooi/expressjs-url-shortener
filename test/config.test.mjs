import config from '../src/config.mjs';

it('config/StorageFileName/+', () => {
  expect(config.StorageFileName).toBeTruthy();
});

it('config/CodeLength/+', () => {
  expect(config.CodeLength).toBeTruthy();
});
