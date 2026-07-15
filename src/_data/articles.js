const fs = require("fs");
const path = require("path");

module.exports = () => {
  const dir = path.join(__dirname, "..", "content", "articles");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
      const slug = f.replace(/\.json$/, "");
      return Object.assign({ slug }, data);
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};
