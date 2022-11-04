const writeFile = require('./write');
const readerFile = require('./reader');

async function deleteFile(id) {
  const data = await readerFile();
  const newData = await data.filter((element) => element.id !== Number(id));
  console.log(newData);
  writeFile(newData);
}

module.exports = deleteFile;
