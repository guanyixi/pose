const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addFilter('upcomingEvents', function(events) {
    const currentDate = new Date();
    const currentDateString = Number(currentDate.toISOString().slice(0,10).replace(/-/g, ''));

    console.log("Current date string: ", currentDateString);

    return events.filter(event => {
      const filename = event.filePathStem.split('/').pop();
      const eventDate = Number(filename.slice(0,8));

      console.log("Event date: ", eventDate);

      return eventDate >= currentDateString;
    });
  });

  return {
    pathPrefix: "/pose/", // The base path in github
    dir: {
      input: "src",
      output: "public",
    },
  };
};
