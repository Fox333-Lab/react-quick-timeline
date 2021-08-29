import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import cleaner from "rollup-plugin-cleaner";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        modules: true,
        plugins: [],
        minimize: true,
      }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "runtime",
        plugins: ["@babel/plugin-transform-runtime"],
      }),
      external(),
      // resolve({
      //   // pass custom options to the resolve plugin
      //   customResolveOptions: {
      //     moduleDirectories: "node_modules",
      //   },
      // }),
      resolve(),
      terser(),
      cleaner({
        targets: ["./dist/"],
      }),
    ],
    external: ["react", /@babel\/runtime/],
  },
];
