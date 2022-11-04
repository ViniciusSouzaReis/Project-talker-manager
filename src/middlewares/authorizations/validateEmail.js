function validateEmail(req, res, next) {
  const { email } = req.body;
  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const validation = regex.test(email);

  if (!email || email.length === 0) {
    return res.status(400).json({ message: 'O campo \"email\" é obrigatório' });
  }

  if (validation === false) {
    return res.status(400).json({ message: 'O \"email\" deve ter o formato \"email@email.com\"' });
  }

  return next();
}

module.exports = validateEmail;
