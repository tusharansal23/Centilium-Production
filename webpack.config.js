const path = require("path");

module.exports = function override(config, env) {
  // Add your custom webpack configurations here
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify"),
    "child_process": false,
  };
  
  return config;
};
