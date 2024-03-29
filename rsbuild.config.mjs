import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  tools: {
    rspack: {
      optimization: {
        splitChunks: false,
      },
      experiments: {
        rspackFuture: {
          newTreeshaking: true,
        },
      },
    },
  },
});
