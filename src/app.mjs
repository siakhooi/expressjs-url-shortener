import express from 'express';
import Storage from './data/Storage.mjs';
import cutURL from './cutURL.mjs';
import redirect from './redirect.mjs';

const app = express();

app.locals.Storage = new Storage();
app.locals.Storage.init();

app.use(express.json());
app.post('/cut', cutURL);

app.get('/[a-f0-9]{5}', redirect);

export default app;
