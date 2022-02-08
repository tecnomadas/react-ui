module.exports = {
  async viteFinal(config, { configType }) {
    config.resolve.alias["@sass"] = "/src/sass";
    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
};
