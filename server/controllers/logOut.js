module.exports = (req, res) => {
  res.clearCookie('access_token').json({ msg: 'Signed out succefully' });
};
