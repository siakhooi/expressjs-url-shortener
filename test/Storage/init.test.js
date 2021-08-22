import fs from 'fs';
import Storage from '../../src/data/Storage';
import SampleStorageData from '../SampleStorageData';

it('Storage/init/notExists', () => {
  jest.spyOn(fs, 'existsSync').mockReturnValueOnce(false);
  const readFileSync = jest.spyOn(fs, 'readFileSync');

  const s = new Storage();
  s.init();
  expect(s.links).toBeTruthy();
  expect(s.links.length).toBe(0);
  expect(readFileSync).not.toBeCalled();
});

it('Storage/init/exists', () => {
  jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true);
  jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(JSON.stringify(SampleStorageData.SampleStorageData1));

  const s = new Storage();
  s.init();
  expect(s.links).toStrictEqual(SampleStorageData.SampleStorageData1.links);
});
