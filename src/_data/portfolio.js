const fs = require("fs");
const path = require("path");

// Display order of the portfolio sections. A piece whose category is not in
// this list still renders, in an "Other work" group at the end.
const CATEGORY_ORDER = [
  "Brand Systems",
  "Campaigns & Social Strategy",
  "Editorial & Information Design",
  "Print & Poster"
];

module.exports = () => {
  const dir = path.join(__dirname, "..", "content", "portfolio");
  if (!fs.existsSync(dir)) return { items: [], groups: [] };

  const items = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")))
    .filter((p) => !p.draft)
    .sort((a, b) => (a.order || 999) - (b.order || 999));

  const groups = [];
  const seen = new Set();
  CATEGORY_ORDER.forEach((cat) => {
    const inCat = items.filter((p) => p.category === cat);
    inCat.forEach((p) => seen.add(p.slug));
    if (inCat.length) groups.push({ category: cat, items: inCat });
  });
  const rest = items.filter((p) => !seen.has(p.slug));
  if (rest.length) groups.push({ category: "Other Work", items: rest });

  return { items, groups };
};
