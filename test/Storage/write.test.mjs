import fs from 'fs';
import Storage from '../../src/data/Storage.mjs';

it('Storage/write/notExists', () => {
  fs.existsSync = jest.fn().mockReturnValueOnce(false);
  fs.writeFileSync = jest.fn();
  fs.appendFileSync = jest.fn();

  const s = new Storage();
  s.write();
  expect(fs.writeFileSync).not.toBeCalled();
  expect(fs.appendFileSync).toBeCalled();
});

it('Storage/write/exists', () => {
  fs.existsSync = jest.fn().mockReturnValueOnce(true);
  fs.writeFileSync = jest.fn();
  fs.appendFileSync = jest.fn();

  const s = new Storage();
  s.write();
  expect(fs.writeFileSync).toBeCalled();
  expect(fs.appendFileSync).not.toBeCalled();
});
