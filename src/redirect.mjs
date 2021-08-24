const redirect = (req, res) => {
  const code = req.url.replace(/\//, '');
  let found = false;

  req.app.locals.Storage.links.forEach((linkObject) => {
    if (linkObject.code === code) {
      found = true;
      console.log('redirect /%s to %s', code, linkObject.url);
      res.redirect(linkObject.url);
    }
  });

  if (!found) res.status(404).send('URL not found');
};

export default redirect;
