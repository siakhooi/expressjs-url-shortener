import app from './src/app.mjs';

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
