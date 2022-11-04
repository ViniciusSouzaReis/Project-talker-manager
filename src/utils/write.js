const fs = require('fs').promises;
const path = require('path');

async function write(obj) {
  const data = JSON.stringify(obj);
  await fs.writeFile(path.resolve(__dirname, '../talker.json'), data);
}

module.exports = write;
