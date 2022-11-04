const express = require('express');
const readerFile = require('../utils/reader');
const writeFile = require('../utils/write');
const editFile = require('../utils/edit');
const deleteFile = require('../utils/delete');
const tokenValidator = require('../middlewares/tokenValidator/tokenValidator');
const nameValidator = require('../middlewares/talkerValidators/nameValidator');
const ageValidator = require('../middlewares/talkerValidators/ageValidator');
const talkValidator = require('../middlewares/talkerValidators/talkValidator');
const watchedAtValidator = require('../middlewares/talkerValidators/watchedAtValidator');
const rateValidator = require('../middlewares/talkerValidators/rateValidator');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await readerFile();
  if (data.length === 0) {
    const newReturn = [];
    return res.status(200).json(newReturn);
  } 
    return res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readerFile();
  const filterData = data.find((person) => person.id === Number(id));
  if (!filterData) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } 
    return res.status(200).json(filterData);
});

router.post('/',
  tokenValidator,
  nameValidator,
  ageValidator,
  talkValidator,
  watchedAtValidator,
  rateValidator,
  async (req, res) => {
    const { name, age, talk } = req.body;
    const data = await readerFile();

    const dataToInsert = {
      id: data.length + 1,
      name,
      age,
      talk,
    };
    data.push(dataToInsert);
    writeFile(data);

    return res.status(201).json(dataToInsert);
});

router.put('/:id',
  tokenValidator,
  nameValidator,
  ageValidator,
  talkValidator,
  watchedAtValidator,
  rateValidator,
  async (req, res) => {
    const data = await editFile(req);
    return res.status(200).json(data);
});

router.delete('/:id', tokenValidator, async (req, res) => {
  const { id } = req.params;
  await deleteFile(id);
  return res.status(204).json({ blink: 'lin' });
});

module.exports = router;