const writeFile = require('./write');
const readerFile = require('./reader');

async function edit(req) {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const data = await readerFile();

  const newData = [...data].map((element) => {
    if (element.id === Number(id)) {
      return {
        ...element,
        name,
        age,
        talk,
      };
    }
    return element;
  });
  writeFile(newData);
  return newData.find((element) => element.id === Number(id));  
}

module.exports = edit;
