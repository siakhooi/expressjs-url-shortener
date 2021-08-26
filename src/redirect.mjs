const redirect = (req, res) => {
  const code = req.url.replace(/\//, '');

  const url = req.app.locals.Storage.get(code);

  if (url) {
    console.log('redirect /%s to %s', code, url);
    res.redirect(url);
  } else {
    res.status(404).send('URL not found');
  }
};

export default redirect;
