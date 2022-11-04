function watchedAtValidation(req, res, next) {
  const { talk: { watchedAt } } = req.body;
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  const checkDate = dateRegex.test(watchedAt);

  if (!watchedAt || watchedAt.length === 0) {
    return res.status(400).json({ message: 'O campo \"watchedAt\" é obrigatório' });
  }
  
  if (checkDate === false) {
    return res.status(400).json({ message: 'O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\"' });
  }

  return next();
}

module.exports = watchedAtValidation;
