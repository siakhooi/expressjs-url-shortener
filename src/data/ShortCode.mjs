import config from '../config.mjs';

const ShortCode = {
  generate: () => 'x'.repeat(config.CodeLength).replace(/x/g, () => Math.floor(Math.random() * 16).toString(16)),
};

export default ShortCode;
