const fs = require('fs').promises;
const path = require('path');

async function reader() {
  const read = await fs.readFile(path.resolve(__dirname, '../talker.json'));
  const data = JSON.parse(read);
  return data;
}

module.exports = reader;
