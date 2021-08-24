const cutURL = (req, res) => {
  const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/;

  if (req.body.url === undefined || !urlRegex.test(req.body.url)) {
    return res.status(400).send('Bad request');
  }

  const code = 'xxxxx'.replace(/x/g, () => Math.floor(Math.random() * 16).toString(16));

  console.log('cutURL /%s from %s', code, req.body.url);

  req.app.locals.Storage.add(req.body.url, code);
  req.app.locals.Storage.write();

  return res.status(200).send({
    code,
  });
};

export default cutURL;
