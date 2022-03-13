module.exports = {
  "stories": ["../components/**/*.stories.mdx", "../components/**/*.stories.js"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  }
};