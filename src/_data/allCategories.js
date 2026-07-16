const articles = require("./articles.js");

module.exports = () => {
  const all = articles();
  const catSet = new Set();
  all.forEach((a) => {
    (a.category || []).forEach((c) => {
      const val = typeof c === "string" ? c : c.value;
      if (val) catSet.add(val);
    });
  });
  return Array.from(catSet).sort();
};
