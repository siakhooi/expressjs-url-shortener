import express from 'express';
import Storage from './src/data/Storage.mjs';
import cutURL from './src/cutURL.mjs';
import redirect from './src/redirect.mjs';

const app = express();
const port = 8080;

app.locals.Storage = new Storage();
app.locals.Storage.init();

// if (Storage.data.links === undefined) {
//   Storage.data.links = [];
//   Storage.write();
// }
app.use(express.json());
app.post('/cut', cutURL);

app.get('/[a-f0-9]{5}', redirect);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
