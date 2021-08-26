import fs from 'fs';
import config from '../config.mjs';

class Storage {
  constructor() {
    this.links = [];
  }

  init() {
    if (fs.existsSync(config.StorageFileName)) {
      this.links = JSON.parse(fs.readFileSync(config.StorageFileName, 'utf8')).links;
    }
  }

  write() {
    if (fs.existsSync(config.StorageFileName)) {
      fs.writeFileSync(config.StorageFileName, JSON.stringify({ links: this.links }, null, 2));
    } else {
      fs.appendFileSync(config.StorageFileName, JSON.stringify({ links: this.links }, null, 2));
    }
  }

  add(url, code) {
    this.links.push({
      url,
      code,
    });
  }

  get(code) {
    for (let i = 0; i < this.links.length; i++) {
      if (this.links[i].code === code) return this.links[i].url;
    }
    return null;
  }
}

export default Storage;
