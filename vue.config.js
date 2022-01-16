module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/gitogram/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/variables.scss";`,
      },
    },
  },
};
