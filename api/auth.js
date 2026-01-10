const { auth } = require("@openlab/vercel-netlify-cms-github");

module.exports = (req, res) => {
  return auth(req, res);
};
