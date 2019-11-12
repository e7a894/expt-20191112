import { Configuration } from "@nuxt/types";

const config: Configuration = {
  build: {
    extend(cfg, ctx) {
      if (ctx.isDev && ctx.isClient) {
        cfg.devtool = "inline-cheap-module-source-map";
      }
    }
  },
  buildModules: ["@nuxt/typescript-build"],
  srcDir: "src"
};

export default config;
