const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  return {
    pathPrefix: "/pose/", // The base path in github
    dir: {
      input: "src",
      output: "public",
    },
  };
};
