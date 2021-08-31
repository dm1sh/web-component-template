import html from "@open-wc/rollup-plugin-html";
import { string } from "rollup-plugin-string";
import resolve from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import esbuild from "rollup-plugin-esbuild";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "./demo/index.html",
  output: { dir: "./dist" },
  plugins: [
    resolve(),
    string({
      include: "src/**/*.html",
    }),
    esbuild(),
    html(),
    serve("dist"),
  ],
};

export default config;
