const articles = require("./articles.js");

module.exports = () => {
  const all = articles();
  const catSet = new Set();
  all.forEach((a) => {
    (a.category || []).forEach((c) => catSet.add(c));
  });
  return Array.from(catSet).sort();
};
