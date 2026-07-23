const markdownIt = require("markdown-it")({ html: true, linkify: true });

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/articles-media": "articles-media" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  eleventyConfig.addFilter("markdownify", (str) => markdownIt.render(str || ""));
  eleventyConfig.addFilter("json", (val) => JSON.stringify(val));
  eleventyConfig.addFilter("dateStr", (d) =>
    new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("initials", (name) =>
    (name || "").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
  );
  eleventyConfig.addFilter("catList", (arr) =>
    (arr || []).map((c) => (typeof c === "string" ? c : c.value)).filter(Boolean)
  );
  eleventyConfig.addFilter("hasCat", (arr, name) =>
    (arr || []).some((c) => (typeof c === "string" ? c : c.value) === name)
  );
  eleventyConfig.addFilter("itemVal", (item) => {
    if (typeof item === "string") return item;
    if (item && typeof item === "object") return Object.values(item)[0];
    return "";
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
