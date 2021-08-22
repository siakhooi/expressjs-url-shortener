import fs from 'fs';

const StorageFileName = 'storage.json';

const Storage = {
  data: fs.existsSync(StorageFileName)
    ? JSON.parse(fs.readFileSync(StorageFileName, 'utf8'))
    : JSON.parse(
      fs.readFileSync(StorageFileName,
        fs.appendFileSync(StorageFileName, '{ "links": [] }')
      )
    ),
  write: () => (fs.existsSync(StorageFileName)
    ? fs.writeFileSync(StorageFileName, JSON.stringify(Storage.data, null, 2))
    : fs.appendFileSync(StorageFileName, JSON.stringify(Storage.data, null, 2))),
};

export default Storage;
