function rateValidation(req, res, next) {
  const { talk: { rate } } = req.body;

  const regex = /^[-+]?\d+$/;
  const checkNumber = regex.test(rate);

  if (rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  
  if (rate < 1 || rate > 5 || checkNumber === false) { 
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  return next();
}

module.exports = rateValidation;
