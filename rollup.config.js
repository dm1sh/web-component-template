import esbuild from "rollup-plugin-esbuild";
import { string } from "rollup-plugin-string";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    string({
      include: "src/**/*.html",
    }),
    esbuild(),
  ],
};

export default config;
