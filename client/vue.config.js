const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      modules: ["src", "node_modules"],
      extensions: ["*", ".js", ".scss", ".css"],
      alias: {
        Components: path.resolve(__dirname, "src/components/"),
        Views: path.resolve(__dirname, "src/views/"),
        Config: path.resolve(__dirname, "src/config.js"),
        Root: path.resolve(__dirname, 'src/')
      }
    }
  }
};
