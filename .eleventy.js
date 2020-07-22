module.exports = function (config) {
  config.addPassthroughCopy('/css/main.css');
  config.addPassthroughCopy('/js/vibe.js');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
    },
  };
};
