module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles/tailwind.css")
    return {
        dir: {
          input: "src",
          data: "_data",
          includes: "_includes",
          layouts: "_layouts"
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
      };
}