const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  return {
    // pathPrefix: "/subdirectory/", //If using a base path for your site
    dir: {
      input: "src",
      output: "public",
    },
  };
};
