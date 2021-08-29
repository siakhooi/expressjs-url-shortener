import ShortCode from './data/ShortCode.mjs';
import URLTester from './data/URLTester.mjs';

const cutURL = (req, res) => {
  if (req.body.url === undefined || !URLTester.isValid(req.body.url)) {
    console.log('Bad Request: %s', req.body);
    return res.status(400).send('Bad request');
  }
  const code = ShortCode.generate();

  console.log('cutURL /%s from %s', code, req.body.url);

  req.app.locals.Storage.add(req.body.url, code);

  req.app.locals.Storage.write();
  return res.status(200).json({
    code,
  });
};

export default cutURL;
