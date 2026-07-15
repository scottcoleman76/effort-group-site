const articles = require("./articles.js");

module.exports = () => {
  const all = articles();
  const tagSet = new Set();
  all.forEach((a) => (a.tags || []).forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
};
