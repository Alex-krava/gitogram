const path = require('path');
const rootPath = path.resolve(__dirname, '../src')

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials",
  ],
  framework: "@storybook/vue3",
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            prependData: `@import "./src/assets/scss/variables.scss"; @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");`,
          }
        }
        ],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.pug$/,
      use: [{ loader: "pug-plain-loader" }],
    });

    config.resolve.alias['@'] = rootPath
    config.resolve.alias['~'] = rootPath

    return config;
  },
};
